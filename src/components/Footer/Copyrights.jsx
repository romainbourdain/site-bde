import React from "react";
import styled from "styled-components";
import footerText from "../../assets/text/footer";

const Copyrights = ({
                        setVideo = () => {
                        }
                    }) => {
    return (
        <Container>
            <span>{footerText.copyrights.copyright}</span>
            <span
                onClick={() => setVideo(require("../../assets/img/header.mp4"))}>{footerText.copyrights.credits}</span>
        </Container>
    );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundDarker};
  color: ${(props) => props.theme.textLightSecondary};
  text-align: center;
  padding: 15px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
`;

export default Copyrights;
