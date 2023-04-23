import React from "react";
import Navbar from "../../components/Navbar";
import routes from "../../routes/routes";

const Home = () => {
  return (
    <>
      <Navbar currentPage={routes.accueil.id} />
      <div>Home</div>
    </>
  );
};

export default Home;
