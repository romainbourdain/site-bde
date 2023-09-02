const partenairesText = {
  title: "Partenaires",
  partenaires: [
    {
      name: "Lydia",
      logo: require("../../assets/img/partenaires/lydia_logo.png"),
      offres: (
        <p>
          10 euros offerts   sur ton compte Lydia
        </p>
      ),
      conditions: (
        <p>
          <u><strong>Utiliser le lien :</strong></u>
          <ul>
            <li>Utiliser le <a href="https://lydia-app.com/site/open/dispatch/referral?code=TPS2324">lien</a> ou rentrer le code "TPS2324"</li>
            <li>Crée ta carte virtuelle et active la sur Google pay, Apple Pay, Samsung pay</li>
          </ul>
          <u><strong>Sur 90 jours :</strong></u>
          <ul>
            <li>Utilise ta carte Lydia 5 fois</li>
            <li>Dans 5 commerce différents</li>
            <li>5€ minimum pour chaque paiement</li>
          </ul>
          Bravo, tu viens de te faire 10 euros !
        </p>
      ),
    },
    {
      name: "Emblem",
      logo: require("../../assets/img/partenaires/emblem_logo.png"),
      offres: (
        <p>
          La Carte Emblem permet de bénéficier d’avantages dans certains commerces de Strasbourg.
          <br/>
          <u><strong>Cette carte à 3 types d'avantages :</strong></u>
          <ul>
            <li>réduction permanente chez plus de 35 partenaires</li>
            <li>80 euros de cadeaux, sans conditions d'achats</li>
            <li>Organisations d'événements tous les mois</li>
          </ul>
          Elle sera disponible par l’intermédiaire d’une billetterie en ligne mise en place par Emblem au prix de 19,90€ TTC.
        </p>
      ),
      conditions: (
        <p>
          Il faut retirer la carte emblem au foyer étudiant TPS
        </p>
      ),
    },
    {
      name: "Société Générale",
      logo: require("../../assets/img/partenaires/societe_generale_logo.png"),
      offres: (
        <p>
          80€ à l’ouverture de compte
          Sobrio : 1€/an pendant 4 ans
          Option internationale : 2€/mois
          Assurance habitation étudiant : 6 mois offerts

          Il n’y aura pas de frais de dossier pour les prêts étudiants.
        </p>
      ),
      conditions: (
        <p>
          à la création du compte informer votre interlocuteur que vous venez de l'école partenaires Telecom physique Strasbourg.
        </p>
      ),
    },
    {
      name: "Bolt",
      logo: require("../../assets/img/partenaires/logo_bolt.png"),
      offres: (
        <p>
          10 euros de réduction sur votre première course
          en utilisant le code <strong>"TPS2324"</strong>
        </p>
      ),
    },
    {
      name: "Nono",
      logo: require("../../assets/img/partenaires/logo-nono.png"),
      offres: (
        <p>
          Station de 6 batteries disponible au fouaille
        </p>
      ),
      conditions: (
        <p>
          Se créer un compte sur l'application
        </p>
      ),
    },
    {
      name: "En Voiture Simone",
      logo: require("../../assets/img/partenaires/en-voiture-simone-logo.png"),
      offres: (
        <p>
          une réduction immédiate de 50 euros sur le prix du Pack Permis affiché sur le site <a href={"https://www.envoituresimone.com/"}>envoituresimone.com</a>
        </p>
      ),
      conditions: (
        <p>
          En utilisant le code de réduction"TPS2324"
        </p>
      ),
    },
    {
      name: "Eco Vestiaire",
      logo: require("../../assets/img/partenaires/eco_vestiaire_logo.png"),
      offres: (
        <p>
          Adhésion « Eco acteur » offerte
          qui permet d'avoir :
          <ul>
            <li>60% sur les articles de sport neuf</li>
            <li>80% sur les articles de sport d'occasion
            </li>
          </ul>
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
    {
      name: "Auchan",
      logo: require("../../assets/img/partenaires/Auchan-Logo.png"),
      offres: (
        <p>
          10% de réduction sur tout le magasin
        </p>
      ),
      conditions: (
        <p>
          Présentation carte étudiante de l' université et de la carte Auchan
        </p>
      ),
    },
    {
      name: "Spliiit",
      logo: require("../../assets/img/partenaires/logo-spliiit.png"),
      offres: (
        <p>
          1 euros offert sur le solde et frais de mise en relation offert pour le première abonnement partagé
        </p>
      ),
    },
    {
      name: "Délirium",
      logo: require("../../assets/img/partenaires/delirium-cafe.png"),
      offres: (
        <p>
          Détails des tarifs réduits :
          <ul>
            <li>La Pils 50cl à 4€</li>
            <li>Fruit Rouge 50cl à 5€</li>
            <li>Jagger Bombe à 5€</li>
            <li>
              Le verre de vin d’alsace (Riesling, Gewurtz,Rosé, Pinot Noir) à
              2,5€
            </li>
            <li> Les softs (Coca, limonade, Eau Gazeuse) à 2€</li>
          </ul>
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS ou tampon fournit par
          l'association
        </p>
      ),
    },
    {
      name: "Les 3 Ptits Cochons",
      logo: require("../../assets/img/partenaires/ptis_cochons_logo.png"),
      offres: (
        <p>
          5 % de réduction sur les bières et 10 % de réduction sur tout le reste (sauf Bretzels)
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
    {
      name: "Flam's",
      logo: require("../../assets/img/partenaires/flames_logo.png"),
      offres: (
        <p>
          <br/>
          <u><strong>L’offre de groupe (à partir de 20 personnes)  :</strong></u>
          <br/>
          <ul>
            <li>Formule à 15.00€ TTC/personne : Flam's terroirs à volonté + 1L de boisson
              par personne (soft, bière ou vin)</li>
            <li>Formule à 16.00€ TTC/personne : Flam’s terroirs à volonté + 1L de boisson
              par personne (soft, bière ou vin) + Assortiment de Flam’s sucrées en dessert
              2,5€</li>
          </ul>
          <br/>
          <u><strong> L’offre individuelle (sur présentation de la carte étudiante) :</strong></u>
          <br/>
          <ul>
            <li>Formule Elsassich à 10.00€ : Flam’s terroirs à volonté (+ pinte à 4.00 € en
              supplément ou verre de vin)</li>
            <li>Formule Hopla à 15.00€ (uniquement les Flam’s sucrées en dessert) :
              Flam's terroirs et créations à volonté + 1/2 Flam's sucrée (+ pinte à 4.00 € en
              supplément ou verre de vin)</li>
          </ul>
          <br/>
          <u><strong>L’offre à emporter (à partir de 20 Flam’s commandées sur réservation) : </strong></u>
          <br/>
          <ul>
            <li>Tarif réduit pour les flam’s à emporter (3,20€ TTC pour la traditionnelle et la
              gratinée, 4,00€ TTC pour la champignon et la champignon gratinée)</li>
          </ul>
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
    {
      name: "Tchungle",
      logo: require("../../assets/img/partenaires/tchungle_logo.png"),
      offres: (
        <p>
          5 % de réduction en dessous de 30 euros
          10 % de réduction au dessus de 30 euros
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
    {
      name: "TMZ Coiffure",
      logo: require("../../assets/img/partenaires/tmz.png"),
      offres: (
        <p>
          La coiffure Homme passe de 17€ à 15€
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
    {
      name: "Le Comptoir de Mathilde",
      logo: require("../../assets/img/partenaires/le_comptoir_de_mathilde_logo.png"),
      offres: (
        <p>
          10 % de réduction sur chaque passage en  boutique (boissons et glaces aussi)
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
    {
      name: "Virtual Center",
      logo: require("../../assets/img/partenaires/virtual-center-logo.png"),
      offres: (
        <p>
          une réduction de 20% sur tout le centre
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
    {
      name: "Librairie Kleber",
      logo: require("../../assets/img/partenaires/logo_librarie_kleber.png"),
      offres: (
        <p>
          5% de réductions sur la librairie
        </p>
      ),
      conditions: (
        <p>
          Présentation carte fouaille ou étudiante TPS
        </p>
      ),
    },
  ],
};

export default partenairesText;
