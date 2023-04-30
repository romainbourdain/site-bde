import Img1 from "../img/home/img1.jpeg";
import Img2 from "../img/home/img2.jpeg";
import Img3 from "../img/home/img3.jpeg";
import Img4 from "../img/home/img4.jpeg";

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
      number: 40,
    },
  },
  trombinoscope: {
    title: "Trombinoscope du BDE",
  },

  partenaires: {
    title: "Nos partenaires",
  },
};

export default accueilText;
