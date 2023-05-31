import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Section from "./Section";
import vivreAStrasbourgText from "../../assets/text/vivre-a-strasbourg";
import colors from "../../assets/colors";
import Map from "./Map";
import Title1 from "../../components/Titles/Title1";
import { Container } from "../../components/Section";
import Title2 from "../../components/Titles/Title2";
import Reveal from "../../animations/Reveal";

const VivreAStrasbourg = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Section
          title={vivreAStrasbourgText.header.title}
          img={vivreAStrasbourgText.header.img}
          imgPos="left"
        >
          {vivreAStrasbourgText.header.paragraph}
        </Section>
        <Section
          theme={{
            background: colors.vivreAStrasbourg,
            text: colors.textLight,
            paragraph: colors.textLight,
          }}
          title={vivreAStrasbourgText.transports.title}
          img={vivreAStrasbourgText.transports.img}
          imgPos="right"
        >
          {vivreAStrasbourgText.transports.paragraph}
          <Button
            onClick={() =>
              window.open(vivreAStrasbourgText.transports.button.link, "_blank")
            }
          >
            <span>{vivreAStrasbourgText.transports.button.text}</span>
            <img src={vivreAStrasbourgText.transports.button.icon} alt="" />
          </Button>
        </Section>
        <Section
          title={vivreAStrasbourgText.restauration.title}
          img={vivreAStrasbourgText.restauration.img}
          imgPos="left"
          imgFit="contain"
        >
          {vivreAStrasbourgText.restauration.paragraph}
        </Section>
        <MapSection>
          <Wrapper>
            <Reveal>
              <TextContainer>
                <Title2>{vivreAStrasbourgText.logement.title}</Title2>
                <Paragraph>{vivreAStrasbourgText.logement.paragraph}</Paragraph>
              </TextContainer>
            </Reveal>
            <Map />
          </Wrapper>
        </MapSection>
      </PageContainer>
      <Footer />
    </>
  );
};

const PageContainer = styled.div`
  margin-top: 50px;
  min-height: 100vh;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px 40px;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.text};
  border: none;
  border-radius: 50px;
  color: ${(props) => props.theme.background};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 50px;
  &:hover {
    filter: brightness(0.7);
  }

  img {
    height: 1.5rem;
  }

  @media (max-width: 1450px) {
    font-size: 1.5rem;
    padding: 15px 30px;

    img {
      height: 1.3rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 10px 20px;

    img {
      height: 1rem;
    }
  }
`;

const MapSection = styled(Container)`
  background-color: ${(props) => props.theme.vivreAStrasbourg};
  padding-inline: 15vw;

  ${Title2} {
    color: ${(props) => props.theme.textLight};
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3vw;
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

export default VivreAStrasbourg;
