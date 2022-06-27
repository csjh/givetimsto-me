const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
const print = (...text: unknown[]) => console.log(`${text.join(" ")}\n\n\n`);

// const TIMBITS_COUPON_ID = '56b8ccb7-7521-43fb-bf56-bbf98831735f';
const TIM_HORTONS_COGNITO_ID = "3fmtnokmptq4l3q7pfham4o2fn";

export async function makeNAccountsAndReturnDetails(numberOfAccounts: number) {
    const userDetails = [];
    const birthdayIn7Days = new Date(Date.now() + 1000 * 60 * 60 * 24 * 8)
        .toISOString()
        .split("T")[0];
    for (let i = 0; i < numberOfAccounts; i++) {
        userDetails.push({
            name: "Johnny",
            email: `${Math.floor(Math.random() * 1e10)}@givetimsto.me`,
            dob: birthdayIn7Days
        });
    }
    const signUpConfirmationJWTsWithEmails = await createAccounts(userDetails);
    print(signUpConfirmationJWTsWithEmails);
    await sleep(1);

    while (
        !(await completeSignUp(
            signUpConfirmationJWTsWithEmails.map((obj) => obj.jwt)
        ))
    )
        await sleep(1);

    await getSignInJWTs(
        signUpConfirmationJWTsWithEmails.map((obj) => obj.email)
    );
    print("Confirmed signin");
    await sleep(1);

    const authenticationJwts = await validateAuthJWTs(
        signUpConfirmationJWTsWithEmails
    );
    print(authenticationJwts);
    await sleep(1);

    const users = await Promise.all(authenticationJwts.map(getAmazonJwt));
    print(users);
    await sleep(1);

    return await Promise.all(
        users.map(
            async ({
                IdToken: bearer_token,
                RefreshToken: refresh_token,
                email
            }) => ({
                bearer_token,
                barcode: await getBarcode(bearer_token),
                email,
                refresh_token
            })
        )
    );
}

async function getTimsGraphQL(data: object, headers?: object) {
    const response = await fetch("https://use1-prod-th.rbictg.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(data)
    });
    return await response.json();
}

async function createAccounts(
    userOrUsers: { name: string; email: string; dob: string }[]
) {
    const json_data = userOrUsers.map((user) => ({
        operationName: "SignUp",
        variables: {
            input: {
                country: "CAN",
                dob: user.dob,
                name: user.name,
                phoneNumber: "",
                platform: "web",
                stage: "prod",
                userName: user.email,
                wantsPromotionalEmails: true,
                zipcode: ""
            }
        },
        query: "mutation SignUp($input: SignUpUserInput!) {\n  signUp(userInfo: $input)\n}\n"
    }));

    const response: { data: { signUp: string } }[] = await getTimsGraphQL(
        json_data
    );
    return response.map((res, index) => ({
        email: userOrUsers[index].email,
        jwt: res.data.signUp
    }));
}

async function completeSignUp(jwts: string[]): Promise<boolean> {
    const json_data = jwts.map((jwt) => ({
        operationName: "SignUpComplete",
        variables: { jwt },
        query: "query SignUpComplete($jwt: String!) {\n  signUpComplete(jwt: $jwt)\n}\n"
    }));

    const response: { data: { signUpComplete: boolean } }[] =
        await getTimsGraphQL(json_data);
    return response.every((response) => response["data"]["signUpComplete"]);
}

async function getSignInJWTs(
    emails: string[]
): Promise<{ email: string; jwt: string }[]> {
    const json_data = emails.map((email) => ({
        operationName: "SignInJWT",
        variables: {
            input: {
                email,
                stage: "prod",
                platform: "web"
            }
        },
        query: "mutation SignInJWT($input: SignInUserInput!) {\n  signInJWT(userInfo: $input)\n}\n"
    }));

    const response: { data: { signInJWT: string } }[] = await getTimsGraphQL(
        json_data
    );
    return response.map((res, index) => ({
        email: emails[index],
        jwt: res.data.signInJWT
    }));
}

async function validateAuthJWTs(
    users: { jwt: string; email: string }[]
): Promise<
    {
        email: string;
        jwt: string;
        sessionAndChallenge: { sessionId: string; challengeCode: string };
    }[]
> {
    const json_data = users.map((user) => ({
        operationName: "ValidateAuthJwt",
        variables: {
            input: { jwt: user.jwt }
        },
        query: "mutation ValidateAuthJwt($input: validateAuthJwtInput!) {\n  validateAuthJwt(authInput: $input) {\n    challengeCode\n    sessionId\n    __typename\n  }\n}\n"
    }));

    const response: {
        data: { validateAuthJwt: { sessionId: string; challengeCode: string } };
    }[] = await getTimsGraphQL(json_data);
    return response.map((res, index) => ({
        jwt: users[index].jwt,
        email: users[index].email,
        sessionAndChallenge: res.data.validateAuthJwt
    }));
}

async function getAmazonJwt(user: {
    email: string;
    sessionAndChallenge: { sessionId: string; challengeCode: string };
}): Promise<{ email: string; IdToken: string; RefreshToken: string }> {
    const headers = {
        "Content-Type": "application/x-amz-json-1.1",
        "X-Amz-Target":
            "AWSCognitoIdentityProviderService.RespondToAuthChallenge"
    };

    const json_data = {
        ChallengeName: "CUSTOM_CHALLENGE",
        ChallengeResponses: {
            USERNAME: user.email,
            ANSWER: user.sessionAndChallenge.challengeCode
        },
        ClientId: TIM_HORTONS_COGNITO_ID,
        Session: user.sessionAndChallenge.sessionId
    };

    const response = await fetch(
        "https://cognito-idp.us-east-1.amazonaws.com/",
        {
            method: "POST",
            headers,
            body: JSON.stringify(json_data)
        }
    ).then((response) => response.json());

    return { email: user.email, ...response["AuthenticationResult"] };
}

async function getBarcode(amazonJwt: string): Promise<string> {
    const headers = {
        authorization: `Bearer ${amazonJwt}`
    };

    const json_data = {
        operationName: "GetLoyaltyCards",
        variables: {},
        query: "query GetLoyaltyCards {  getLoyaltyCards {\n    count\n    cards {\n      barcode\n      cardFormat\n      cardId\n      cardType\n      name\n      __typename\n    }\n    __typename\n  }\n}\n"
    };

    const response = await getTimsGraphQL(json_data, headers);
    return `${response["data"]["getLoyaltyCards"]["cards"][0]["barcode"]}|SR|`;
}

export async function getOffers(
    amazonJwt: string
): Promise<{ couponId: string; tokenId: string }[]> {
    const headers = {
        authorization: `Bearer ${amazonJwt}`
    };

    const json_data = {
        operationName: "evaluateAllUserOffers",
        variables: {
            locale: "en",
            platform: "web",
            serviceMode: undefined,
            redeemedOn: new Date().toISOString().replace("Z", "-04:00"),
            storeId: undefined
        },
        query: "query evaluateAllUserOffers($locale: Locale, $platform: Platform, $redeemedOn: String!, $serviceMode: ServiceMode, $storeId: String) {\n  evaluateAllUserOffers(locale: $locale, platform: $platform, redeemedOn: $redeemedOn, serviceMode: $serviceMode, storeId: $storeId) {\n    offersFeedback {\n      ...OfferFeedbackEntryFragment\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment OfferFeedbackEntryFragment on CouponUserOffersFeedbackEntry {\n  cartEntry {\n    cartId: lineId\n    __typename\n  }\n  _id: couponId\n  tokenId\n  couponId\n  offerDetails\n  offerState\n  offerVariables {\n    key\n    type\n    value\n    __typename\n  }\n  rank\n  redemptionEligibility {\n    isRedeemable\n    isValid\n    evaluationFeedback {\n      code\n      condition\n      message\n      redeemableForSeconds\n      redeemableInSeconds\n      ruleSetType\n      sanityId\n      __typename\n    }\n    validationErrors {\n      code\n      message\n      ruleSetType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n"
    };

    const response = await getTimsGraphQL(json_data, headers);
    return response["data"]["evaluateAllUserOffers"]["offersFeedback"];
}

export async function findAndActivateOffer(
    offers: { couponId: string; tokenId: string }[],
    desiredCoupon: string,
    bearerToken: string
) {
    let tokenId = "";
    for (const offer of offers) {
        if (offer.couponId == desiredCoupon) {
            tokenId = offer.tokenId;
            break;
        }
    }

    const headers = {
        authorization: `Bearer ${bearerToken}`
    };
    const json_data = {
        operationName: "activateLoyaltyOffer",
        variables: {
            tokenId: tokenId
        },
        query: "mutation activateLoyaltyOffer($tokenId: String!) {\n  activateLoyaltyOffer(tokenId: $tokenId)\n}\n"
    };
    return await getTimsGraphQL(json_data, headers);
}

export async function refreshBearerToken(
    refreshToken: string
): Promise<string> {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityProviderService.InitiateAuth"
    };

    const json_data = {
        ClientId: TIM_HORTONS_COGNITO_ID,
        AuthFlow: "REFRESH_TOKEN_AUTH",
        AuthParameters: {
            REFRESH_TOKEN: refreshToken,
            DEVICE_KEY: undefined
        }
    };

    const response = await fetch(
        "https://cognito-idp.us-east-1.amazonaws.com/",
        {
            method: "POST",
            headers,
            body: JSON.stringify(json_data)
        }
    ).then((response) => response.json());

    return response["AuthenticationResult"]["IdToken"];
}
