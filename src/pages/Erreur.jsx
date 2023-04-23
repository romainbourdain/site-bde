import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import ErreurImg from "../assets/img/erreur.jpg";

const Error = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Image src={ErreurImg} alt="erreur" />
        <Title>Oh non ! Cette page n'existe pas :(</Title>
        <StyledLink to={routes.accueil.path}>
          Revenir à la page d'accueil
        </StyledLink>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 30px;
  gap: 15px;
`;

const Image = styled.img``;

const Title = styled.h1`
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: underline;
  color: #3c29e4;
`;

export default Error;
