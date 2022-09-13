<script lang="ts">
    import OfferCard from "./OfferContent.svelte";
    import Modal from "svelte-simple-modal";

    export let image: string;
    export let price: string;
    export let product: string;
    export let remaining: number;
    export let how_to_redeem: string;
    export let token_id: string;
</script>

<Modal>
    <OfferCard
        {image}
        {price}
        {product}
        {remaining}
        {how_to_redeem}
        {token_id}
    />
</Modal>
