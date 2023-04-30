import Accueil from "../pages/Accueil";
import Erreur from "../pages/Erreur";
import ClubsAssos from "../pages/ClubsAssos";
import NePasOublier from "../pages/NePasOublier";
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
    element: <Erreur />,
  },
  vivreATPS: {
    id: "vivre-a-tps",
    path: "/vivre-a-tps",
    element: <Erreur />,
  },
  error: {
    id: "erreur",
    path: "*",
    element: <Erreur />,
  },
};

export default routes;
