<script lang="ts">
    import { OfferCard } from "$lib/components";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>Welcome to Give Tims To Me!</h1>

<div class="flexbox">
    {#each data.offers as offer}
        <OfferCard
            {...offer.offer_details}
            token_id={offer.token_id}
            remaining={offer.barcodes}
        />
    {/each}
</div>

<style>
    h1 {
        font-family: sofia_pro, Helvetica, Arial, sans-serif;
        text-align: center;
        color: rgb(202, 197, 190);
    }
    .flexbox {
        display: flex;
        flex-wrap: wrap;
    }
</style>
