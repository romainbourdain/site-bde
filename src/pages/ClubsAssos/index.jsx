import React from "react";
import Navbar from "../../components/Navbar";
import clubsAssosText from "../../assets/text/clubs-assos";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Title1 from "../../components/Titles/Title1";
import useFetch from "../../hooks/useFetch";
import Loader from "../../animations/Loader";
import Grid from "./Grid";

const ClubsAssos = () => {
  const { res, error, isLoading } = useFetch(
    "https://fouaille.bde-tps.fr/api/organization/index/small"
  );
  if (isLoading || !res) return <Loader />;
  if (error) console.log(error);
  console.log(res.data.associations);
  return (
    <>
      <Navbar />
      <Container>
        <Title1>{clubsAssosText.associationTitle}</Title1>
        <Grid data={res.data.associations} />
        <Title1>{clubsAssosText.clubsTitle}</Title1>
        <Grid data={res.data.clubs} />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 50px;
  margin-top: 50px;
  padding: 110px 110px;

  @media (max-width: 1100px) {
    padding: 80px 3vw;
    ${Title1} {
      font-size: 2.3rem;
    }
  }
`;

export default ClubsAssos;
