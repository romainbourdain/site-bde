import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${({ theme }) => theme.backgroundLight};
        color: ${({ theme }) => theme.textDark};
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.textDark};
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyle;
