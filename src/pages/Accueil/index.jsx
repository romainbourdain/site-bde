import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "./Header";
import styled from "styled-components";
import navbarColors from "../../assets/colors/navbar";

const Home = () => {
  const [transparentNavbar, setTransparentNavbar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 0.9 * window.innerHeight) {
      setTransparentNavbar(false);
    } else {
      setTransparentNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <>
      <Navbar
        color={transparentNavbar ? "transparent" : navbarColors.background}
      />
      <Container>
        <Header />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 200vh;
`;

export default Home;
