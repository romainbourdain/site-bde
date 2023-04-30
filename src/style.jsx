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
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    p {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme.textDark};

    @media (min-width: 1024px) and (max-width: 1450px) {
      font-size: 1.1rem;
    }

    @media (max-width: 900px) {
      font-size: 1.3rem;
    }

    li {
      list-style: disc;
    }

    @media (max-width: 1450px) {
      gap: 30px;
    }

    @media (max-width: 1024px) {
      align-items: center;
    }
  }
`;

export default GlobalStyle;
