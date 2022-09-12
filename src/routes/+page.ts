import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch("/api/getOffers");
    const offers: {
        token_id: string;
        barcodes: number;
        offer_details: {
            product: string;
            price: string;
            image: string;
            how_to_redeem: string;
        };
    }[] = await response.json();
    return { offers };
};
