import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ name, children }) => {
  return (
    <MenuLabel>
      <span>{name}</span>
      <StyledMenu>
        {children.map((child, key) => (
          <MenuLink key={key} to={child.route.path}>
            {child.name}
          </MenuLink>
        ))}
      </StyledMenu>
    </MenuLabel>
  );
};

const MenuLabel = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 25px;
  transition: 0.2s ease-in-out;
  color: ${(props) => props.theme.text};

  &:hover {
    background-color: ${(props) => props.theme.selected};
    color: ${(props) => props.theme.textSelected};

    ul {
      transform: translateY(100%);
      opacity: 1;
    }
  }
`;

const StyledMenu = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: black;
  width: 100%;
  opacity: 0;
  transition: 0.2s ease-in-out;
  z-index: -1;
`;

const MenuLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  transition: 0.2s ease-in-out;
  color: ${(props) => props.theme.text};
  padding: 30px 10px;

  &:not(:last-child) {
    border-bottom: 3px solid #367cbc;
  }

  &:hover {
    background-color: ${(props) => props.theme.selected};
    color: ${(props) => props.theme.textSelected};
  }
`;

export default Menu;
