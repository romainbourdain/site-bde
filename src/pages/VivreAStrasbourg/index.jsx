import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import vivreAStrasbourgText from "../../assets/text/vivre-a-strasbourg";
import colors from "../../assets/colors";
import { Section } from "../../components/Section";
import MapSection from "./MapSection";

const VivreAStrasbourg = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Section
          title={vivreAStrasbourgText.header.title}
          img={vivreAStrasbourgText.header.img}
          imgPos="left"
          theme={{
            text: colors.vivreAStrasbourg,
          }}
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
          theme={{
            text: colors.vivreAStrasbourg,
          }}
          title={vivreAStrasbourgText.restauration.title}
          img={vivreAStrasbourgText.restauration.img}
          imgPos="left"
          imgFit="contain"
        >
          {vivreAStrasbourgText.restauration.paragraph}
        </Section>
        <MapSection />
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

export default VivreAStrasbourg;
