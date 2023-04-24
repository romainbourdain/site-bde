import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ name, children }) => {
  return (
    <MenuLabel>
      <span className="label">
        {name}
        <FontAwesomeIcon icon={faCaretDown} />
      </span>
      <StyledMenu>
        {children.map((child, key) => (
          <MenuLink key={key} to={child.route.path}>
            <span className="link">{child.name}</span>
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
  background-color: ${(props) => props.theme.background};

  .label {
    padding: 10px;
    transition: all 0.2s ease-in-out, border-radius 0.5s ease-in;
    border-radius: 2px;
    color: ${(props) => props.theme.text};
    display: flex;
    gap: 10px;
  }

  &:hover {
    .label {
      background-color: ${(props) => props.theme.selected};
      border-radius: 15px;
    }

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
  background-color: ${(props) => props.theme.background};
  width: 100%;
  opacity: 0;
  transition: 0.2s ease-in-out;
  z-index: -1;
  border-radius: 0 0 20px 20px;
`;

const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  height: 60px;
  border-top: 1px solid #fff;

  .link {
    padding: 10px;
    background-color: transparent;
    color: ${(props) => props.theme.text};
    transition: 0.2s ease-in-out;
  }

  &:hover {
    .link {
      color: ${(props) => props.theme.selected};
    }
  }
`;

export default Menu;
