import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { vivreATpsText } from "../../assets/text/vivre-a-tps";
import { Section } from "../../components/Section";
import colors from "../../assets/colors";
import EquipementSection from "./EquipementSection";
import MapSection from "./MapSection";

const VivreATps = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Section
          theme={{
            text: colors.vivreATps,
          }}
          title={vivreATpsText.header.title}
          img={vivreATpsText.header.img}
          imagePosition="left"
        >
          {vivreATpsText.header.paragraph}
        </Section>
        <MapSection />
        <Section
          theme={{
            text: colors.vivreATps,
          }}
          title={vivreATpsText.fouaille.title}
          img={vivreATpsText.fouaille.img}
          imagePosition="left"
        >
          {vivreATpsText.fouaille.paragraph}
        </Section>
        <EquipementSection />
      </PageContainer>
      <Footer />
    </>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
`;

export default VivreATps;
