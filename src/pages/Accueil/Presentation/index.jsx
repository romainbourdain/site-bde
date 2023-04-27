import React from "react";
import Img1 from "../../../assets/img/home/img1.jpeg";
import Img2 from "../../../assets/img/home/img2.jpeg";
import Img3 from "../../../assets/img/home/img3.jpeg";
import Img4 from "../../../assets/img/home/img4.jpeg";
import styled from "styled-components";
import Text from "./Text";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Presentation = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Text src={Img1} alt="remise des diplomes" imagePos="left">
        <h1>Bienvenu à TPS !</h1>
        <p>
          Que tu sois déjà un futur élève de TPS (Telecom Physique Strasbourg)
          ou que tu n’aies jamais entendu parler de cette école avant
          aujourd’hui, bienvenu !
        </p>
      </Text>
      <Text src={Img3} alt="activité en extérieur" imagePos="right">
        <h1>Une vie associative bien chargée</h1>
        <p>
          Sache qu’à TPS tu n’auras jamais le temps de t’ennuyer : soirées,
          sports, clubs, activités culturelles, etc… Tout est fait pour te faire
          passer 3 superbes années. Mais je n’en dis pas plus et te laisse
          découvrir par toi même tous nos clubs et assos !
        </p>
        <Button onClick={() => navigate(routes.clubsAssos.path)}>
          Découvrir nos associations <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Text>
      <Text src={Img2} alt="passation" imagePos="left">
        <h1>Le BDE c'est quoi ?</h1>
        <p>
          Les BDE est l’association qui s’occupe de la vie étudiante et anime
          tout la partie associative de l’écoles. Ses principales missions sont
          :
          <li>
            Assurer la communication entre les étudiants et l’administration.
          </li>
          <li>Animer la vie étudiante et associative.</li>
          <li>
            Assurer l’intégration et aider chaque étudiant à trouver sa place.
          </li>
          <li>Gestion du foyer étudiant et de sont bar.</li>
        </p>
      </Text>
      <Text src={Img4} alt="weekend d'intégration" imagePos="right">
        <h1>Notre page Facebook</h1>
        <p>
          Alors, Convaincu ? En tout cas si tu as des questions n’hésite pas à
          les poser sur la page des Admissible Télécom Physique Strasbourg 2022
          , on se fera un plaisir d’y répondre !
        </p>
        <Button
          onClick={() =>
            window.open(
              "https://www.facebook.com/groups/516421013324215/",
              "_blank"
            )
          }
        >
          Admissibles TPS <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </Button>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 200px;
  gap: 100px;
`;

export default Presentation;
