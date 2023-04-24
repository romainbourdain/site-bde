import React from "react";
import routes from "../../routes/routes";
import LogoBde from "../../assets/img/logo-bde.png";
import styled, { ThemeProvider } from "styled-components";
import navbarColors from "../../assets/colors/navbar";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Navbar = ({ theme = navbarColors, currentPage }) => {
  const links = [
    {
      name: "Accueil",
      route: routes.accueil,
    },
    {
      name: "Présentation",
      route: routes.presentation,
    },
    {
      name: "Clubs et Associations",
      route: routes.clubsAssos,
    },
    {
      name: "Informations Pratiques",
      children: [
        {
          name: "Ne pas oublier",
          route: routes.nePasOublier,
        },
        {
          name: "Vivre à Strasbourg",
          route: routes.vivreAStrasbourg,
        },
        {
          name: "Vivre à TPS",
          route: routes.vivreATPS,
        },
      ],
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Logo src={LogoBde} alt="logo-bde" />
        <LinkContainer>
          {links.map((link, key) =>
            link.children ? (
              <Menu name={link.name} children={link.children} key={key} />
            ) : (
              <StyledLink to={link.route.path} key={key}>
                {link.name}
              </StyledLink>
            )
          )}
        </LinkContainer>
        <div></div>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${(props) => props.theme.background};
  padding: 0 50px;
  z-index: 10;
`;

const Logo = styled.img`
  height: 86px;
  aspect-ratio: 1/1;
  margin: 10px 0;
`;

const LinkContainer = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 1.7rem;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 25px;
  transition: 0.2s ease-in-out;
  color: ${(props) => props.theme.text};

  &.active {
    color: ${(props) => props.theme.selected};

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 10px;
      background-color: ${(props) => props.theme.selected};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.selected};
    color: ${(props) => props.theme.textSelected};
  }
`;

export default Navbar;
