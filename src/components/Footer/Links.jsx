import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import GooglePlay from "../../assets/img/google-play.png";
import AppStore from "../../assets/img/app-store.svg";

const Links = () => {
  return (
    <Container>
      <Column>
        <Title>Liens Utiles</Title>
        <List>
          <Link target="_blank" href="https://telecom-physique.fr/">
            Site Web TPS
          </Link>
          <Link target="_blank" href="https://www.unistra.fr/">
            Site Web Unistra
          </Link>
          <Link target="_blank" href="https://intra-etu.telecom-ps.unistra.fr/">
            Intranet Etudiant
          </Link>
          <Link target="_blank" href="https://moodle.unistra.fr/">
            Moodle
          </Link>
          <Link target="_blank" href="https://ernest.unistra.fr/">
            Ernest
          </Link>
          <Link target="_blank" href="https://partage.unistra.fr/">
            Partage
          </Link>
          <Link target="_blank" href="https://monemploidutemps.unistra.fr/">
            Emploi du temps
          </Link>
        </List>
      </Column>
      <Column>
        <Title>Vie à l'école</Title>
        <List>
          <Link
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1Bk8WIDgYPn1yftwp7IWiqCXXRmJXkz8VoSkNOiaQhqY/edit#gid=135374961"
          >
            Planning Conférences
          </Link>
          <Link
            target="_blank"
            href="http://fablab.telecom-ps.unistra.fr/doku.php"
          >
            Fablab
          </Link>
          <Link
            target="_blank"
            href="http://fablab.telecom-ps.unistra.fr/doku.php?id=intranet:chartes"
          >
            FabManager
          </Link>
        </List>
      </Column>
      <Column>
        <Title>Documents utiles</Title>
        <List>
          <Link
            target="_blank"
            href="https://drive.google.com/drive/folders/1cb2h4_nhgk7v3w4haKxOGevHWSa9lCsF?usp=sharing"
          >
            Annales
          </Link>
          <Link
            target="_blank"
            href="https://dossieretu.unistra.fr/mdw/#!notesView"
          >
            Dossier Etudiant
          </Link>
          <Link target="_blank" href="https://lise.unistra.fr/">
            Certificat de Scolarité
          </Link>
          <Link
            target="_blank"
            href="https://documentation.unistra.fr/Catalogue/Infrastructures-reseau/osiris/VPN/co/guide.html"
          >
            VPN de l'école
          </Link>
        </List>
      </Column>
      <Column>
        <Title>Stage</Title>
        <List>
          <Link target="_blank" href="https://telecom-physique.jobteaser.com/">
            JobTeaser
          </Link>
          <Link target="_blank" href="https://chronos.telecom-ps.unistra.fr/">
            Chronos
          </Link>
          <Link
            target="_blank"
            href="https://intra-etu.telecom-ps.unistra.fr/doku.php?id=stages:procedure"
          >
            Comment trouver un stage
          </Link>
        </List>
      </Column>
      <Contact>
        <Column>
          <Title>Contactez nous !</Title>
          <Icons>
            <Icon target="_blank" href="mailto:contact@bde-tps.fr">
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
            <Icon
              target="_blank"
              href="https://www.facebook.com/groups/516421013324215"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Icon>
            <Icon target="_blank" href="https://www.instagram.com/bdetps2023/">
              <FontAwesomeIcon icon={faInstagram} />
            </Icon>
          </Icons>
        </Column>
        <Column>
          <Title>InsidePSBS</Title>
          <Icons>
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.ITS.InsidePSBS&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <img alt="Disponible sur Google Play" src={GooglePlay} />
            </Link>
            <Link target="_blank" href="https://www.apple.com/fr/app-store/">
              <img alt="Disponible sur l'App Store" src={AppStore} />
            </Link>
          </Icons>
        </Column>
      </Contact>
    </Container>
  );
};

const Container = styled.div`
  background-color: #191919;
  padding: 50px 65px;
  display: flex;
  justify-content: space-between;
  gap: 70px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Contact = styled(Column)`
  flex: 1;
  gap: 30px;
`;

const Link = styled.a`
  font-size: 1.2rem;
  color: #cfcfcf;
  &:hover {
    color: #eeeeee;
  }
`;

const Icon = styled(Link)`
  font-size: 3rem;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 150px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Links;
