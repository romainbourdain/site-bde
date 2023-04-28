import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 20px 40px;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 50px;
  color: ${(props) => props.theme.textLight};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  svg {
    transform: scale(0.7);
  }
`;

export default PrimaryButton;
