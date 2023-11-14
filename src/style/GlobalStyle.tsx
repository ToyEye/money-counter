import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        color: darkblue;
        font-size: 16px;
        background-color: beige;
    }

    ul {
        list-style: none;
    }

    a {
        color:inherit;
        text-decoration: none;
    }

    button {
        color:inherit;
        font-family: inherit;
    }

`;
