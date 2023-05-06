import React from "react";
import { Container } from "../../components/Section";
import Reveal from "../../animations/Reveal";
import colors from "../../assets/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { ThemeProvider } from "styled-components";
import Title2 from "../../components/Titles/Title2";

const Section = ({ theme, title, items, icon }) => {
  const defaultTheme = {
    background: colors.backgroundLight,
    text: colors.textDark,
  };
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
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

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Title = styled(Title2)`
  display: flex;
  color: ${(props) => props.theme.text};
  gap: 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    color: ${(props) => props.theme.text};
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

export default Section;
