import Accueil from "../pages/Accueil";
import Erreur from "../pages/Erreur";
import ClubsAssos from "../pages/ClubsAssos";
import NePasOublier from "../pages/NePasOublier";
import VivreAStrasbourg from "../pages/VivreAStrasbourg";
import VivreATps from "../pages/VivreATps";
import navbarText from "../assets/text/navbar";
import Partenaires from "../pages/Partenaires";
import Campagne from "../pages/Campagne";

const routes = {
  accueil: {
    id: "accueil",
    path: "/",
    element: <Accueil />,
  },
  clubsAssos: {
    id: "clubs-assos",
    path: "/clubs-assos",
    element: <ClubsAssos />,
  },
  nePasOublier: {
    id: "ne-pas-oublier",
    path: "/ne-pas-oublier",
    element: <NePasOublier />,
  },
  vivreAStrasbourg: {
    id: "vivre-a-strasbourg",
    path: "/vivre-a-strasbourg",
    element: <VivreAStrasbourg />,
  },
  vivreATPS: {
    id: "vivre-a-tps",
    path: "/vivre-a-tps",
    element: <VivreATps />,
  },
  partenaires: {
    id: "partenaires",
    path: "/partenaires",
    element: <Partenaires />,
  },
  error: {
    id: "erreur",
    path: "*",
    element: <Erreur />,
  },
  campagne: {
    id: "campagne",
    path: "/campagne",
    element: <Campagne />,
  }
};

export const navLinks = [
  {
    name: navbarText.links.accueil,
    route: routes.accueil,
    type: "link",
  },
  {
    name: navbarText.links.clubsAssos,
    route: routes.clubsAssos,
    type: "link",
  },
  {
    name: navbarText.links.infos,
    type: "list",
    children: [
      {
        name: navbarText.links.nePasOublier,
        route: routes.nePasOublier,
        type: "link",
      },
      {
        name: navbarText.links.vivreAStrasbourg,
        route: routes.vivreAStrasbourg,
        type: "link",
      },
      {
        name: navbarText.links.vivreATps,
        route: routes.vivreATPS,
        type: "link",
      },
    ],
  },
  {
    name: navbarText.links.partenaires,
    route: routes.partenaires,
    type: "link",
  },
  {
    name: navbarText.links.campagne,
    route: routes.campagne,
    type: "link",
  }
];

export default routes;
