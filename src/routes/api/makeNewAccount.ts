import type { RequestHandler } from "@sveltejs/kit";
import { makeAccountAndReturnDetails } from "../../lib/scripts/accountManipulation";
import sql from "src/lib/db/postgres";

export const get: RequestHandler = async () => {
    const details = await makeAccountAndReturnDetails();
    await sql`INSERT INTO accounts ${sql(details)}`;
    return { status: 200 };
};
