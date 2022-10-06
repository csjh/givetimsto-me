import cron from "node-cron";
import sql from "$lib/db/postgres";
import {
    makeNAccountsAndReturnDetails,
    refreshBearerToken,
    getOffers
} from "$lib/scripts/accountManipulation";
import type { IOffers, IAccounts } from "$lib/types/db";
import type { OfferDetails } from "$lib/types/graphql";

/**
 * Need to have:
 * - Renew offers
 * - Activate offers
 * - Make new accounts
 */

async function refreshAllBearerTokens() {
    const allAccounts = await sql<
        IAccounts[]
    >`SELECT refresh_token, barcode FROM accounts`;

    return await Promise.all(
        allAccounts.map(async ({ refresh_token, barcode }) => ({
            barcode,
            bearer_token: await refreshBearerToken(refresh_token)
        }))
    );
}

export async function refreshDeals() {
    const bearerTokens = await refreshAllBearerTokens();

    const offers = await Promise.all(
        bearerTokens.map(({ bearer_token }) => getOffers(bearer_token))
    );

    const barcodes_with_offers: Record<string, IOffers> = {};
    const toAdd: IOffers[] = [];
    bearerTokens.forEach(({ barcode }, i) => {
        offers[i].forEach(({ couponId: tokenId, offerDetails }) => {
            if (!(tokenId in barcodes_with_offers)) {
                const details: OfferDetails = JSON.parse(offerDetails);

                barcodes_with_offers[tokenId] = {
                    offer_details: details,
                    token_id: tokenId,
                    barcodes_with_deal: []
                };

                toAdd.push(barcodes_with_offers[tokenId]);
            }

            barcodes_with_offers[tokenId].barcodes_with_deal.push(barcode);
        });
    });

    await sql`DELETE FROM offers`;
    await sql`INSERT INTO offers ${sql(
        toAdd.map((a) => ({
            ...a,
            offer_details: a.offer_details as never
        }))
    )}`;

    for (const [tokenId, { barcodes_with_deal }] of Object.entries(
        barcodes_with_offers
    )) {
        await sql`UPDATE offers SET barcodes_with_deal = ${barcodes_with_deal} WHERE token_id = ${tokenId}`;
    }
}

//makeNAccountsAndReturnDetails(1)
//    .then((accounts) => sql`INSERT INTO accounts ${sql(accounts)}`)
//    .then(refreshDeals);

cron.schedule("0 0 * * *", async () => {
    const newAccounts = await makeNAccountsAndReturnDetails(1);
    await sql`INSERT INTO accounts ${sql(newAccounts)}`;
});

refreshDeals();
cron.schedule("0 * * * *", refreshDeals);
