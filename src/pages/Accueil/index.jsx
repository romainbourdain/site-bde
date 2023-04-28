import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "./Header";
import styled from "styled-components";
import Presentation from "./Presentation";
import Figures from "./Figures";
import Trombinoscope from "./Trombinoscope";
import Partenaires from "./Partenaires";
import Footer from "../../components/Footer";

const Home = () => {
  const [transparentNavbar, setTransparentNavbar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setTransparentNavbar(false);
    } else {
      setTransparentNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const presentationRef = useRef(null);
  const scroll = () =>
    presentationRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar color={transparentNavbar ? "transparent" : ""} />
      <Container>
        <Header scroll={scroll} />
        <div ref={presentationRef}>
          <Presentation />
        </div>
        <Figures />
        <Trombinoscope />
        <Partenaires />
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 200vh;
`;

export default Home;
