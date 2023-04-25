import React from "react";
import LogoBde from "../../assets/img/logo-bde.png";
import styled, { ThemeProvider } from "styled-components";
import navbarColors from "../../assets/colors/navbar";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import routes from "../../routes/routes";

const Navbar = ({ color }) => {
  const links = [
    {
      name: "Accueil",
      route: routes.accueil,
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
  const theme = { ...navbarColors };

  if (color == "transparent") {
    theme.background = "transparent";
    theme.menu = "rgba(0, 0, 0, 0.5)";
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LogoContainer>
          <Logo src={LogoBde} alt="logo-bde" />
          <LogoTitle>BDE</LogoTitle>
        </LogoContainer>
        <LinkList>
          {links.map((link, key) =>
            link.children ? (
              <Menu name={link.name} children={link.children} key={key} />
            ) : (
              <LinkContainer to={link.route.path} key={key}>
                <LinkLabel>{link.name}</LinkLabel>
              </LinkContainer>
            )
          )}
        </LinkList>
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
  transition: 0.2s ease-in-out;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const LogoTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${(props) => props.theme.text};
`;

const Logo = styled.img`
  height: 50px;
  aspect-ratio: 1/1;
  margin: 10px 0;
`;

const LinkList = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 1.2rem;
  gap: 25px;
`;

const LinkLabel = styled.span`
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
`;

const LinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;

  &:hover ${LinkLabel} {
    color: ${(props) => props.theme.selected};

    &::after {
      background-color: ${(props) => props.theme.selected};
    }
  }

  &.active span::after {
    height: 1px;
  }
`;

export default Navbar;
