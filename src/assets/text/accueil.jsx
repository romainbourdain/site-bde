import Img1 from "../img/home/img1.jpeg";
import Img2 from "../img/home/img2.jpeg";
import Img3 from "../img/home/img3.jpeg";
import Img4 from "../img/home/img4.jpeg";

const accueilText = {
  header: {
    title: "Début de la campagne BDE dans :",
    units: ["Jours", "Heures", "Minutes", "Secondes"],
    button: "Découvrir le BDE",
  },
  presentation: [
    {
      title: "Bienvenue à TPS !",
      paragraph: (
        <p>
          Que tu sois déjà un futur élève de TPS (Telecom Physique Strasbourg)
          ou que tu n’aies jamais entendu parler de cette école avant
          aujourd’hui, bienvenue !
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
          <li>gestion du fouaille et de son bar.</li>
        </p>
      ),
      image: Img2,
    },
    {
      title: "Notre page Facebook",
      paragraph: (
        <p>
          Tu as été accepté à Télécom Physique Strasbourg ? Félicitations !
           Rejoins notre page Facebook "Admis 2023" pour obtenir toutes les informations 
           relatives à la vie étudiante de l'école et te préparer au mieux pour ton entrée. 
           Tu pourras également poser toutes tes questions !
        </p>
      ),
      image: Img4,
      button: {
        id: "facebook",
        text: "Admis TPS",
      },
    },
  ],
  figures: {
    adherents: {
      title: "Adhérents",
      number: 386,
    },
    clubsAssos: {
      title: "Clubs et Associations",
      number: 36,
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
