import { faPeopleGroup, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Numbers = () => {
  return (
    <Container>
      <NumberColumn>
        <IconBox>
          <FontAwesomeIcon icon={faUserCheck} />
        </IconBox>
        <NumberContainer>
          <Number>400</Number>
          <Label>Adhérent</Label>
        </NumberContainer>
      </NumberColumn>
      <NumberColumn>
        <IconBox>
          <FontAwesomeIcon icon={faPeopleGroup} />
        </IconBox>
        <NumberContainer>
          <Number>43</Number>
          <Label>Clubs / Associations</Label>
        </NumberContainer>
      </NumberColumn>
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

const NumberColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex: 1;
  gap: 20px;
`;

const IconBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: #191919;
  font-size: 4rem;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const Number = styled.span`
  font-weight: 700;
  font-size: 2.7rem;
`;

const Label = styled.span`
  font-size: 2rem;
`;

export default Numbers;
