import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Title1 from "../../components/Titles/Title1";
import colors from "../../assets/colors";
import nePasOublierText from "../../assets/text/ne-pas-oublier";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Section = ({ color, title, items, icon }) => {
  return (
    <ThemeProvider theme={{ background: color }}>
      <Container>
        <Title>
          <FontAwesomeIcon icon={icon} />
          {title}
        </Title>
        <ItemContainer>
          {items.map((item) => (
            <Item>
              <Icon>
                <FontAwesomeIcon icon={item.icon} />
              </Icon>
              {item.paragraph}
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
        <HeaderTitle>
          <FontAwesomeIcon icon={nePasOublierText.header.icon} />
          {nePasOublierText.header.title}
        </HeaderTitle>
        <TextContainer>
          <HeaderIcon>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </HeaderIcon>
          <Text>{nePasOublierText.header.paragraph}</Text>
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
`;

const Title = styled(Title1)`
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

const HeaderTitle = styled(Title)`
  font-size: 4.5rem;
`;

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 10rem;
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 1.8rem;
  }
`;
