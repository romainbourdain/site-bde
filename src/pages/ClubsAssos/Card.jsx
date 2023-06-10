import React from "react";
import styled from "styled-components";
import Reveal from "../../animations/Reveal";
import undefinedLogo from "../../assets/img/undefined_logo.png";

const Card = ({ img, name, fullname }) => {
  return (
    <Reveal>
      <Container>
        <Logo src={img || undefinedLogo} alt={`logo-${name}`} />
        <TextContainer>
          <Name>{name}</Name>
          <FullName>{fullname}</FullName>
        </TextContainer>
      </Container>
    </Reveal>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 150px;
  aspect-ratio: 1/1;
  object-fit: contain;
  transition: 0.4s ease-in-out;
  -webkit-user-drag: none;

  @media (max-width: 1100px) {
    width: 100px;
  }

  @media (max-width: 750px) {
    width: 75px;
  }
`;

const Name = styled.h1`
  font-weight: 700;
  text-align: center;
  font-size: 1.7rem;
  transition: 0.4s ease-in-out;
  color: ${(props) => props.theme.textDark};

  @media (max-width: 1100px) {
    font-size: 1.3rem;
  }

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

const FullName = styled.h2`
  color: ${(props) => props.theme.textDarkSecondary};
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
  transition: 0.4s ease-in-out;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }

  @media (max-width: 750px) {
    font-size: 0.7rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  gap: 30px;

  width: 280px;
  height: 280px;

  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.backgroundLighter};

  cursor: pointer;
  user-select: none;
  transition: 0.2s ease-in-out;

  &:hover {
    ${Logo} {
      transform: scale(1.15);
    }

    ${Name} {
      color: ${(props) => props.theme.primaryDark};
    }

    ${FullName} {
      color: ${(props) => props.theme.primary};
    }
  }

  @media (max-width: 1100px) {
    width: 200px;
    height: 200px;
    gap: 15px;
  }

  @media (max-width: 750px) {
    width: 150px;
    height: 150px;
    gap: 10px;
  }
`;

export default Card;
