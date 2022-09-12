<script lang="ts">
    import { OfferCard } from "$lib/components";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>Welcome to Give Tims To Me!</h1>

{#each data.offers as offer}
    <OfferCard {...offer.offer_details} remaining={offer.barcodes} />
{/each}
