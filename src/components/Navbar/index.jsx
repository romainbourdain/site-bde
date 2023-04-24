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
                <span>{link.name}</span>
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
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${(props) => props.theme.background};
  padding: 0 1rem;
  z-index: 10;
`;

const Logo = styled.img`
  height: 50px;
  aspect-ratio: 1/1;
  margin: 10px 0;
`;

const LinkContainer = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 1.2rem;
  gap: 25px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;

  span {
    position: relative;
    margin: 10px 0;
    padding: 10px 0;
    transition: 0.2s ease-in-out;
    color: ${(props) => props.theme.text};

    &::after {
      content: "";
      position: absolute;
      background-color: #fff;
      width: 100%;
      bottom: 0;
      left: 0;
      color: ${(props) => props.theme.selected};
      transition: 0.2s ease-in-out;
    }

    &:hover {
      color: ${(props) => props.theme.selected};

      &::after {
        background-color: ${(props) => props.theme.selected};
      }
    }
  }

  &.active span::after {
    height: 1px;
  }
`;

export default Navbar;
