import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import nePasOublierText from "../../assets/text/ne-pas-oublier";
import colors from "../../assets/colors";
import { Section, HeaderSection } from "./Section";

const NePasOublier = () => {
  return (
    <>
      <Navbar />
      <Container>
        <HeaderSection />
        <Section
          title={nePasOublierText.quotidien.title}
          items={nePasOublierText.quotidien.items}
          icon={nePasOublierText.quotidien.icon}
          color={colors.quotidien}
        />
        <Section
          title={nePasOublierText.cours.title}
          items={nePasOublierText.cours.items}
          icon={nePasOublierText.cours.icon}
          color={colors.cours}
        />
        <Section
          title={nePasOublierText.integration.title}
          items={nePasOublierText.integration.items}
          icon={nePasOublierText.integration.icon}
          color={colors.integration}
        />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin-top: 50px;
  min-height: 100vh;
`;

export default NePasOublier;
