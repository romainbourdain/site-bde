import React from "react";
import routes from "../../routes/routes";
import Navbar from "../../components/Navbar";
import data from "../../data/clubs-assos.json";
import OrganisationText from "../../assets/text/Organisations";
import Card from "./Card";
import styled from "styled-components";

const ClubsAssos = () => {
  return (
    <>
      <Navbar currentPage={routes.clubsAssos.id} />
      <Container>
        <Titre>{OrganisationText.associationTitle}</Titre>
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
        <Titre>{OrganisationText.clubsTitle}</Titre>
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
    </>
  );
};

const Container = styled.div`
  margin: 0 110px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 50px;
  margin-bottom: 150px;
  -webkit-user-drag: none;
`;

const Titre = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 70px 0;
`;

export default ClubsAssos;
