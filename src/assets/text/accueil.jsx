import Img1 from "../img/home/img1.jpeg";
import Img2 from "../img/home/img2.jpeg";
import Img3 from "../img/home/img3.jpeg";
import Img4 from "../img/home/img4.jpeg";

import Alex from "../img/trombinoscope/alex.jpg";
import Antonin from "../img/trombinoscope/antonin.jpg";
import Lauryne from "../img/trombinoscope/lauryne.jpg";
import Emma from "../img/trombinoscope/emma.jpg";
import Gaetane from "../img/trombinoscope/gaetane.jpg";
import Luka from "../img/trombinoscope/luka.jpg";
import Roman from "../img/trombinoscope/roman.jpg";
import Julien from "../img/trombinoscope/julien.jpg";
import Lea from "../img/trombinoscope/lea.jpg";
import Killian from "../img/trombinoscope/killian.jpg";
import Enzo from "../img/trombinoscope/enzo.jpg";
import Florian from "../img/trombinoscope/florian.jpg";
import Mathis from "../img/trombinoscope/mathis.jpg";
import Nathan from "../img/trombinoscope/nathan.jpg";
import Felix from "../img/trombinoscope/felix.jpg";

const accueilText = {
  header: {
    title: "Début de l'intégration dans",
    units: ["Jour", "Heure", "Minute", "Seconde"],
    button: "Découvrir le BDE",
  },
  presentation: [
    {
      title: "Bienvenu à TPS !",
      paragraph: (
        <p>
          Que tu sois déjà un futur élève de TPS (Telecom Physique Strasbourg)
          ou que tu n’aies jamais entendu parler de cette école avant
          aujourd’hui, bienvenu !
        </p>
      ),
      image: Img1,
    },
    {
      title: " Une vie associative bien chargée",
      paragraph: (
        <p>
          Sache qu’à TPS tu n’auras jamais le temps de t’ennuyer : soirées,
          sports, clubs, activités culturelles, etc… Tout est fait pour te faire
          passer 3 superbes années. Mais je n’en dis pas plus et te laisse
          découvrir par toi même tous nos clubs et assos !
        </p>
      ),
      image: Img3,
      button: {
        id: "clubsAssos",
        text: "Découvrir nos associations",
      },
    },
    {
      title: "Le BDE c'est quoi ?",
      paragraph: (
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
      ),
      image: Img2,
    },
    {
      title: "Notre page Facebook",
      paragraph: (
        <p>
          Alors, Convaincu ? En tout cas si tu as des questions n’hésite pas à
          les poser sur la page des Admissible Télécom Physique Strasbourg 2022
          , on se fera un plaisir d’y répondre !
        </p>
      ),
      image: Img4,
      button: {
        id: "facebook",
        text: "Admissibles TPS",
      },
    },
  ],
  figures: {
    adherents: {
      title: "Adhérents",
      number: 400,
    },
    clubsAssos: {
      title: "Clubs et Associations",
      number: 20,
    },
  },
  trombinoscope: {
    title: "Trombinoscope du BDE",
    sections: [
      {
        poles: ["Bureau"],
        members: [
          {
            name: "Alex",
            role: "Secrétaire",
            image: Alex,
          },
          {
            name: "Antonin",
            role: "Président",
            image: Antonin,
          },
          {
            name: "Lauryne",
            role: "Trésorière",
            image: Lauryne,
          },
        ],
      },
      {
        poles: ["Fouaille"],
        members: [
          {
            name: "Emma",
            role: "Fouaille",
            image: Emma,
          },
          {
            name: "Gaetane",
            role: "Fouaille",
            image: Gaetane,
          },
          {
            name: "Luka",
            role: "Fouaille",
            image: Luka,
          },
          {
            name: "Roman",
            role: "Fouaille",
            image: Roman,
          },
        ],
      },
      {
        poles: ["Communication"],
        members: [
          {
            name: "Julien",
            role: "Int",
            image: Julien,
          },
          {
            name: "Léa",
            role: "Alternance",
            image: Lea,
          },
          {
            name: "Killian",
            role: "Réseaux",
            image: Killian,
          },
          {
            name: "Enzo",
            role: "Chti",
            image: Enzo,
          },
        ],
      },
      {
        poles: ["Spons", "Ext"],
        members: [
          {
            name: "Florian",
            role: "Spons",
            image: Florian,
          },
          {
            name: "Mathis",
            role: "Spons",
            image: Mathis,
          },
          {
            name: "Nathan",
            role: "Ext",
            image: Nathan,
          },
          {
            name: "Félix",
            role: "Ext",
            image: Felix,
          },
        ],
      },
    ],
  },
  partenaires: {
    title: "Nos partenaires",
  },
};

export default accueilText;
