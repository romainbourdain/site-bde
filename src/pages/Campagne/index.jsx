import { useState } from "react";

import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Title1 from "../../components/Titles/Title1";
import Grid from "./Grid"
import Footer from "../../components/Footer";
import Popup from "./Popup";

import listeData from "../../data/listeData.json"

const Campagne = () => {

  const [showPopup, setShowPopup] = useState(-1);

  return (
    <>
      <Navbar />
      <Container>
        <Title1>Listes campagne BDE</Title1>
        <Grid data={listeData} setShowPopup={setShowPopup} />
      </Container >
      {showPopup !== -1 && <Popup id={showPopup} setShow={setShowPopup} />}
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

export default Campagne;