import React from "react";
import styled from "styled-components";
import Text from "./Text";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Title2 from "../../../components/Titles/Title2";
import accueilText from "../../../assets/text/accueil";

const Presentation = () => {
  const navigate = useNavigate();
  const buttons = {
    clubsAssos: {
      onClick: () => navigate(routes.clubsAssos.path),
      icon: faArrowRight,
    },
    facebook: {
      onClick: () =>
        window.open(
          "https://www.facebook.com/groups/516421013324215",
          "_blank"
        ),
      icon: faArrowUpFromBracket,
    },
  };

  return (
    <Container>
      {accueilText.presentation.map((item, index) => (
        <Text
          key={index}
          src={item.image}
          alt=""
          imagePos={index % 2 === 0 ? "left" : "right"}
        >
          <Title2>{item.title}</Title2>
          {item.paragraph}
          {item.button && (
            <>
              <PrimaryButton onClick={buttons[item.button.id].onClick}>
                {item.button.text}{" "}
                <FontAwesomeIcon icon={buttons[item.button.id].icon} />
              </PrimaryButton>
            </>
          )}
        </Text>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 200px;
  gap: 100px;
`;

export default Presentation;
