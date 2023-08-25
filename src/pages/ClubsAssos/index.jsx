import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import clubsAssosText from "../../assets/text/clubs-assos";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Title1 from "../../components/Titles/Title1";
import useFetch from "../../hooks/useFetch";
import Loader from "../../animations/Loader";
import Grid from "./Grid";
import Popup from "./Popup";

const ClubsAssos = () => {
  const [showPopup, setShowPopup] = useState(-1);
  const { res, error, isLoading } = useFetch(
    "https://fouaille.bde-tps.fr/api/organization"
  );
  if (isLoading || !res)
    return (
      <>
        <Navbar />
        <Loader />;
      </>
    );
  if (error) console.log(error);
  return (
    <>
      <Navbar />
      <Container>
        <Title1>{clubsAssosText.associationTitle}</Title1>
        <Grid data={res.data.associations} setShowPopup={setShowPopup} />
        <Title1>{clubsAssosText.clubsTitle}</Title1>
        <Grid data={res.data.clubs} setShowPopup={setShowPopup} />
      </Container>
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

export default ClubsAssos;
