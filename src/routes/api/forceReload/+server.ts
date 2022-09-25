import type { RequestHandler } from "./$types";
import { refreshDeals } from "$lib/cronjobs";

export const GET: RequestHandler = async () => {
    await refreshDeals();
    return new Response(undefined, { status: 204 });
};
