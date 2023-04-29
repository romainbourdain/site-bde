import { faPeopleGroup, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Figure from "./Figure";
import accueilText from "../../../assets/text/accueil";

const Figures = () => {
  return (
    <Container>
      <Figure
        icon={faUserCheck}
        number={accueilText.figures.adherents.number}
        label={accueilText.figures.adherents.title}
      />
      <Figure
        icon={faPeopleGroup}
        number={accueilText.figures.clubsAssos.number}
        label={accueilText.figures.clubsAssos.title}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 10vw;
`;

export default Figures;
