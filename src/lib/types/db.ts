import type { OfferDetails } from "./graphql";

export interface IAccounts {
    email: string;
    barcode: string;
    refresh_token: string;
}

export interface IOffers {
    offer_details: OfferDetails;
    token_id: string;
    barcodes_with_deal: string[];
}
