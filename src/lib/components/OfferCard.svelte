<script lang="ts">
    export let image: string;
    export let price: string;
    export let product: string;
    const fluff = "{fluff}";
</script>

<span class="offerCardParent">
    <button class="reactiveButton">
        <div class="fillParent softenEdges">
            <picture>
                <source
                    sizes="18.02469135802469vw"
                    srcset="{image}?w=320{fluff} 320w, {image}?w=750{fluff} 750w, {image}?w=1077{fluff} 1076w, {image}?w=1125{fluff} 1125w, {image}?w=3840{fluff} 3840w, {image}?w=1280{fluff} 1280w, {image}?w=1440{fluff} 1440w, {image}?w=2880{fluff} 2880w, {image}?w=4320{fluff} 4320w, {image}?w=1600{fluff} 1600w, {image}?w=3200{fluff} 3200w, {image}?w=6400{fluff} 6400w, {image}?w=4840{fluff} 4840w, {image}?w=5288{fluff} 5288w"
                />
                <img alt="" src="" draggable="true" class="emmwLI" />
            </picture>
            <div class="bottomPadding" />
        </div>
        <div class="erOdFI">
            <div class="eICuOY">
                <h2 class="jfipoE">{price}</h2>
                <div class="jnsShj hJlczj">
                    <p>{product}</p>
                </div>
                <p class="dbdHIx">1 days left</p>
            </div>
            <div width="100%" height="auto" class="dqSplr">
                <button aria-disabled="false" class="gAXORD" tabindex="0">
                    Activate
                </button>
            </div>
        </div>
    </button>
</span>

<style>
    /*! CSS Used from: Embedded ; media=screen */
    @media screen {
        button {
            background-color: #181a1b;
        }
        button {
            border-color: #736b5e;
            color: #e8e6e3;
        }
        ::placeholder {
            color: #b2aba1;
        }
        ::-webkit-scrollbar {
            background-color: #202324;
            color: #aba499;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #454a4d;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #575e62;
        }
        ::-webkit-scrollbar-thumb:active {
            background-color: #484e51;
        }
        ::-webkit-scrollbar-corner {
            background-color: #181a1b;
        }
        ::selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }
        ::-moz-selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }
    }
    /*! CSS Used from: Embedded */
    button::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    :focus:not([data-focusvisible-polyfill]) {
        outline: none;
    }
    /*! CSS Used from: Embedded ; media=screen */
    @media screen {
        :focus:not([data-focusvisible-polyfill]) {
            outline-color: initial;
        }
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
    /*! CSS Used from: Embedded ; media=screen */
    @media screen {
        :focus {
            outline-color: rgb(186, 123, 0);
        }
        button {
            color: inherit;
        }
    }
    /*! CSS Used from: Embedded */
    .gAXORD {
        font-family: sofia_pro_bold, Helvetica, Arial, sans-serif;
        font-weight: normal;
        font-size: 0.875rem;
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
        width: 100%;
        cursor: pointer;
        margin: 0px;
        padding: 0.375rem 1.5rem;
        transition: all 0.125s ease 0s;
        display: block;
        flex-shrink: 0;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
    }
    .gAXORD:hover {
        background-color: rgb(136, 10, 30);
    }
    .gAXORD:active {
        outline: 0px;
        transform: scale(0.95);
        background-color: rgb(67, 39, 38);
    }
    .gAXORD:focus {
        outline: 0px;
        box-shadow: rgb(235, 169, 180) 0px 0px 0px 0.25rem;
    }
    .dqSplr {
        display: flex;
        -webkit-box-align: stretch;
        align-items: stretch;
        place-content: stretch flex-start;
        align-self: auto;
        -webkit-box-pack: start;
        flex-flow: row nowrap;
        overflow: visible;
        position: static;
        z-index: auto;
        inset: auto;
        margin: 0px auto;
        padding: 0px;
        width: 100%;
        height: auto;
        max-width: none;
        max-height: none;
        min-width: 0px;
        min-height: 0px;
        background: initial;
        border-width: 0px;
        border-style: none;
        border-color: transparent;
        border-radius: 0px;
        box-shadow: none;
    }
    .jnsShj > p {
        margin: 0px;
    }
    .fillParent {
        border-radius: inherit;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .emmwLI {
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
    .bottomPadding {
        padding-bottom: 66.6667%;
    }
    /* body.disable-focus-styles :focus {
    outline: none;
  }
  body.disable-focus-styles ::after {
    outline: none !important;
  } */
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
    .offerCardParent {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        margin: 0px 16px 0px 0px;
    }
    .reactiveButton {
        height: 100%;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 0px;
        min-height: 290px;
        margin: 0.25rem 0rem;
        display: flex;
        flex-direction: column;
        appearance: none;
        border: none;
        padding: 0px;
        font-size: inherit;
        font-family: sofia_pro, Helvetica, Arial, sans-serif;
        position: relative;
        text-align: left;
        background: rgb(255, 255, 255);
        z-index: 0;
        user-select: none;
        cursor: pointer;
        transition: box-shadow 0.3s ease 0s;
        min-width: 146px;
    }
    .reactiveButton:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 3px;
    }
    @media screen and (min-width: 813px) {
        .reactiveButton {
            width: 250px;
        }
    }
    .eICuOY {
        width: 100%;
        margin-bottom: 0.5rem;
    }
    .jfipoE {
        color: rgb(200, 16, 46);
        font-family: sofia_pro, Helvetica, Arial, sans-serif;
        font-size: 1.25rem;
        line-height: 0.95;
        font-weight: 600;
        margin: 0px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    @media screen and (min-width: 813px) {
        .jfipoE {
            font-size: 1.5rem;
        }
    }
    .dbdHIx {
        color: rgb(63, 32, 33);
        font-family: sofia_pro, Helvetica, Arial, sans-serif;
        font-size: 0.75rem;
        line-height: 1.1;
        margin-block: 0.5em;
    }
    @media screen and (min-width: 813px) {
        .dbdHIx {
            font-size: 0.9rem;
        }
    }
    .erOdFI {
        align-items: flex-start;
        display: flex;
        flex-flow: column nowrap;
        flex: 1 1 auto;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
    }
    .hJlczj p {
        margin: 0.5rem 0px;
        color: rgb(63, 32, 33);
        font-family: sofia_pro, Helvetica, Arial, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.1;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .softenEdges {
        border-radius: 4px 4px 0px 0px;
        height: calc(97.3333px);
        position: relative;
        width: 100%;
    }
    /*! CSS Used from: Embedded ; media=screen */
    @media screen {
        .gAXORD {
            color: rgb(232, 230, 227);
            background-color: rgb(160, 13, 37);
            outline-color: initial;
            border-color: initial;
        }
        .gAXORD:hover {
            background-color: rgb(109, 8, 24);
        }
        .gAXORD:active {
            outline-color: initial;
            background-color: rgb(54, 31, 30);
        }
        .gAXORD:focus {
            outline-color: initial;
            box-shadow: rgb(93, 22, 34) 0px 0px 0px 0.25rem;
        }
        .dqSplr {
            background-image: initial;
            background-color: initial;
            border-color: transparent;
            box-shadow: none;
        }
        /* body.disable-focus-styles :focus {
      outline-color: initial;
    }
    body.disable-focus-styles ::after {
      outline-color: initial !important;
    } */
        :focus {
            outline-color: rgb(186, 123, 0);
        }
        button {
            color: inherit;
        }
        .reactiveButton {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 0px;
            border-color: initial;
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .reactiveButton:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 3px;
        }
        .jfipoE {
            color: rgb(240, 68, 96);
        }
        .dbdHIx {
            color: rgb(202, 197, 190);
        }
        .hJlczj p {
            color: rgb(202, 197, 190);
        }
    }
    /*! CSS Used from: Embedded ; media=screen */
    @media screen {
        ::placeholder {
            opacity: 0.5 !important;
        }
    }
    /*! CSS Used from: https://www.timhortons.ca/assets/th/fonts-th.css */
    @media screen and (min-width: 769px) {
        h2 {
            font-size: 2.5rem;
            font-weight: 900;
        }
        p {
            font-size: 1.125rem;
        }
    }
    @media screen and (max-width: 768px) {
        h2 {
            font-size: 1.75rem;
        }
        p {
            font-size: 1rem;
        }
    }
    /*! CSS Used fontfaces */
    @font-face {
        font-family: "sofia_pro_bold";
        src: url("https://www.timhortons.ca/assets/th/sofia_pro_bold.otf")
                format("opentype"),
            url("https://www.timhortons.ca/assets/th/sofia_pro_bold.woff2")
                format("woff2"),
            url("https://www.timhortons.ca/assets/th/sofia_pro_bold.woff")
                format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "sofia_pro";
        src: url("https://www.timhortons.ca/assets/th/sofia_pro_black.otf")
                format("opentype"),
            url("https://www.timhortons.ca/assets/th/sofia_pro_black.woff2")
                format("woff2"),
            url("https://www.timhortons.ca/assets/th/sofia_pro_black.woff")
                format("woff");
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "sofia_pro";
        src: url("https://www.timhortons.ca/assets/th/sofia_pro_regular.otf")
                format("opentype"),
            url("https://www.timhortons.ca/assets/th/sofia_pro_regular.woff2")
                format("woff2"),
            url("https://www.timhortons.ca/assets/th/sofia_pro_regular.woff")
                format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
</style>
