import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GooglePlay from "../../assets/img/google-play.png";
import AppStore from "../../assets/img/app-store.svg";

const footerText = {
  copyrights: {
    copyright: "© 2023 - Tous droits réservés",
    credits:
      "Développement par Romain Bourdain (Dieu vivant) - Design par Enzo Bergamini (Légende Urbaine)",
  },
  links: [
    {
      title: "Liens Utiles",
      linkList: [
        {
          name: "Site Web TPS",
          url: "https://telecom-physique.fr/",
        },
        {
          name: "Site Web Unistra",
          url: "https://www.unistra.fr/",
        },
        {
          name: "Intranet Etudiant",
          url: "https://intra-etu.telecom-ps.unistra.fr/",
        },
        {
          name: "Moodle",
          url: "https://moodle.unistra.fr/",
        },
        {
          name: "Ernest",
          url: "https://ernest.unistra.fr/",
        },
        {
          name: "Partage",
          url: "https://partage.unistra.fr/",
        },
        {
          name: "Emploi du temps",
          url: "https://monemploidutemps.unistra.fr/",
        },
      ],
    },
    {
      title: "Vie à l'école",
      linkList: [
        {
          name: "Planning Conférences",
          url: "https://docs.google.com/spreadsheets/d/1Bk8WIDgYPn1yftwp7IWiqCXXRmJXkz8VoSkNOiaQhqY/edit#gid=135374961",
        },
        {
          name: "Fablab",
          url: "http://fablab.telecom-ps.unistra.fr/doku.php",
        },
        {
          name: "FabManager",
          url: "http://fablab.telecom-ps.unistra.fr/doku.php?id=intranet:chartes",
        },
      ],
    },
    {
      title: "Documents utiles",
      linkList: [
        {
          name: "Annales",
          url: "https://drive.google.com/drive/folders/1cb2h4_nhgk7v3w4haKxOGevHWSa9lCsF?usp=sharing",
        },
        {
          name: "Dossier Etudiant",
          url: "https://dossieretu.unistra.fr/mdw/#!notesView",
        },
        {
          name: "Certificat de Scolarité",
          url: "https://lise.unistra.fr/",
        },
        {
          name: "VPN de l'école",
          url: "https://documentation.unistra.fr/Catalogue/Infrastructures-reseau/osiris/VPN/co/guide.html",
        },
      ],
    },
    {
      title: "Stage",
      linkList: [
        {
          name: "JobTeaser",
          url: "https://telecom-physique.jobteaser.com/",
        },
        {
          name: "Chronos",
          url: "https://chronos.telecom-ps.unistra.fr/",
        },
        {
          name: "Comment trouver un stage",
          url: "https://intra-etu.telecom-ps.unistra.fr/doku.php?id=stages:procedure",
        },
      ],
    },
  ],
  contact: {
    title: "Contactez nous !",
    icons: [
      {
        url: "mailto:bdetps@gmail.com",
        icon: faEnvelope,
      },
      {
        url: "https://www.facebook.com/telecomphysiquestrasbourg",
        icon: faFacebook,
      },
      {
        url: "https://www.instagram.com/bdetps2023",
        icon: faInstagram,
      },
    ],
  },
  insidePsbs: {
    title: "Inside PSBS",
    links: [
      {
        name: "Disponible sur le Play Store",
        url: "https://play.google.com/store/apps/details?id=com.ITS.InsidePSBS&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
        img: GooglePlay,
      },
      {
        name: "Disponible sur l'App Store",
        url: "https://apps.apple.com/fr/",
        img: AppStore,
      },
    ],
  },
};

export default footerText;
