import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import nePasOublierText from "../../assets/text/ne-pas-oublier";
import colors from "../../assets/colors";
import Section from "./Section";
import Header from "./Header";

const NePasOublier = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Section
          title={nePasOublierText.quotidien.title}
          items={nePasOublierText.quotidien.items}
          icon={nePasOublierText.quotidien.icon}
          theme={{ background: colors.quotidien }}
        />
        <Section
          title={nePasOublierText.cours.title}
          items={nePasOublierText.cours.items}
          icon={nePasOublierText.cours.icon}
          theme={{ background: colors.cours }}
        />
        <Section
          title={nePasOublierText.integration.title}
          items={nePasOublierText.integration.items}
          icon={nePasOublierText.integration.icon}
          theme={{ background: colors.integration }}
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
