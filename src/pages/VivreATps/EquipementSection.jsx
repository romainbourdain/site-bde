import React from "react";
import Title1 from "../../components/Titles/Title1";
import Reveal from "../../animations/Reveal";
import styled from "styled-components";
import { vivreATpsText } from "../../assets/text/vivre-a-tps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../components/Section";

const EquipementSection = () => {
  return (
    <Section>
      <Title1>{vivreATpsText.equipements.title}</Title1>
      <Grid>
        {vivreATpsText.equipements.items.map((item, index) => (
          <Reveal>
            <Card key={index}>
              <FontAwesomeIcon icon={item.icon} />
              <p>{item.title}</p>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled(Container)`
  background-color: ${(props) => props.theme.vivreATps};
  padding-inline: 10vw;

  ${Title1} {
    color: ${(props) => props.theme.textLight};
  }

  @media (max-width: 500px) {
    padding-inline: 5vw;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8vw 5vw;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.textLight};
  border-radius: 300px;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 250px;
  font-size: 4.2rem;

  p {
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    height: 200px;
    font-size: 3.5rem;

    p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 600px) {
    height: 40vw;
    font-size: 2.5rem;

    p {
      font-size: 1rem;
    }
  }
`;

export default EquipementSection;
