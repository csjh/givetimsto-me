import * as Tims from "$lib/types/graphql";
import type { Amazon } from "$lib/types/amazon";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
const print = (...text: unknown[]) => console.log(`${text.map((a) => JSON.stringify(a)).join(" ")}\n\n\n`);

const TIM_HORTONS_COGNITO_ID = "3fmtnokmptq4l3q7pfham4o2fn";

export async function makeNAccountsAndReturnDetails(numberOfAccounts: number) {
    const userDetails = [];
    const birthday = new Date(Date.now() + 1000 * 60 * 60 * 24 * 8); // date in 8 days
    birthday.setFullYear(
        birthday.getFullYear() - 18 - Math.floor(Math.random() * 50)
    );

    for (let i = 0; i < numberOfAccounts; i++) {
        userDetails.push({
            name: "Johnny",
            email: `alex+${Math.floor(Math.random() * 1e10)}@gmail.com`,
            dob: birthday.toISOString().split("T")[0]
        });
    }
    const signUpConfirmationJWTsWithEmails = await createAccounts(userDetails);
    print(signUpConfirmationJWTsWithEmails);
    for (const jwt of signUpConfirmationJWTsWithEmails) {
        if (jwt == null) {
            throw new Error("jwt is null");
        }
    }
    await sleep(1);

    while (
        !(await completeSignUp(
            signUpConfirmationJWTsWithEmails.map(({ jwt }) => jwt)
        ))
    )
        await sleep(1); // wait for confirmation to complete

    // possibly useless request but make it nonetheless to preserve normalcy
    await getSignInJWTs(
        signUpConfirmationJWTsWithEmails.map(({ email }) => email)
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
        users.map(async ({ IdToken, RefreshToken, email }) => ({
            barcode: await getBarcode(IdToken),
            email,
            refresh_token: RefreshToken
        }))
    );
}

/**
 * Helper function to make requests to Tim Horton's GraphQL endpoint
 */
async function getTimsGraphQL<Input, Output>(
    data: { operationName: string; variables: Input; query: string }[],
    headers?: object
) {
    const response = await fetch("https://use1-prod-th.rbictg.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw Error(`Error code ${response.status}: ${response.statusText}\n${await response.text()}`)
    }

    const response_data: { data: Output, errors?: Tims.Errors }[] = await response.json();
    const { errors } = response_data.find(({ errors }) => errors != null) ?? {};
    if (errors != null) {
        throw Error(`GQL Error code ${errors.extensions.statusCode}: ${errors.extensions.code}\n${errors.message}`)
    }

    return response_data;
}
async function getAmazonGraphQL<T>(action: string, data: object) {
    const headers = {
        "Content-Type": "application/x-amz-json-1.1",
        "X-Amz-Target": `AWSCognitoIdentityProviderService.${action}`
    };

    const response = await fetch(
        "https://cognito-idp.us-east-1.amazonaws.com/",
        {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        }
    );

    return (await response.json()) as T;
}

/**
 * Creates account with the given details and returns the jwt for confirmation
 */
async function createAccounts(
    userOrUsers: { name: string; email: string; dob: string }[]
) {
    const json_data = userOrUsers.map((user) => ({
        operationName: "SignUp",
        variables: {
            input: {
                country: Tims.IsoCountryCode.CA,
                dob: user.dob,
                name: user.name,
                phoneNumber: "",
                platform: Tims.Platform.WEB,
                stage: Tims.Stage.PROD,
                userName: user.email,
                wantsPromotionalEmails: true,
                zipcode: ""
            }
        },
        query: "mutation SignUp($input: SignUpUserInput!) {\n  signUp(userInfo: $input)\n}\n"
    }));

    const response = await getTimsGraphQL<
        Tims.ISignUpMutationVariables,
        Tims.ISignUpMutation
    >(json_data);
    return response.map((res, index) => ({
        email: userOrUsers[index].email,
        jwt: res.data.signUp
    }));
}

async function completeSignUp(jwts: string[]) {
    const json_data = jwts.map((jwt) => ({
        operationName: "SignUpComplete",
        variables: { jwt },
        query: "query SignUpComplete($jwt: String!) {\n  signUpComplete(jwt: $jwt)\n}\n"
    }));

    const response = await getTimsGraphQL<
        Tims.ISignUpCompleteQueryVariables,
        Tims.ISignUpCompleteQuery
    >(json_data);
    return response.every((response) => response.data.signUpComplete);
}

async function getSignInJWTs(emails: string[]) {
    const json_data = emails.map((email) => ({
        operationName: "SignInJWT",
        variables: {
            input: {
                email,
                stage: Tims.Stage.PROD,
                platform: Tims.Platform.WEB
            }
        },
        query: "mutation SignInJWT($input: SignInUserInput!) {\n  signInJWT(userInfo: $input)\n}\n"
    }));

    const response = await getTimsGraphQL<
        Tims.ISignInJwtMutationVariables,
        Tims.ISignInJwtMutation
    >(json_data);
    return response.map((res, index) => ({
        email: emails[index],
        jwt: res.data.signInJWT
    }));
}

async function validateAuthJWTs(users: { jwt: string; email: string }[]) {
    const json_data = users.map((user) => ({
        operationName: "ValidateAuthJwt",
        variables: {
            input: { jwt: user.jwt }
        },
        query: "mutation ValidateAuthJwt($input: validateAuthJwtInput!) {\n  validateAuthJwt(authInput: $input) {\n    challengeCode\n    sessionId\n    __typename\n  }\n}\n"
    }));

    const response = await getTimsGraphQL<
        Tims.IValidateAuthJwtMutationVariables,
        Tims.IValidateAuthJwtMutation
    >(json_data);
    return response.map(({ data }, index) => ({
        jwt: users[index].jwt,
        email: users[index].email,
        sessionAndChallenge: data.validateAuthJwt
    }));
}

async function getAmazonJwt(user: {
    email: string;
    sessionAndChallenge: { sessionId: string; challengeCode: string };
}) {
    const json_data = {
        ChallengeName: "CUSTOM_CHALLENGE",
        ChallengeResponses: {
            USERNAME: user.email,
            ANSWER: user.sessionAndChallenge.challengeCode
        },
        ClientId: TIM_HORTONS_COGNITO_ID,
        Session: user.sessionAndChallenge.sessionId
    };

    const response = await getAmazonGraphQL<Amazon>(
        "RespondToAuthChallenge",
        json_data
    );

    return { email: user.email, ...response.AuthenticationResult };
}

async function getBarcode(amazonJwt: string) {
    const headers = {
        authorization: `Bearer ${amazonJwt}`
    };

    const json_data = [
        {
            operationName: "GetLoyaltyCards",
            variables: {},
            query: "query GetLoyaltyCards {  getLoyaltyCards {\n    count\n    cards {\n      barcode\n      cardFormat\n      cardId\n      cardType\n      name\n      __typename\n    }\n    __typename\n  }\n}\n"
        }
    ];

    const response = await getTimsGraphQL<unknown, Tims.IGetLoyaltyCardsQuery>(
        json_data,
        headers
    );
    const barcode = response[0].data.getLoyaltyCards?.cards[0]?.barcode;
    return `${barcode}|SR|`;
}

export async function getOffers(amazonJwt: string) {
    const headers = {
        authorization: `Bearer ${amazonJwt}`
    };

    const json_data = [
        {
            operationName: "evaluateAllUserOffers",
            variables: {
                locale: Tims.Locale.EN,
                platform: Tims.Platform.WEB,
                serviceMode: undefined,
                redeemedOn: new Date().toISOString().replace("Z", "-04:00"),
                storeId: undefined
            },
            query: "query evaluateAllUserOffers($locale: Locale, $platform: Platform, $redeemedOn: String!, $serviceMode: ServiceMode, $storeId: String) {\n  evaluateAllUserOffers(locale: $locale, platform: $platform, redeemedOn: $redeemedOn, serviceMode: $serviceMode, storeId: $storeId) {\n    offersFeedback {\n      ...OfferFeedbackEntryFragment\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment OfferFeedbackEntryFragment on CouponUserOffersFeedbackEntry {\n  cartEntry {\n    cartId: lineId\n    __typename\n  }\n  _id: couponId\n  tokenId\n  couponId\n  offerDetails\n  offerState\n  offerVariables {\n    key\n    type\n    value\n    __typename\n  }\n  rank\n  redemptionEligibility {\n    isRedeemable\n    isValid\n    evaluationFeedback {\n      code\n      condition\n      message\n      redeemableForSeconds\n      redeemableInSeconds\n      ruleSetType\n      sanityId\n      __typename\n    }\n    validationErrors {\n      code\n      message\n      ruleSetType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n"
        }
    ];

    const response = await getTimsGraphQL<
        Tims.IEvaluateAllUserOffersQueryVariables,
        Tims.IEvaluateAllUserOffersQuery
    >(json_data, headers);
    return response[0].data.evaluateAllUserOffers.offersFeedback;
}

export async function activateAllOffers(
    tokenId: string[],
    bearerToken: string
) {
    const headers = {
        authorization: `Bearer ${bearerToken}`
    };

    const json_data = tokenId.map((tokenId) => ({
        operationName: "activateLoyaltyOffer",
        variables: { tokenId },
        query: "mutation activateLoyaltyOffer($tokenId: String!) {\n  activateLoyaltyOffer(tokenId: $tokenId)\n}\n"
    }));

    return await getTimsGraphQL<
        Tims.IActivateLoyaltyOfferMutationVariables,
        Tims.IActivateLoyaltyOfferMutation
    >(json_data, headers);
}

export async function refreshBearerToken(refreshToken: string) {
    const json_data = {
        ClientId: TIM_HORTONS_COGNITO_ID,
        AuthFlow: "REFRESH_TOKEN_AUTH",
        AuthParameters: {
            REFRESH_TOKEN: refreshToken,
            DEVICE_KEY: undefined
        }
    };

    const response = await getAmazonGraphQL<Amazon>("InitiateAuth", json_data);

    return response.AuthenticationResult.IdToken;
}
