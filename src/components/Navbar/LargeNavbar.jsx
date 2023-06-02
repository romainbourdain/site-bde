import React from "react";
import styled from "styled-components";
import navbarText from "../../assets/text/navbar";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import { Container, Logo, LogoContainer, LogoTitle } from ".";

const LargeNavbar = ({ links }) => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={navbarText.logo} alt="logo-bde" />
        <LogoTitle>{navbarText.title}</LogoTitle>
      </LogoContainer>
      <LinkList>
        {links.map((link, key) =>
          link.type === "list" ? (
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
  );
};

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
  color: ${(props) => props.theme.textLight};
  border-bottom: solid ${(props) => props.theme.textLight} 0;
`;

const LinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;

  &:hover ${LinkLabel} {
    color: ${(props) => props.theme.selected};
    border-color: ${(props) => props.theme.selected};
  }

  &.active ${LinkLabel} {
    border-width: 1px;
  }
`;

export default LargeNavbar;
