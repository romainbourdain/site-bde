import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Title1 from "../../components/Titles/Title1";
import Grid from "../ClubsAssos/Grid"

const Campagne = () => {

  const listeData = [
    {
      "id": 1,
      "short_name": "ShortL1",
      "name": "longL1",
      "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/bureau_des_etudiants_400.png",
      "link": "https://www.google.com"
    },
    {
      "id": 2,
      "short_name": "ShortL2",
      "name": "longL2",
      "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/bureau_des_sports_400.png",
      "link": "https://www.google.com"
    },
    {
      "id": 3,
      "short_name": "ShortL3",
      "name": "longL3",
      "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/physique_strasbourg_ingenieurie_400.jpeg",
      "link": "https://www.google.com"
    },
    {
      "id": 4,
      "short_name": "ShortL3",
      "name": "longL3",
      "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/physique_strasbourg_ingenieurie_400.jpeg",
      "link": "https://www.google.com"
    }
  ];

  const HandleClick = (id) => {
    const listeData = [
      {
        "id": 1,
        "short_name": "ShortL1",
        "name": "longL1",
        "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/bureau_des_etudiants_400.png",
        "link": "https://www.google.com"
      },
      {
        "id": 2,
        "short_name": "ShortL2",
        "name": "longL2",
        "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/bureau_des_sports_400.png",
        "link": "https://www.google.com"
      },
      {
        "id": 3,
        "short_name": "ShortL3",
        "name": "longL3",
        "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/physique_strasbourg_ingenieurie_400.jpeg",
        "link": "https://www.google.com"
      },
      {
        "id": 4,
        "short_name": "ShortL3",
        "name": "longL3",
        "logo_url": "https://fouaille.bde-tps.fr/storage/images/organization_logo/physique_strasbourg_ingenieurie_400.jpeg",
        "link": "https://www.google.com"
      }
    ];

    const newWindow = window.open(listeData[id - 1].link);
    if (newWindow) {
      newWindow.focus();
    }
  };


  return (
    <>
      <Navbar />
      <Container>
        <Title1>Listes campagne BDE</Title1>
        <Grid data={listeData} setShowPopup={HandleClick} />
      </Container >
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