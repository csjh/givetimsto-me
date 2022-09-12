import type { RequestHandler } from "./$types";
import type { IOffers } from "$lib/types/db";
import sql from "$lib/db/postgres";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const sql_offers = await sql<IOffers[]>`SELECT * FROM offers`;
    const offers = sql_offers.map(
        ({ token_id, barcodes_with_deal, offer_details }) => ({
            token_id: token_id,
            barcodes: barcodes_with_deal.length,
            offer_details: {
                product: offer_details?.description?.en[0]?.children[0]?.text,
                price: offer_details.internalName,
                image:
                    "https://cdn.sanity.io/images/" +
                    offer_details?.localizedImage?.en?.app?.asset?.path
            }
        })
    );

    return json(offers.filter((offer) => offer.barcodes));
};
