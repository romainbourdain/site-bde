import React from "react";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import colors from "../../assets/colors";
import {
  faEnvelope,
  faGlobe,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title2 from "../../components/Titles/Title2";
import Loader from "../../animations/Loader";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Popup = ({ id, setShow }) => {
  const { res, error, isLoading } = useFetch(
    `https://fouaille.bde-tps.fr/api/organization/show/${id}`
  );
  if (error) {
    console.error(error);
    setShow(-1);
  }
  return (
    <Background
      onClick={(e) => {
        e.preventDefault();
        if (e.currentTarget === e.target) setShow(-1);
      }}
    >
      {isLoading || !res ? (
        <Loader />
      ) : (
        <Window>
          <Header>
            <Title>{res.data.name}</Title>
            <Button onClick={() => setShow(-1)}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </Header>
          <SocialNetworks>
            {res.data.website_link && (
              <Icon
                icon={faGlobe}
                onClick={() => window.open(res.data.website_link)}
              />
            )}
            {res.data.email && (
              <Icon
                icon={faEnvelope}
                onClick={() => window.open(`mailto:${res.data.email}`)}
              />
            )}
            {res.data.facebook_link && (
              <Icon
                icon={faFacebook}
                onClick={() => window.open(res.data.facebook_link)}
              />
            )}
            {res.data.instagram_link && (
              <Icon
                icon={faInstagram}
                onClick={() => window.open(res.data.instagram_link)}
              />
            )}
            {res.data.twitter_link && (
              <Icon
                icon={faTwitter}
                onClick={() => window.open(res.data.twitter_link)}
              />
            )}
            {res.data.discord_link && (
              <Icon
                icon={faDiscord}
                onClick={() => window.open(res.data.discord_link)}
              />
            )}
          </SocialNetworks>
          <Paragraph>{res.data.description}</Paragraph>
        </Window>
      )}
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Window = styled.div`
  background-color: ${colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px 3vw;
  color: ${(props) => props.theme.textDark};
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 60vw;
  border-radius: 20px;
  max-height: 70vh;
  overflow-y: scroll;
  z-index: 200;
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
  cursor: pointer;

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

const Paragraph = styled.p`
  font-size: 1.7rem;
  margin-bottom: 1rem;

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

const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.black};
  font-size: 3rem;
  transition: 0.2s ease-in-out;
  padding: 2rem;
  border: 1px solid #878787;
  border-radius: 10px;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 800px) {
    font-size: 2.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 1rem;
  }
`;

export default Popup;
