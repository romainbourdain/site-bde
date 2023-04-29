import React from "react";
import styled from "styled-components";

const Card = ({ img, prenom, role }) => {
  return (
    <Container>
      <Image src={img} alt={prenom} />
      <Hover>
        <Name>{prenom}</Name>
        <Role>{role}</Role>
      </Hover>
    </Container>
  );
};

const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(
    74.04% 59.92% at 50% 50%,
    rgba(0, 0, 0, 0.336) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  color: ${(props) => props.theme.textLight};
  padding: 30px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  position: relative;

  &:hover ${Hover} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 3rem;

  @media (max-width: 1400px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.span`
  font-size: 1.8rem;

  @media (max-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export default Card;
