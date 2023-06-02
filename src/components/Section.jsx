import styled, { ThemeProvider } from "styled-components";
import Reveal from "../animations/Reveal";
import colors from "../assets/colors";
import Title1 from "./Titles/Title1";

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
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

export const Title = styled(Title1)`
  display: flex;
  color: ${(props) => props.theme.text};
  gap: 15px;
`;

export const Text = styled.div`
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

export const Section = ({
  theme,
  title,
  img,
  imgPos,
  children,
  imgFit = "cover",
}) => {
  const defaultTheme = {
    background: colors.backgroundLight,
    text: colors.textDark,
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

  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 2;
  }
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

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

const StyledText = styled(Text)`
  grid-column: ${(props) => (props.pos === "left" ? "2/4" : "1/3")};
  grid-row: 1;

  @media (max-width: 1024px) {
    grid-column: 1;
  }
`;
