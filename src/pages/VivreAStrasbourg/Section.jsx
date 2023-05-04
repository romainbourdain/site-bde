import React from "react";
import { Container, Text, Title } from "../../components/Section";
import styled, { ThemeProvider } from "styled-components";
import colors from "../../assets/colors";
import Reveal from "../../animations/Reveal";

const Section = ({ theme, title, img, imgPos, children, imgFit = "cover" }) => {
  const defaultTheme = {
    background: colors.backgroundLight,
    text: colors.vivreAStrasbourg,
    paragraph: colors.textDark,
  };
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <StyledContainer>
        <Reveal>
          <Title>{title}</Title>
        </Reveal>
        <Reveal>
          <TextContainer>
            <Image src={img} alt={title} pos={imgPos} fit={imgFit} />
            <StyledText style={{ flex: 1 }} pos={imgPos}>
              {children}
            </StyledText>
          </TextContainer>
        </Reveal>
      </StyledContainer>
    </ThemeProvider>
  );
};

const StyledContainer = styled(Container)`
  padding-inline: 15vw;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 5/6;
  object-fit: ${(props) => props.fit};
  grid-column: ${(props) => (props.pos === "left" ? "1/2" : "3/4")};
  grid-row: 1;
`;

const TextContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: 4fr 1fr 4fr;
  gap: 7vw;

  p {
    color: ${(props) => props.theme.paragraph};
  }
`;

const StyledText = styled(Text)`
  grid-column: ${(props) => (props.pos === "left" ? "2/4" : "1/3")};
  grid-row: 1;
`;

export default Section;
