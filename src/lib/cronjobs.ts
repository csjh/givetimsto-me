import cron from "node-cron";
import sql from "$lib/db/postgres";
import type { RequestHandler } from '@sveltejs/kit';
import { getOffers, refreshBearerToken } from '$lib/scripts/accountManipulation';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
const emailNumber = () => Math.floor(Math.random() * 1e10);
const print = (...text: string[]) => console.log(`${text.join(' ')}\n\n\n`);

async function refreshAllBearerTokens() {
	const allAccounts = await sql<{ refresh_token: string }[]>`SELECT refresh_token FROM accounts`;
	const refreshedBearerTokens = await refreshBearerToken(
		allAccounts.map((account) => account.refresh_token)
	);
	for (let i = 0; i < allAccounts.length; i++) {
		await sql`UPDATE accounts SET bearer_token = ${refreshedBearerTokens[i]} WHERE refresh_token = ${allAccounts[i].refresh_token}`;
	}
}

async function makeAccountAndReturnDetails() {
	const email = `${emailNumber()}@givetimsto.me`;
	const birthdayIn7Days = new Date(Date.now() + 1000 * 60 * 60 * 24 * 8)
		.toISOString()
		.split('T')[0];
	const signUpConfirmationJWT = await createAccount('Jimmy', email, birthdayIn7Days);
	print(signUpConfirmationJWT);
	sleep(1);

	while (!(await completeSignUp(signUpConfirmationJWT))) sleep(1);

	await getSignInJWT(email);
	print('Confirmed signin');
	sleep(1);

	const { sessionId, challengeCode } = await validateAuthJWT(signUpConfirmationJWT);
	print(sessionId, challengeCode);
	sleep(1);

	const { IdToken: bearerToken, RefreshToken: refreshToken } = await getAmazonJwt(
		challengeCode,
		email,
		sessionId
	);
	print(bearerToken);
	sleep(1);

	const barcode = await getBarcode(bearerToken);

	return {
		bearer_token: bearerToken,
		barcode,
		email,
		refresh_token: refreshToken
	};
}

/*

export const get: RequestHandler = async () => {
	await refreshAllBearerTokens();
	const allAccounts = await sql`SELECT bearer_token FROM accounts`;
	const details = await makeAccountAndReturnDetails();
	await sql`INSERT INTO accounts ${sql(details)}`;
	return { status: 200 };
};
*/