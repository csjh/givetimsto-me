import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch("/getOffers");
    const offers: {
        token_id: string;
        barcodes: number;
        offer_details: {
            product: string;
            price: string;
            image: string;
        };
    }[] = await response.json();
    return { offers };
};
