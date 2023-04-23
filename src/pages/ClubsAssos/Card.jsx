import React from "react";
import styled from "styled-components";

const Card = ({ img, name, fullname }) => {
  return (
    <Container>
      <Logo src={img} alt={`logo-${name}`} />
      <TextContainer>
        <Name>{name}</Name>
        <FullName>{fullname}</FullName>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  gap: 40px;

  width: 330px;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 25px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s ease-in-out;

  &:hover {
    img {
      transform: scale(1.15);
    }

    h1 {
      color: #f5a623;
    }

    h2 {
      color: #ecc689;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  transition: 0.4s ease-in-out;
  -webkit-user-drag: none;
`;

const Name = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  transition: 0.4s ease-in-out;
`;

const FullName = styled.h2`
  color: #929292;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.4s ease-in-out;
`;

export default Card;
