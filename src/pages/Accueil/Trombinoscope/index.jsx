import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Card from "./Card";
import Title1 from "../../../components/Titles/Title1";
import accueilText from "../../../assets/text/accueil";

const Trombinoscope = () => {
  return (
    <Container>
      <Title1>Trombinoscope du BDE</Title1>
      {accueilText.trombinoscope.sections.map((section, index) => (
        <Section key={index} titles={section.poles}>
          {section.members.map((member, index) => (
            <Card
              key={index}
              img={member.image}
              prenom={member.name}
              role={member.role}
            />
          ))}
        </Section>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 150px 200px;
  text-align: center;
`;
export default Trombinoscope;
