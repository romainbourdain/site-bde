import React, { useState } from "react";
import { Container, Logo, LogoContainer, LogoTitle } from ".";
import navbarText from "../../assets/text/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

const MobileNavbar = ({ links }) => {
  const [burgerActive, setBurgerActive] = useState(false);

  const allLinks = [];
  links.forEach((link) => {
    link.type === "list"
      ? link.children.forEach((child) => {
          allLinks.push({ name: child.name, route: child.route });
        })
      : allLinks.push({ name: link.name, route: link.route });
  });
  return (
    <Container>
      <LogoContainer>
        <Logo src={navbarText.logo} alt="logo-bde" />
        <LogoTitle>{navbarText.title}</LogoTitle>
      </LogoContainer>
      <BurgerBtn
        icon={faBars}
        className={burgerActive ? "active" : ""}
        onClick={() => setBurgerActive(!burgerActive)}
      />
      <BurgerMenu links={allLinks} active={burgerActive} />
    </Container>
  );
};

const BurgerBtn = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.textLight};
  font-size: 2rem;
  transition: 0.2s ease-in-out;

  &.active {
    transform: rotate(90deg);
  }
`;

export default MobileNavbar;
