import cron from "node-cron";
import sql from "$lib/db/postgres";
import {
    makeNAccountsAndReturnDetails,
    refreshBearerToken,
    activateAllOffers,
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

async function refreshDeals() {
    const bearerTokens = await refreshAllBearerTokens();

    const offers = await Promise.all(
        bearerTokens.map(({ bearer_token }) => getOffers(bearer_token))
    );

    for (let i = 0; i < bearerTokens.length; i++) {
        await activateAllOffers(
            offers[i].map(({ tokenId }) => tokenId),
            bearerTokens[i].bearer_token
        );
    }

    const barcodes_with_offers: Record<string, IOffers> = {};
    const toAdd: IOffers[] = [];
    bearerTokens.forEach(({ barcode }, i) => {
        offers[i].forEach(({ tokenId, offerDetails }) => {
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

    await sql`INSERT INTO offers ${sql(
        toAdd.map((a) => ({
            ...a,
            offer_details: JSON.stringify(a.offer_details)
        }))
    )} ON CONFLICT DO NOTHING`;
    
    for (const [tokenId, { barcodes_with_deal }] of Object.entries(
        barcodes_with_offers
    )) {
        await sql`UPDATE offers SET barcodes_with_deal = ${barcodes_with_deal} WHERE token_id = ${tokenId}`;
    }
}

makeNAccountsAndReturnDetails(5)
    .then((accounts) => sql`INSERT INTO accounts ${sql(accounts)}`)
    .then(refreshDeals);

cron.schedule("0 0 * * *", async () => {
    const newAccounts = await makeNAccountsAndReturnDetails(5);
    await sql`INSERT INTO accounts ${sql(newAccounts)}`;
});

cron.schedule("0 * * * *", refreshDeals);
