import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import ErreurImg from "../assets/img/erreur.png";
import Footer from "../components/Footer";
import erreurText from "../assets/text/erreur";

const Error = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Image src={ErreurImg} alt="erreur" />
        <Title>{erreurText.message}</Title>
        <StyledLink to={routes.accueil.path}>{erreurText.link}</StyledLink>
      </Container>
      <Footer />
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
  gap: 10px;
  height: 100vh;
`;

const Image = styled.img`
  height: 400px;
`;

const Title = styled.h1`
  font-size: 1.7rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  text-decoration: underline;
  color: #3c29e4;
`;

export default Error;
