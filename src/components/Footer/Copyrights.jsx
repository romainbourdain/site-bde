import React from "react";
import styled from "styled-components";

const Copyrights = () => {
  return (
    <Container>
      <p>© 2023 - Tous droits réservés</p>
      <p>
        Développement par Romain Bourdain (Dieu vivant) - Design par Enzo
        Bergamini (Légende Urbaine)
      </p>
    </Container>
  );
};

const Container = styled.div`
  background-color: #121212;
  color: #fff;
  text-align: center;
  padding: 15px;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

export default Copyrights;
