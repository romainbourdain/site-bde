import React from "react";
import styled from "styled-components";
import footerText from "../../assets/text/footer";

const Copyrights = () => {
  return (
    <Container>
      <p>{footerText.copyrights.copyright}</p>
      <p>{footerText.copyrights.credits}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundDarker};
  color: ${(props) => props.theme.textLight};
  text-align: center;
  padding: 15px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  width: 100%;

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
`;

export default Copyrights;
