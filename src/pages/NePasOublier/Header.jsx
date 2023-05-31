import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Container, Text } from "../../components/Section";
import Reveal from "../../animations/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nePasOublierText from "../../assets/text/ne-pas-oublier";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import Title1 from "../../components/Titles/Title1";
import colors from "../../assets/colors";

export const Header = () => {
  useEffect(() => {
    console.log("Clique sur l'icone de la carte");
  }, []);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("encore");
    setCount((oldCount) => oldCount + 1);
    // console.log("e4c12h");
  };
  return (
    <ThemeProvider theme={{ background: colors.nePasOublier }}>
      {count >= 10 && <BreakSite />}
      <Container>
        <Reveal delay="0.1s">
          <Title>
            <FontAwesomeIcon icon={nePasOublierText.header.icon} />
            {nePasOublierText.header.title}
          </Title>
        </Reveal>
        <TextContainer>
          <Reveal>
            <Icon onClick={handleClick}>
              <FontAwesomeIcon icon={faMapLocationDot} />
            </Icon>
          </Reveal>
          <Reveal delay="0.1s">
            <Text>{nePasOublierText.header.paragraph}</Text>
          </Reveal>
        </TextContainer>
      </Container>
    </ThemeProvider>
  );
};

const BreakSite = createGlobalStyle`

@keyframes rotate {
  0%{
        rotate: 0deg;
    }
    100% { 
        rotate: 360deg;
    } 
}

 @keyframes scale {
  0% {
    scale: 1;
  }
  25% {
    scale: 0.5;
  }
  75% {
    scale: 2;
  }
  100% {
    scale: 1;
  }
 }

  div {
    animation: 17s rotate linear infinite, 7s scale linear infinite;
  }
`;

const Title = styled(Title1)`
  display: flex;
  gap: 15px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 10rem;

  @media (max-width: 1400px) {
    font-size: 8rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export default Header;
