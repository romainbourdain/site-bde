import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ name, children }) => {
  return (
    <MenuLink>
      <MenuLabel className="label">
        {name}
        <FontAwesomeIcon icon={faCaretDown} />
      </MenuLabel>
      <StyledMenu>
        {children.map((child, key) => (
          <LinkContainer key={key} to={child.route.path}>
            <LinkLabel className="link">{child.name}</LinkLabel>
          </LinkContainer>
        ))}
      </StyledMenu>
    </MenuLink>
  );
};

const StyledMenu = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.menu};
  width: 100%;
  z-index: -1;
  transform: translateY(100%);
  border-radius: 15px;
  display: none;
  transition: background-color 0.2s ease-in-out;
`;

const LinkLabel = styled.span`
  padding: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  transition: 0.2s ease-in-out;
`;

const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  height: 50px;

  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }

  &:hover ${LinkLabel} {
    color: ${(props) => props.theme.selected};
  }
`;

const MenuLabel = styled.span`
  padding: 10px;
  transition: all 0.2s ease-in-out, border-radius 0.5s ease-in;
  border-radius: 2px;
  color: ${(props) => props.theme.text};
  display: flex;
  gap: 10px;
`;

const MenuLink = styled.span`
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    ${MenuLabel} {
      background-color: ${(props) => props.theme.selected};
      border-radius: 15px;
    }

    ${StyledMenu} {
      display: block;
    }
  }
`;

export default Menu;
