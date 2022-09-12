<script lang="ts">
    import { getContext } from "svelte";

    export let price: string;
    export let product: string;
    export let remaining: number;
    export let srcset: string;
    export let vw: string;
    export let how_to_redeem: string;

    let isOutsideDiv = true;

    const { close }: { close: () => void } = getContext("simple-modal");
</script>

<div
    class="popupOutline"
    data-reach-dialog-overlay=""
    on:click={() => (isOutsideDiv ? close() : void 0)}
>
    <div
        on:mouseenter={() => (isOutsideDiv = false)}
        on:mouseleave={() => (isOutsideDiv = true)}
        aria-modal="true"
        role="dialog"
        tabindex="-1"
        class="mobPadding borderAndColor"
        aria-labelledby="modal-heading"
        data-reach-dialog-content=""
    >
        <button on:click={close} class="mainBox mainBoxShadow"
            ><span class="closeFmt">Close</span><svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svgStuff"
            >
                <title>Close Icon</title>
                <path
                    d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"
                />
            </svg></button
        >
        <div class="setImg imgFormat">
            <picture>
                <source sizes={vw} {srcset} />
                <img alt={price} src="" draggable="true" class="imgBox" />
            </picture>
            <div class="noClue" />
        </div>
        <div class="detailsBox">
            <div id="modal-heading" class="formatPrice">
                {price}
            </div>
            <p class="formatProduct">
                {product}
            </p>
            <div>
                <button
                    disabled={remaining == 0}
                    aria-disabled="false"
                    class="formatButton"
                    tabindex="0">Activate</button
                >
            </div>
            <div class="hCEcRG">
                <p class="formatRedeem">How to Redeem</p>
                <div class="runningAnimation">
                    <div class="removeMargin setSize">
                        {@html how_to_redeem}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /*! CSS Used from: Embedded */
    button::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    :focus:not([data-focusvisible-polyfill]) {
        outline: none;
    }
    /*! CSS Used from: Embedded */
    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }
    :focus {
        outline: -webkit-focus-ring-color auto 5px;
    }
    p {
        font-weight: normal;
    }
    button {
        color: inherit;
    }
    /*! CSS Used from: Embedded */
    .formatButton {
        font-family: sofia_pro_bold, Helvetica, Arial, sans-serif;
        font-weight: normal;
        font-size: 1.25rem;
        text-align: center;
        text-transform: none;
        letter-spacing: normal;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(255, 255, 255);
        background-color: rgb(200, 16, 46);
        outline: 0px;
        border: 0px;
        border-radius: 9999rem;
        width: auto;
        cursor: pointer;
        margin: 0px;
        padding: 0.75rem 3rem;
        transition: all 0.125s ease 0s;
        display: block;
        flex-shrink: 0;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
    }
    .formatButton:hover {
        background-color: rgb(136, 10, 30);
    }
    .formatButton:active {
        outline: 0px;
        transform: scale(0.95);
        background-color: rgb(67, 39, 38);
    }
    .formatButton:focus {
        outline: 0px;
        box-shadow: rgb(235, 169, 180) 0px 0px 0px 0.25rem;
    }
    .closeFmt {
        border: 0px;
        clip: rect(0px, 0px, 0px, 0px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px;
        white-space: nowrap;
        overflow-wrap: normal;
    }
    :global(.removeMargin > p) {
        margin: 0px;
    }
    .mainBox {
        -webkit-box-align: center;
        align-items: center;
        appearance: none;
        border: 0px;
        background: rgb(255, 255, 255);
        border-radius: 50%;
        color: rgb(63, 32, 33);
        cursor: pointer;
        display: flex;
        font-size: 1.375rem;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 0px;
        transition: all 0.2s ease 0s;
        transform: rotate(0deg);
    }
    .mainBox:hover {
        transform: rotate(90deg);
    }
    .svgStuff {
        fill: currentcolor;
        height: 2.25rem;
    }
    .popupOutline {
        background: rgba(0, 0, 0, 0.7);
        height: 100%;
        left: 0px;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 999700;
    }
    .popupOutline [data-reach-dialog-content] {
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        height: 100%;
        left: 0px;
        overflow-y: auto;
        position: absolute;
        top: 0px;
        width: 100%;
    }
    .popupOutline [data-reach-dialog-content] > * {
        transform: translateZ(0px);
    }
    @media screen and (min-width: 813px) {
        .popupOutline [data-reach-dialog-content] {
            border-radius: 4px;
            flex-direction: row;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: calc(100% - 10rem);
            width: calc(100% - 10rem);
            max-width: 860px;
            max-height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
    @media screen and (max-width: 812px) {
        .mobPadding {
            padding: env(safe-area-inset-top) env(safe-area-inset-left)
                env(safe-area-inset-bottom) env(safe-area-inset-right);
        }
    }
    .mainBoxShadow {
        left: calc(1.25rem + env(safe-area-inset-left));
        position: fixed;
        top: calc(1rem + env(safe-area-inset-top));
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 0px;
        z-index: 100;
    }
    @media screen and (display-mode: standalone) {
        .mainBoxShadow {
            top: calc(1.25rem + env(safe-area-inset-top));
        }
    }
    .setImg {
        border-radius: inherit;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .imgBox {
        display: block;
        position: absolute;
        inset: 0px;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
        opacity: 1;
        transition: opacity 200ms ease-out 0s;
    }
    .noClue {
        padding-bottom: 66.6667%;
    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }
    :focus {
        outline: -webkit-focus-ring-color auto 5px;
    }
    p {
        font-weight: normal;
    }
    button {
        color: inherit;
    }
    .formatRedeem {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .runningAnimation {
        animation: 0.2s ease 0s 1 normal forwards running gWpsBT;
    }
    .borderAndColor.borderAndColor {
        border-radius: 4px;
        background: rgb(255, 255, 255);
    }
    .imgFormat {
        overflow: visible;
        position: relative;
        width: 100%;
        height: auto;
    }
    .detailsBox {
        align-items: flex-start;
        display: flex;
        flex-flow: column nowrap;
        padding: 1rem;
        width: 100%;
    }
    .formatPrice {
        color: rgb(200, 16, 46);
        font-size: 2rem;
        font-weight: 900;
        line-height: 0.95;
        margin: 0px;
    }
    .formatProduct {
        color: rgb(63, 32, 33);
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.1;
        margin: 0.5rem 0px;
    }
    :global(.setSize *) {
        font-size: 1rem;
    }
    /*! CSS Used from: https://www.timhortons.ca/assets/th/fonts-th.css */
    @media screen and (min-width: 769px) {
        p {
            font-size: 1.125rem;
        }
    }
    @media screen and (max-width: 768px) {
        p {
            font-size: 1rem;
        }
    }
</style>
