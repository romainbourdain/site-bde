import React from "react";
import Navbar from "../../components/Navbar";
import data from "../../data/clubs-assos.json";
import clubsAssosText from "../../assets/text/clubs-assos";
import Card from "./Card";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Title1 from "../../components/Titles/Title1";

const ClubsAssos = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title1>{clubsAssosText.associationTitle}</Title1>
        <Grid>
          {data.associations.map((association, key) => (
            <Card
              name={association.name}
              fullname={association.fullname}
              img={association.img}
              key={key}
            />
          ))}
        </Grid>
        <Title1>{clubsAssosText.clubsTitle}</Title1>
        <Grid>
          {data.clubs.map((club, key) => (
            <Card
              name={club.name}
              fullname={club.fullname}
              img={club.img}
              key={key}
            />
          ))}
        </Grid>
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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  -webkit-user-drag: none;
`;

export default ClubsAssos;
