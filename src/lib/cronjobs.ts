import cron from "node-cron";
import sql from "$lib/db/postgres";
import {
    makeNAccountsAndReturnDetails,
    refreshBearerToken
} from "$lib/scripts/accountManipulation";

async function refreshAllBearerTokens() {
    const allAccounts = await sql<
        { refresh_token: string }[]
    >`SELECT refresh_token FROM accounts`;
    const refreshedBearerTokens = await Promise.all(allAccounts.map(({ refresh_token }) => refreshBearerToken(refresh_token)));
    for (let i = 0; i < allAccounts.length; i++) {
        await sql`UPDATE accounts SET bearer_token = ${refreshedBearerTokens[i]} WHERE refresh_token = ${allAccounts[i].refresh_token}`;
    }
}

cron.schedule("0 0 * * *", async () => {
    const newAccounts = await makeNAccountsAndReturnDetails(5);
    await sql`INSERT INTO accounts ${sql(newAccounts)}`;
    await refreshAllBearerTokens();
});
