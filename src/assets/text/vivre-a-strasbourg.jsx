import Header from "../img/vivre-a-strasbourg/header.jpeg";
import Transports from "../img/vivre-a-strasbourg/transports.jpg";
import LogoCts from "../img/vivre-a-strasbourg/logo-cts.png";
import Crous from "../img/vivre-a-strasbourg/crous.png";
import Logement from "../img/vivre-a-strasbourg/logement.png";

const vivreAStrasbourgText = {
  header: {
    title: "Vivre à Strasbourg",
    img: Header,
    paragraph: (
      <>
        <p>
          Strasbourg est une ville idéale pour les <strong>étudiants</strong> en
          quête d'une vie <strong>animée</strong>.
        </p>
        <p>
          Elle offre une vie <strong>agréable</strong> avec un mélange culturel,
          sa richesse historique, ses spécialités culinaires, ses parcs et ses
          rives magnifiques.
        </p>
        <p>
          Elle dispose de toutes les commodités nécessaires avec des transports
          en commun efficaces. Strasbourg est une ville{" "}
          <strong>dynamique</strong> et <strong>conviviale</strong>, qui offre
          quelque chose pour tous les goûts.
        </p>
      </>
    ),
  },
  transports: {
    title: "Les transports",
    img: Transports,
    button: {
      text: "Pour plus d'infos",
      icon: LogoCts,
      link: "https://www.cts-strasbourg.eu/fr",
    },
    paragraph: (
      <>
        <p>
          La vie à Strasbourg est particulièrement <strong>agréable</strong>{" "}
          pour les piétons. Il y a de nombreuses zones piétonnes et la majorité
          des gens se déplacent à <strong>pied</strong>, à <strong>vélo</strong>{" "}
          ou avec les transports en communs. Le <strong>tram</strong>, bien
          pratique, fait en effet partie intégrante de la vie des
          Strasbourgeois, et, a fortiori, des <strong>PSiens</strong>.
        </p>
        <p>
          L’école est à proximité des <strong>lignes A et E</strong> qui
          rejoignent directement le centre ville (compter environ 30 min aux
          heures de pointe).
        </p>
        <p>
          Un seul point noir est l’absence de services de nuit avant le jeudi :
          les dernières rames partent du centre ville à 00h30. Attention : cela
          signifie que le dernier tram partant du{" "}
          <strong>campus d’Illkirch</strong> est vers minuit. Cependant, pour
          les fêtards du week-end, des <strong>bus de nuits</strong> circulent
          dès le jeudi et peuvent vous ramener au Campus.
        </p>
      </>
    ),
  },
  restauration: {
    title: "Restauration",
    img: Crous,
    paragraph: (
      <>
        <p>Tu sais pas où te restaurer ?</p>
        <p>
          Au RU bien sûr ! Le repas à <strong>3€30</strong> fait du RU l'endroit
          incontournable pour les étudiants. Et <strong>1€</strong> pour les{" "}
          <strong>boursiers</strong> !
        </p>
        <p>
          A Strasbourg, il en existe une petite <strong>dizaine</strong> dont un
          à 200m de l'école. On le partage avec Pharma, le lycée hôtelier,
          l'IUT... Certains RU du <strong>centre ville</strong> sont ouverts le{" "}
          <strong>soir</strong> et le <strong>weekend</strong> (ce n'est
          malheureusment pas le cas du notre, mais il est possible de prendre{" "}
          <strong>2 repas</strong> si t'as la flemme de te faire à manger).
        </p>
        <p>
          Pour les permanences et les ouvertures, voir le site de l'
          <a href="https://www.crous-strasbourg.fr/se-restaurer/">Unistra</a> !
          Et si jamais tu ne vas pas au RU, on t'attend au{" "}
          <strong>Fouaille</strong>. Eh oui, nos VP Fouaille sont là tous les
          midi pour te servir <strong>pizzas</strong> et{" "}
          <strong>nouilles chinoises</strong>.
        </p>
        <p>
          Mais tu peux également amener tes plats et les{" "}
          <strong>réchauffer</strong>. Les fameux <strong>Muffins</strong> et{" "}
          <strong>snacks</strong> à la pause sont dispos au Fouaille !
        </p>
      </>
    ),
  },
  logement: {
    title: "Logement",
    img: Logement,
    paragraph: (
      <>
        <p>
          La population <strong>Psienne</strong> est à peu près également
          répartie entre les 3 zones près de la ligne A/E.
        </p>
        <p>
          Souvent, en fin de première année, des <strong>collocs</strong> se
          mettent en place en centre ville.
        </p>
        <p>
          En général, le studio tout meublé semble être la solution facile.
          Renseignez-vous quand même sur les conditions de résiliation du bail
          qui sont souvent beaucoup moins avantageuses pour le locataire.
        </p>
      </>
    ),
  },
  residences: {
    paragraph: (
      <>
        <p>Liste non exhaustive des résidences où l'on trouve des Psiens : </p>
        <p>
          Ce sont des <strong>résidences récentes</strong> (moins de 10 ans)
          avec{" "}
          <strong>
            laverie automatique, gardiennage, parking privés sur la ligne A du
            tram.
          </strong>
        </p>
        <p>
          En moyenne, à Strasbourg, c'est <strong>400€ par mois</strong>{" "}
          (enlevez environ 150€ d'APL ou ALS) pour des studios d'une{" "}
          <strong>vingtaine de m²</strong>. Pour certaines de ces résidences,
          l'électricité est comprise mais c'est loin d'être toujours le cas.
        </p>
        <p>Ne pas négliger la collocation, ça coûte moins cher !</p>
      </>
    ),
    items: [
      {
        name: "Les Héliotropes",
        subtitle: "(crous)",
        link: "https://www.crous-strasbourg.fr/logement/residence-les-heliotropes/",
      },
      {
        name: "Le 301",
        link: "https://www.cap-logement-etudiant.com/residence-etudiante/grand-est/bas-rhin/strasbourg/residence-le-301-m9671.htm",
      },
      {
        name: "Heyritz",
        link: "https://www.mycampus.fr/residence-etudiante/strasbourg/macsf-heyritz.html",
      },
      {
        name: "La Strasbourgeoise",
        link: "https://www.bienveo.fr/H67207-LA%20STRASBOURGEOISE%20HABITAT",
      },
      {
        name: "Résidence Jean Monnet",
        link: "https://www.location-etudiant.fr/residence-JEAN-MONNET-Illkirch-Graffenstaden-1324930.html",
      },
      {
        name: "Unitha",
        link: "https://madein-residence-etudiante.com/unitha/",
      },
    ],
  },
};

export default vivreAStrasbourgText;
