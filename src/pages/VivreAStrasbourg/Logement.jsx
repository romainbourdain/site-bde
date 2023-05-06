import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container, Text, Title } from "../../components/Section";
import vivreAStrasbourgText from "../../assets/text/vivre-a-strasbourg";
import colors from "../../assets/colors";
import Reveal from "../../animations/Reveal";

const Logement = () => {
  return (
    <ThemeProvider
      theme={{
        background: colors.vivreAStrasbourg,
        text: colors.textLight,
        paragraph: colors.textLight,
      }}
    >
      <Container>
        <Reveal>
          <Title>{vivreAStrasbourgText.logement.title}</Title>
        </Reveal>
        <Grid>
          <Reveal>
            <StyledText>{vivreAStrasbourgText.logement.paragraph}</StyledText>
          </Reveal>
          <Reveal>
            <Image src={vivreAStrasbourgText.logement.img} />
          </Reveal>
        </Grid>
        <ResidenceGrid>
          <Reveal>
            <BoxContainer>
              {vivreAStrasbourgText.residences.items.map((item) => (
                <Box onClick={() => window.open(item.link, "_blank")}>
                  <span>{item.name}</span>
                  {item.subtitle}
                </Box>
              ))}
            </BoxContainer>
          </Reveal>
          <Reveal>
            <Text>{vivreAStrasbourgText.residences.paragraph}</Text>
          </Reveal>
        </ResidenceGrid>
      </Container>
    </ThemeProvider>
  );
};

const Image = styled.img`
  width: 100%;
  object-fit: ${(props) => props.fit};
  grid-column: 2/3;
  grid-row: 1;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: 3fr 2fr;
  gap: 7vw;

  p {
    color: ${(props) => props.theme.paragraph};
  }
`;

const StyledText = styled(Text)`
  grid-column: 1/2;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.backgroundLight};
  color: ${(props) => props.theme.textDark};
  padding: 1rem 2rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border-radius: 30px;
  width: 100%;
  text-align: center;
  cursor: pointer;

  span {
    font-weight: 700;
  }
`;

const ResidenceGrid = styled(Grid)`
  grid-template-columns: 2fr 4fr;
`;

export default Logement;
