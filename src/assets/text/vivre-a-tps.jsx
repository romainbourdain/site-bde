import Header from "../img/vivre-a-tps/header.jpg";
import Map from "../img/vivre-a-tps/map.jpg";
import Fouaille from "../img/vivre-a-tps/fouaille.jpg";
import {
  faBeerMugEmpty,
  faCircleDot,
  faDumbbell,
  faMusic,
  faShirt,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";

export const vivreATpsText = {
  header: {
    title: "Vivre à TPS",
    paragraph: (
      <>
        <p>
          <strong>Télécom Physique Strasbourg</strong> est situé en plein coeur
          du campus de <strong>Illkirch-Graffenstaden</strong> au pôle API
          (Application et Promotion de l'Innovation).
        </p>
        <p>
          Les locaux sont partagés avec plusieurs <strong>laboratoires</strong>{" "}
          de recherche et avec une autre école d'ingénieur :{" "}
          <strong>ESBS</strong> avec qui nous partageons une partie de la vie
          associative notamment le <strong>fouaille</strong> (foyer étudiant).
        </p>
      </>
    ),
    img: Header,
  },
  plan: {
    title: "Plan du pôle API",
    img: Map,
  },
  fouaille: {
    title: "Le Fouaille",
    img: Fouaille,
    paragraph: (
      <>
        <p>
          Le <strong>fouaille</strong> (foyer étudiant) est l'endroit réservé
          aux <strong>étudiants</strong>. C'est l'endroit où se déroulent les{" "}
          <strong>soirées</strong> notamment grâce à son <strong>bar</strong>.
          Il a aussi tout ce qu'il faut pour manger, se reposer, faire du sport.
          Il y a aussi un <strong>baby foot</strong> et deux{" "}
          <strong>billards !</strong>
        </p>
      </>
    ),
  },
  equipements: {
    title: "Equipements disponibles",
    items: [
      {
        title: "Bar",
        icon: faBeerMugEmpty,
      },
      {
        title: "Salle de sport",
        icon: faDumbbell,
      },
      {
        title: "Laverie",
        icon: faShirt,
      },
      {
        title: "Salle musique",
        icon: faMusic,
      },
      {
        title: "Baby foot",
        icon: faSoccerBall,
      },
      {
        title: "Billard",
        icon: faCircleDot,
      },
    ],
  },
};
