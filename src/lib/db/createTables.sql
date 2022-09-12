CREATE TABLE IF NOT EXISTS accounts (
    email varchar NOT NULL,
    barcode varchar NOT NULL,
    refresh_token varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS offers (
    offer_details jsonb,
    token_id varchar NOT NULL UNIQUE,
    barcodes_with_deal varchar[]
);
