import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Counter from "./Counter";

const Figure = ({ icon, number, label }) => {
  return (
    <Container>
      <IconBox>
        <FontAwesomeIcon icon={icon} />
      </IconBox>
      <Counter max={number} label={label} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textLight};
  flex: 1;
  gap: 20px;
`;

const IconBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: ${(props) => props.theme.textDark};
  font-size: 4rem;

  @media (max-width: 1200px) {
    width: 100px;
    height: 100px;
    font-size: 3rem;
  }
`;

export default Figure;
