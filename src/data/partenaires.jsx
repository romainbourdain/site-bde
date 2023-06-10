const partenaires = [
  {
    name: "En voiture Simone",
    img: require("../assets/img/partenaires/evs.png"),
    description: (
      <p>
        Code promo <strong>TPSTRASBOURG</strong> d’une valeur de 50€ sur le prix
        du pack permis (20h de conduite) soit le permis à 699€
      </p>
    ),
  },
  {
    name: "Flam's",
    img: require("../assets/img/partenaires/flams.png"),
    description: (
      <>
        <p>Il est impératif de réserver avant pour bénéficier des offres</p>
        <p>
          <strong>Offre individuelle :</strong>
          <br />
          Formule à 10 €<br />
          Elsassich Formule à 15€ Hopla
        </p>
        <p>
          <strong>Offre de groupe (à partir de 20 personnes) :</strong>
          <br />
          Formule à 14€ avec Flam’s terroirs à volonté (traditionnelle,
          gratinée, champignon, champignon gratinée) + 1L de boisson par
          personne (soft, bière ou vin)
          <br />
          Formule à 15€ avec Flam’s terroirs à volonté + 1L de boisson par
          personne (soft, bière ou vin) + Assortiment de Flam’s sucrées en
          dessert
        </p>
        <p>
          {" "}
          <strong>
            Offre de groupe à emporter (à partir de 20 personnes):{" "}
          </strong>
          <br />
          3.20€ la traditionnelle et la gratinée et 4.00€ la champignon gratinée
        </p>
      </>
    ),
  },
  {
    name: "Société Générale",
    img: require("../assets/img/partenaires/societe-generale.png"),
    description: (
      <p>
        <p>80 € à l’ouverture de compte d’un 1er compte bancaire SG</p>
        <p>
          SOBRIO : 1€/an pendant 4 ans 3 mois offerts sur la MRH 2€ l’option
          internationale Prêt étudiant : frais de dossiers offerts
        </p>
      </p>
    ),
  },
  {
    name: "Librairies Kleber",
    img: require("../assets/img/partenaires/librairies-kleber.png"),
    description: <p>5% de réductions sur la librairie</p>,
  },
  {
    name: "Endurance Shop",
    img: require("../assets/img/partenaires/endurance-shop.png"),
    description: (
      <p>
        10% de réduction sur tout le textile et chaussures ainsi que 5% sur
        l’alimentation et l’électronique
      </p>
    ),
  },
  {
    name: "BodyHit",
    img: require("../assets/img/partenaires/bodyhit.png"),
    description: (
      <p>
        Accès au tarifs partenaires pour les séances coaching Pack offert lors
        de la souscription à un abonnement
      </p>
    ),
  },
  {
    name: "3 Ptits Cochons",
    img: require("../assets/img/partenaires/3-ptits-cochons.png"),
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
    img: require("../assets/img/partenaires/press-ta-biere.png"),
    description: (
      <p>
        5% de réduction sur l’ensemble des produits des deux boutiques dans
        Strasbourg (à savoir 24 rue d’Austerlitz et 96 Grand Rue à Strasbourg)
      </p>
    ),
  },
  {
    name: "Réussite Toeic",
    img: require("../assets/img/partenaires/reussite-toeic.png"),
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
    img: require("../assets/img/partenaires/auchan.png"),
    description: (
      <p>
        10% de réduction sur tout le magasin sur présentation de la carte
        étudiante et de la carte Auchan
      </p>
    ),
  },
  {
    name: "Délirium",
    img: require("../assets/img/partenaires/delirium-cafe.png"),
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
