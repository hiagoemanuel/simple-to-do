import { createGlobalStyle } from "styled-components"

export const Reset = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html { font-size:62.5%; }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        color: var(--quartenary-color);
    }

    input {
        border: none;
        outline: none;
        color: var(--quartenary-color);
        cursor: pointer;
    }
`