import {createGlobalStyle} from "styled-components";
import colors from "./assets/colors";

import React from 'react';
import {useColors} from "./contexts/ColorsContext";

const GlobalStyle = () => {
    const {negative} = useColors();
    return (
        <>
            <Styles/>
            {negative && <Negative/>}
        </>
    );
};


const Styles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background: ${colors.primary};
      color: ${colors.white};
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.grey};
      border-radius: 20px;
    }

  }

  body {
    background-color: ${({theme}) => theme.backgroundLight};
    color: ${({theme}) => theme.textDark};
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

const Negative = createGlobalStyle`
  * {
    filter: invert(1);
    --webkit-filter: invert(1);
  }
`

export default GlobalStyle;
