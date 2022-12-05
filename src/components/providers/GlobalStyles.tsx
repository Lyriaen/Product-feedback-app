import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }
    * {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: #F7F8FD;
        font-family: 'Jost', sans-serif;
    }
    `