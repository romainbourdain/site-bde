import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
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
    font-size: 1.5rem;
  }

  @media (max-width: 1450px) {
    font-size: 1.5rem;
    padding: 15px 30px;

    svg {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 10px 20px;

    svg {
      font-size: 1rem;
    }
  }
`;

export default PrimaryButton;
