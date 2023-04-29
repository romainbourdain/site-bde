import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styled, { createGlobalStyle } from "styled-components";
import Title2 from "./Titles/Title2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ trigger, title, children }) => {
  return (
    <>
      <PopupStyle />
      <Popup trigger={trigger} modal>
        {(close) => (
          <Container>
            <Header>
              <Title>{title}</Title>
              <Button onClick={close}>
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </Header>
            {children}
          </Container>
        )}
      </Popup>
    </>
  );
};

const PopupStyle = createGlobalStyle`
    .popup-content {
        border-radius: 60px;

        @media (max-width: 1050px) {
            width: 70vw;
        }

        @media (max-width: 600px) {
            width: 90vw;
        }
    }
`;

const Container = styled.div`
  padding: 50px 3vw;
  font-size: 1.7rem;
  color: ${(props) => props.theme.textDark};
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    font-size: 1.3rem;
    gap: 30px;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Title2)`
  text-align: start;

  @media (max-width: 800px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 2.5rem;
  color: ${(props) => props.theme.textDark};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 800px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export default Modal;
