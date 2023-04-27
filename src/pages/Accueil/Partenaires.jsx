import React from "react";
import styled from "styled-components";
import EVS from "../../assets/img/partenaires/evs.png";
import Flams from "../../assets/img/partenaires/flams.png";
import SocieteGenerale from "../../assets/img/partenaires/societe-generale.png";
import LibrairiesKleber from "../../assets/img/partenaires/librairies-kleber.png";
import Reveal from "../../animations/Reveal";

const Partenaires = () => {
  return (
    <Container>
      <Title>Nos partenaires</Title>
      <Wrapper>
        <Reveal>
          <Image src={EVS} alt="En Voiture Simone" />
        </Reveal>
        <Reveal delay=".1s">
          <Image src={Flams} alt="Flam's" />
        </Reveal>
        <Reveal delay=".2s">
          <Image src={SocieteGenerale} alt="Société Générale" />
        </Reveal>
        <Reveal delay=".3s">
          <Image src={LibrairiesKleber} alt="Librairies Kleber" />
        </Reveal>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 220px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
`;

const Image = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  align-items: center;
  gap: 150px;
`;

export default Partenaires;
