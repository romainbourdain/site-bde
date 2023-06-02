import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BurgerMenu = ({ links, active }) => {
  const location = useLocation();
  return (
    <Container className={active ? "active" : ""}>
      {links.map((link, key) => (
        <LinkContainer
          key={key}
          to={link.route.path}
          className={location.pathname === link.route.path ? "active" : ""}
        >
          <LinkLabel>{link.name}</LinkLabel>
        </LinkContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.backgroundDark};
  z-index: -1;
  transform: translateY(100%);
  opacity: 0;
  border-radius: 0 0 15px 15px;
  visibility: hidden;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.active {
    opacity: 0.8;
    visibility: visible;
  }
`;

const LinkLabel = styled.span`
  padding: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.textLight};
  transition: 0.2s ease-in-out;
  font-size: 1.2rem;
`;

const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  height: 50px;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.textLight};
  }

  &:hover ${LinkLabel} {
    color: ${(props) => props.theme.selected};
  }

  &.active {
    background-color: ${(props) => props.theme.selected};

    &:hover ${LinkLabel} {
      color: ${(props) => props.theme.textLight};
    }
  }
`;

export default BurgerMenu;
