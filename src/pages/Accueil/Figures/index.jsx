import { faPeopleGroup, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Figure from "./Figure";

const Figures = () => {
  return (
    <Container>
      <Figure icon={faUserCheck} number={400} label="Adhérents" />
      <Figure icon={faPeopleGroup} number={43} label="Clubs / Associations" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #367cbc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 30%;
`;

export default Figures;
