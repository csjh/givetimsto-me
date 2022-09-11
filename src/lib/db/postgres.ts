import dotenv from "dotenv";
dotenv.config();

import postgres from "postgres";

const uri = process.env.DATABASE_URL;
const options = {};

if (!uri) {
    throw new Error("Please add your Postgres URI to .env");
}

const sql = postgres(uri, options);

export default sql;
