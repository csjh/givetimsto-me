
// const TIMBITS_COUPON_ID = '56b8ccb7-7521-43fb-bf56-bbf98831735f';
const TIM_HORTONS_COGNITO_ID = '3fmtnokmptq4l3q7pfham4o2fn';

async function getTimsGraphQL(data: object, headers?: object) {
	const response = await fetch('https://use1-prod-th.rbictg.com/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', ...headers },
		body: JSON.stringify(data)
	});
	return await response.json();
}

async function createAccount(name: string, email: string, dob: string): Promise<string> {
	const json_data = {
		operationName: 'SignUp',
		variables: {
			input: {
				country: 'CAN',
				dob,
				name,
				phoneNumber: '',
				platform: 'web',
				stage: 'prod',
				userName: email,
				wantsPromotionalEmails: true,
				zipcode: ''
			}
		},
		query: 'mutation SignUp($input: SignUpUserInput!) {\n  signUp(userInfo: $input)\n}\n'
	};

	const response = await getTimsGraphQL(json_data);
	return response['data']['signUp'];
}

async function completeSignUp(jwt: string): Promise<boolean> {
	const json_data = {
		operationName: 'SignUpComplete',
		variables: { jwt },
		query: 'query SignUpComplete($jwt: String!) {\n  signUpComplete(jwt: $jwt)\n}\n'
	};

	const response = await getTimsGraphQL(json_data);
	return response['data']['signUpComplete'];
}

async function getSignInJWT(email: string): Promise<string> {
	const json_data = {
		operationName: 'SignInJWT',
		variables: {
			input: {
				email,
				stage: 'prod',
				platform: 'web'
			}
		},
		query: 'mutation SignInJWT($input: SignInUserInput!) {\n  signInJWT(userInfo: $input)\n}\n'
	};

	const response = await getTimsGraphQL(json_data);
	return response['data']['signInJWT'];
}

async function validateAuthJWT(jwt: string): Promise<{ sessionId: string; challengeCode: string }> {
	const json_data = {
		operationName: 'ValidateAuthJwt',
		variables: {
			input: { jwt }
		},
		query:
			'mutation ValidateAuthJwt($input: validateAuthJwtInput!) {\n  validateAuthJwt(authInput: $input) {\n    challengeCode\n    sessionId\n    __typename\n  }\n}\n'
	};

	const response = await getTimsGraphQL(json_data);
	return response['data']['validateAuthJwt'];
}

async function getAmazonJwt(
	challenge: string,
	email: string,
	session: string
): Promise<{ IdToken: string; RefreshToken: string }> {
	const headers = {
		'Content-Type': 'application/x-amz-json-1.1',
		'X-Amz-Target': 'AWSCognitoIdentityProviderService.RespondToAuthChallenge'
	};

	const json_data = {
		ChallengeName: 'CUSTOM_CHALLENGE',
		ChallengeResponses: {
			USERNAME: email,
			ANSWER: challenge
		},
		ClientId: TIM_HORTONS_COGNITO_ID,
		Session: session
	};

	const response = await fetch('https://cognito-idp.us-east-1.amazonaws.com/', {
		method: 'POST',
		headers,
		body: JSON.stringify(json_data)
	}).then((response) => response.json());

	return response['AuthenticationResult'];
}

async function getBarcode(amazonJwt: string): Promise<string> {
	const headers = {
		authorization: `Bearer ${amazonJwt}`
	};

	const json_data = {
		operationName: 'GetLoyaltyCards',
		variables: {},
		query:
			'query GetLoyaltyCards {  getLoyaltyCards {\n    count\n    cards {\n      barcode\n      cardFormat\n      cardId\n      cardType\n      name\n      __typename\n    }\n    __typename\n  }\n}\n'
	};

	const response = await getTimsGraphQL(json_data, headers);
	return `${response['data']['getLoyaltyCards']['cards'][0]['barcode']}|SR|`;
}

export async function getOffers(
	amazonJwt: string
): Promise<{ couponId: string; tokenId: string }[]> {
	const headers = {
		authorization: `Bearer ${amazonJwt}`
	};

	const json_data = {
		operationName: 'evaluateAllUserOffers',
		variables: {
			locale: 'en',
			platform: 'web',
			serviceMode: undefined,
			redeemedOn: new Date().toISOString().replace('Z', '-04:00'),
			storeId: undefined
		},
		query:
			'query evaluateAllUserOffers($locale: Locale, $platform: Platform, $redeemedOn: String!, $serviceMode: ServiceMode, $storeId: String) {\n  evaluateAllUserOffers(locale: $locale, platform: $platform, redeemedOn: $redeemedOn, serviceMode: $serviceMode, storeId: $storeId) {\n    offersFeedback {\n      ...OfferFeedbackEntryFragment\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment OfferFeedbackEntryFragment on CouponUserOffersFeedbackEntry {\n  cartEntry {\n    cartId: lineId\n    __typename\n  }\n  _id: couponId\n  tokenId\n  couponId\n  offerDetails\n  offerState\n  offerVariables {\n    key\n    type\n    value\n    __typename\n  }\n  rank\n  redemptionEligibility {\n    isRedeemable\n    isValid\n    evaluationFeedback {\n      code\n      condition\n      message\n      redeemableForSeconds\n      redeemableInSeconds\n      ruleSetType\n      sanityId\n      __typename\n    }\n    validationErrors {\n      code\n      message\n      ruleSetType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n'
	};

	const response = await getTimsGraphQL(json_data, headers);
	return response['data']['evaluateAllUserOffers']['offersFeedback'];
}

export async function findAndActivateOffer(
	offers: { couponId: string; tokenId: string }[],
	desiredCoupon: string,
	bearerToken: string
) {
	let tokenId = '';
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
		operationName: 'activateLoyaltyOffer',
		variables: {
			tokenId: tokenId
		},
		query: 'mutation activateLoyaltyOffer($tokenId: String!) {\n  activateLoyaltyOffer(tokenId: $tokenId)\n}\n'
	};
	return await getTimsGraphQL(json_data, headers);
}

export async function refreshBearerToken(refreshToken: string): Promise<string> {
	const headers = {
		'content-type': 'application/x-amz-json-1.1',
		'x-amz-target': 'AWSCognitoIdentityProviderService.InitiateAuth'
	};

	const json_data = {
		ClientId: TIM_HORTONS_COGNITO_ID,
		AuthFlow: 'REFRESH_TOKEN_AUTH',
		AuthParameters: {
			REFRESH_TOKEN: refreshToken,
			DEVICE_KEY: undefined
		}
	};

	const response = await fetch('https://cognito-idp.us-east-1.amazonaws.com/', {
		method: 'POST',
		headers,
		body: JSON.stringify(json_data)
	}).then((response) => response.json());

	return response['AuthenticationResult']['IdToken'];
}
