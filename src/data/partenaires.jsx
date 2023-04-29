import EVS from "../assets/img/partenaires/evs.png";
import SocieteGenerale from "../assets/img/partenaires/societe-generale.png";
import Flams from "../assets/img/partenaires/flams.png";
import LibrairiesKleber from "../assets/img/partenaires/librairies-kleber.png";
import EnduranceShop from "../assets/img/partenaires/endurance-shop.png";
import BurgersPapa from "../assets/img/partenaires/burgers-papa.png";
import BodyHit from "../assets/img/partenaires/bodyhit.png";
import PtitsCochons from "../assets/img/partenaires/3-ptits-cochons.png";
import Auchan from "../assets/img/partenaires/auchan.png";
import PressTaBiere from "../assets/img/partenaires/press-ta-biere.jpg";
import ReussiteToeic from "../assets/img/partenaires/reussite-toeic.png";
import DeliriumCafe from "../assets/img/partenaires/delirium-cafe.png";

const partenaires = [
  {
    name: "En voiture Simone",
    img: EVS,
    description: (
      <p>
        Code promo TPSTRASBOURG d’une valeur de 50€ sur le prix du pack permis
        (20h de conduite) soit le permis à 699€
      </p>
    ),
  },
  {
    name: "Société Générale",
    img: SocieteGenerale,
    description: (
      <p>
        Il est impératif de réserver avant pour bénéficier des offres Offre
        individuelle : Formule à 10 € Elsassich Formule à 15€ Hopla Offre de
        groupe (à partir de 20 personnes) : Formule à 14€ avec Flam’s terroirs à
        volonté (traditionnelle, gratinée, champignon, champignon gratinée) + 1L
        de boisson par personne (soft, bière ou vin) Formule à 15€ avec Flam’s
        terroirs à volonté + 1L de boisson par personne (soft, bière ou vin) +
        Assortiment de Flam’s sucrées en dessert Offre de groupe à emporter (à
        partir de 20 personnes): 3.20€ la traditionnelle et la gratinée et 4.00€
        la champignon gratinée
      </p>
    ),
  },
  {
    name: "Flams",
    img: Flams,
    description: (
      <p>
        80 € à l’ouverture de compte d’un 1er compte bancaire SG SOBRIO : 1€/an
        pendant 4 ans 3 mois offerts sur la MRH 2€ l’option internationale Prêt
        étudiant : frais de dossiers offerts
      </p>
    ),
  },
  {
    name: "Librairies Kleber",
    img: LibrairiesKleber,
    description: <p>5% de réductions sur la librairie</p>,
  },
  {
    name: "Endurance Shop",
    img: EnduranceShop,
    description: (
      <p>Menu étudiant tous les jours y compris les soirs et week-ends</p>
    ),
  },
  {
    name: "Les Burgers de Papa",
    img: BurgersPapa,
    description: (
      <p>
        10% de réduction sur tout le textile et chaussures ainsi que 5% sur
        l’alimentation et l’électronique
      </p>
    ),
  },
  {
    name: "BodyHit",
    img: BodyHit,
    description: (
      <p>
        Accès au tarifs partenaires pour les séances coaching Pack offert lors
        de la souscription à un abonnement
      </p>
    ),
  },
  {
    name: "3 Ptits Cochons",
    img: PtitsCochons,
    description: (
      <p>
        10% de réduction sur tous les produits des deux magasin dans Strasbourg
        (sauf Bretzels) (à savoir 24 rue d’Austerlitz et 96 Grand Rue à
        Strasbourg)
      </p>
    ),
  },
  {
    name: "Press ta Bière",
    img: PressTaBiere,
    description: (
      <p>
        5% de réduction sur l’ensemble des produits des deux boutiques dans
        Strasbourg (à savoir 24 rue d’Austerlitz et 96 Grand Rue à Strasbourg)
      </p>
    ),
  },
  {
    name: "Réussite Toeic",
    img: ReussiteToeic,
    description: (
      <p>
        <li>
          Réduction de 10% aux élèves de l’école Télécom Physique Strasbourg
          s’inscrivant à l’offre Réussite TOEIC
        </li>
        <li>
          Un passage TOEIC offert pour 30 heures de cours prises Toutes ces
          offres s’appliquent uniquement au financement personnel et ne peuvent
          pas être prises en compte sur un financement CPF. Si le coût du test
          est inclus, il ne peut y avoir de remise ou commission sur le passage
          du test
        </li>
      </p>
    ),
  },
  {
    name: "Auchan",
    img: Auchan,
    description: (
      <p>
        10% de réduction sur tout le magasin sur présentation de la carte
        étudiante et de la carte Auchan
      </p>
    ),
  },
  {
    name: "Délirium",
    img: DeliriumCafe,
    description: (
      <p>
        <li>la Pils 50cl à 4€</li>
        <li> Fruit Rouge 50cl à 5€</li>
        <li>Jagger Bombe à 5€</li>
        <li>
          le verre de vin d’alsace (Riesling, Gewurtz, Rosé, Pinot Noir) à 2,5€
        </li>
        <li>– les softs (Coca, limonade, Eau Gazeuse) à 2</li>
      </p>
    ),
  },
];

export default partenaires;
