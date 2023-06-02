import React from "react";
import styled from "styled-components";
import Reveal from "../../animations/Reveal";
import Title1 from "../../components/Titles/Title1";
import vivreAStrasbourgText from "../../assets/text/vivre-a-strasbourg";
import Map from "./Map";
import { Container } from "../../components/Section";

const MapSection = () => {
  return (
    <Section>
      <Wrapper>
        <Reveal>
          <TextContainer>
            <Title1>{vivreAStrasbourgText.logement.title}</Title1>
            <Paragraph>{vivreAStrasbourgText.logement.paragraph}</Paragraph>
          </TextContainer>
        </Reveal>
        <Map />
      </Wrapper>
    </Section>
  );
};

const Section = styled(Container)`
  background-color: ${(props) => props.theme.vivreAStrasbourg};
  padding-inline: 15vw;

  ${Title1} {
    color: ${(props) => props.theme.textLight};
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3vw;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
`;

const Paragraph = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 1.7rem;
    color: ${(props) => props.theme.textLight};

    @media (max-width: 1400px) {
      font-size: 1.5rem;
    }

    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }
`;

export default MapSection;
