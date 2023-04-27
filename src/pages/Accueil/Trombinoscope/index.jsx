import React from "react";
import styled from "styled-components";
import Pole from "./Pole";
import Card from "./Card";
import Alex from "../../../assets/img/trombinoscope/alex.jpg";
import Antonin from "../../../assets/img/trombinoscope/antonin.jpg";
import Lauryne from "../../../assets/img/trombinoscope/lauryne.jpg";
import Emma from "../../../assets/img/trombinoscope/emma.jpg";
import Gaetane from "../../../assets/img/trombinoscope/gaetane.jpg";
import Luka from "../../../assets/img/trombinoscope/luka.jpg";
import Roman from "../../../assets/img/trombinoscope/roman.jpg";
import Julien from "../../../assets/img/trombinoscope/julien.jpg";
import Lea from "../../../assets/img/trombinoscope/lea.jpg";
import Killian from "../../../assets/img/trombinoscope/killian.jpg";
import Enzo from "../../../assets/img/trombinoscope/enzo.jpg";
import Florian from "../../../assets/img/trombinoscope/florian.jpg";
import Mathis from "../../../assets/img/trombinoscope/mathis.jpg";
import Nathan from "../../../assets/img/trombinoscope/nathan.jpg";
import Felix from "../../../assets/img/trombinoscope/felix.jpg";

const Trombinoscope = () => {
  return (
    <Container>
      <Title>Trombinoscope du BDE</Title>
      <Pole titles={["Bureau"]}>
        <Card img={Alex} prenom="Alex" role="Secrétaire" />
        <Card img={Antonin} prenom="Antonin" role="Président" />
        <Card img={Lauryne} prenom="Lauryne" role="Trésorière" />
      </Pole>
      <Pole titles={["Fouaille"]}>
        <Card img={Emma} prenom="Emma" role="Fouaille" />
        <Card img={Gaetane} prenom="Gaetane" role="Fouaille" />
        <Card img={Luka} prenom="Luka" role="Fouaille" />
        <Card img={Roman} prenom="Roman" role="Fouaille" />
      </Pole>
      <Pole titles={["Communication"]}>
        <Card img={Julien} prenom="Julien" role="Int" />
        <Card img={Lea} prenom="Lea" role="Alternance" />
        <Card img={Killian} prenom="Killian" role="Réseaux" />
        <Card img={Enzo} prenom="Enzo" role="Chti" />
      </Pole>
      <Pole titles={["Spons", "Ext"]}>
        <Card img={Florian} prenom="Florian" role="Spons" />
        <Card img={Mathis} prenom="Mathis" role="Spons" />
        <Card img={Nathan} prenom="Nathan" role="Ext" />
        <Card img={Felix} prenom="Felix" role="Ext" />
      </Pole>
    </Container>
  );
};

const Container = styled.div`
  padding: 150px 200px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
`;

export default Trombinoscope;
