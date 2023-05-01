import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Title1 from "../../components/Titles/Title1";
import colors from "../../assets/colors";
import nePasOublierText from "../../assets/text/ne-pas-oublier";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import Reveal from "../../animations/Reveal";
import Title2 from "../../components/Titles/Title2";

export const Section = ({ color, title, items, icon }) => {
  return (
    <ThemeProvider theme={{ background: color }}>
      <Container>
        <Reveal delay="0.1s">
          <Title>
            <FontAwesomeIcon icon={icon} />
            {title}
          </Title>
        </Reveal>
        <ItemContainer>
          {items.map((item, key) => (
            <Item key={key}>
              <Reveal>
                <Icon>
                  <FontAwesomeIcon icon={item.icon} />
                </Icon>
              </Reveal>
              <Reveal delay="0.1s">{item.paragraph}</Reveal>
            </Item>
          ))}
        </ItemContainer>
      </Container>
    </ThemeProvider>
  );
};

export const HeaderSection = () => {
  return (
    <ThemeProvider theme={{ background: colors.nePasOublier }}>
      <Container>
        <Reveal delay="0.1s">
          <HeaderTitle>
            <FontAwesomeIcon icon={nePasOublierText.header.icon} />
            {nePasOublierText.header.title}
          </HeaderTitle>
        </Reveal>
        <TextContainer>
          <Reveal>
            <HeaderIcon>
              <FontAwesomeIcon icon={faMapLocationDot} />
            </HeaderIcon>
          </Reveal>
          <Reveal delay="0.1s">
            <Text>{nePasOublierText.header.paragraph}</Text>
          </Reveal>
        </TextContainer>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 200px 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media (max-width: 1400px) {
    padding: 200px 10vw;
  }

  @media (max-width: 700px) {
    padding: 100px 5vw;
  }
`;

const HeaderTitle = styled(Title1)`
  display: flex;
  gap: 15px;
`;

const Title = styled(Title2)`
  display: flex;
  gap: 15px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 1.7rem;

    @media (max-width: 1400px) {
      font-size: 1.5rem;
    }

    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }
`;

const Icon = styled.div`
  min-width: 5rem;
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  font-size: 2.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const HeaderIcon = styled.div`
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

const Text = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 1.7rem;

    @media (max-width: 1400px) {
      font-size: 1.5rem;
    }

    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }
`;
