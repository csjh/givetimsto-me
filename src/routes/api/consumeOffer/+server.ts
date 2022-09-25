import type { RequestHandler } from "./$types";
import sql from "$lib/db/postgres";
import type { IOffers, IAccounts } from "$lib/types/db";
import { json } from "@sveltejs/kit";
import qrcode from "qrcode";
import {
    getOffers,
    findAndActivateOffer,
    refreshBearerToken
} from "$lib/scripts/accountManipulation";

export const GET: RequestHandler = async ({ url }) => {
    const token_id = url.searchParams.get("offer") as string;
    const [{ barcodes_with_deal }] = await sql<
        [IOffers]
    >`SELECT barcodes_with_deal FROM offers WHERE token_id = ${token_id}`;
    const [barcode] = barcodes_with_deal;

    if (barcode == null) {
        return json({ error: "Offer already consumed" }, { status: 403 });
    }

    const [{ refresh_token }] = await sql<
        [IAccounts]
    >`SELECT refresh_token FROM accounts WHERE barcode = ${barcode}`;
    const bearer_token = await refreshBearerToken(refresh_token);

    if (!bearer_token) {
        return json(
            { error: "Could not refresh bearer token" },
            { status: 403 }
        );
    }

    const offers = await getOffers(bearer_token);
    const success = await findAndActivateOffer(offers, token_id, bearer_token);

    if (!success) {
        return json({ error: "Failed to activate offer" }, { status: 403 });
    }

    await sql`UPDATE offers SET barcodes_with_deal = array_remove(barcodes_with_deal, ${barcode}) WHERE token_id = ${token_id}`;

    const qr = await qrcode.toBuffer(barcode, {
        color: {
            dark: "#000000FF",
            light: "#FFFFFFFF"
        },
        width: 300
    });
    return new Response(qr);
};
