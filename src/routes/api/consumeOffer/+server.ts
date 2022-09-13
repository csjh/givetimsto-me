import type { RequestHandler } from "./$types";
import sql from "$lib/db/postgres";
import type { IOffers } from "$lib/types/db";
import { json } from "@sveltejs/kit";
import qrcode from "qrcode";

export const GET: RequestHandler = async ({ url }) => {
    const token_id = url.searchParams.get("offer");
    const [{ barcodes_with_deal }] = await sql<
        [IOffers]
    >`SELECT barcodes_with_deal FROM offers WHERE token_id = ${token_id}`;
    const [barcode] = barcodes_with_deal;

    if (barcode == null) {
        return json({ error: "Offer already consumed" }, { status: 403 });
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
