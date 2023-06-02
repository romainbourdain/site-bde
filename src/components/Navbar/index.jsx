import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import colors from "../../assets/colors";
import LargeNavbar from "./LargeNavbar";
import MobileNavbar from "./MobileNavbar";
import { navLinks } from "../../routes/routes";

const Navbar = ({ color }) => {
  const theme = {
    background: colors.backgroundDark,
    selected: colors.primary,
  };

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  if (color === "transparent") {
    theme.background = "transparent";
  }

  return (
    <ThemeProvider theme={theme}>
      {window.innerWidth < 1024 ? (
        <MobileNavbar links={navLinks} />
      ) : (
        <LargeNavbar links={navLinks} />
      )}
    </ThemeProvider>
  );
};

export const Container = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 0 1rem;
  z-index: 10;
  transition: 0.2s ease-in-out;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const LogoTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${(props) => props.theme.textLight};
`;

export const Logo = styled.img`
  height: 50px;
  aspect-ratio: 1/1;
  margin: 10px 0;
  border-radius: 100%;
`;

export default Navbar;
