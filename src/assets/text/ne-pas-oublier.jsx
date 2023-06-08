import {
  faAtom,
  faBook,
  faBowlFood,
  faCampground,
  faFaceGrinBeam,
  faFileMedical,
  faGraduationCap,
  faHatCowboy,
  faHouse,
  faIdCard,
  faPersonHiking,
  faPersonSwimming,
  faShirt,
  faSuitcaseRolling,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";

const nePasOublierText = {
  header: {
    title: "Ne pas Oublier",
    icon: faSuitcaseRolling,
    paragraph: (
      <>
        <p>
          Tu penses être paré pour la <strong>rentrée</strong> ? Es-tu sûr de
          n'avoir rien oublié ?
        </p>
        <p>
          Nous t'avons concoté une petite liste pour te préparer au mieux à la
          vie à <strong>Strasbourg</strong> et dans <strong>l'école !</strong>
        </p>
      </>
    ),
  },
  quotidien: {
    title: "Pour le Quotidien",
    icon: faHouse,
    items: [
      {
        icon: faShirt,
        paragraph: (
          <p>
            Des <strong>vêtements chauds</strong> (doudoune, grosses chaussures,
            gants, bonnet... il paraît qu'il fait froid en hiver... mais c'est
            peut être la neige)
          </p>
        ),
      },
      {
        icon: faFileMedical,
        paragraph: (
          <p>
            Ta <strong>carte vitale</strong> et un{" "}
            <strong>certificat médical</strong> pour le sport (possibilité de
            l'obtenir auprès du SUMPS)
          </p>
        ),
      },
      {
        icon: faIdCard,
        paragraph: (
          <p>
            Ton <strong>numéro social étudiant</strong> (disponible sur ta carte
            étudiante)
          </p>
        ),
      },
      {
        icon: faFaceGrinBeam,
        paragraph: (
          <p>
            Le plus important, n'oublie pas <strong>ton sourire</strong> et{" "}
            <strong>ta bonne humeur</strong> !
          </p>
        ),
      },
    ],
  },
  cours: {
    title: "Pour les Cours",
    icon: faGraduationCap,
    items: [
      {
        icon: faAtom,
        paragraph: (
          <p>
            Une <strong>blouse</strong> pour les TP de physique
          </p>
        ),
      },
      {
        icon: faBook,
        paragraph: (
          <p>
            Des{" "}
            <strong>
              feuilles, cahiers, cours de prépa, fiches de révision
            </strong>
            ... (qui sait, tu t'en servira peut être)
          </p>
        ),
      },
    ],
  },
  integration: {
    title: "Pour l'Intégration",
    icon: faCampground,
    items: [
      {
        icon: faPersonHiking,
        paragraph: (
          <p>
            Pour le WEI (Weekend d'intégration), il faut un{" "}
            <strong>sac de couchage</strong>, une paire de{" "}
            <strong>chaussures de sport</strong> et des{" "}
            <strong>vêtements de rechange salissables</strong> (pour rester au
            sec)
          </p>
        ),
      },
      {
        icon: faVolleyball,
        paragraph: (
          <p>
            Des affaires de <strong>sport</strong> (pour les activités du{" "}
            <strong>Bureau des Sports</strong>) et quelques{" "}
            <strong>habits</strong> auxquels tu ne tiens pas
          </p>
        ),
      },
      {
        icon: faPersonSwimming,
        paragraph: (
          <p>
            Un <strong>maillot de bain</strong> (pour le lac de Baggersee)
          </p>
        ),
      },
      {
        icon: faBowlFood,
        paragraph: (
          <p>
            Un <strong>mets de ta région</strong>, une{" "}
            <strong>spécialité locale</strong> (pour partager ta culture avec
            les autres lors de la soirée inter-région...)
          </p>
        ),
      },
      {
        icon: faHatCowboy,
        paragraph: (
          <p>
            Et si tu as encore plein de place dans tes affaires, n'hésite pas à
            amener des <strong>déguisements</strong> en tout genre !
          </p>
        ),
      },
    ],
  },
};

export default nePasOublierText;
