import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Section";
import { vivreATpsText } from "../../assets/text/vivre-a-tps";
import Title1 from "../../components/Titles/Title1";
import Reveal from "../../animations/Reveal";

const MapSection = () => {
  return (
    <Section>
      <Reveal>
        <Title1>{vivreATpsText.plan.title}</Title1>
      </Reveal>
      <Reveal>
        <img src={vivreATpsText.plan.img} alt="" />
      </Reveal>
    </Section>
  );
};

const Section = styled(Container)`
  background: ${(props) => props.theme.vivreATps};
  padding-inline: 15vw;

  ${Title1} {
    color: ${(props) => props.theme.textLight};
  }

  img {
    max-height: 700px;
    max-width: 100%;
  }
`;

export default MapSection;
