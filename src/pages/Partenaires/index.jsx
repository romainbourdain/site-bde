import React from "react";
import partenairesText from "../../assets/text/partenaires";
import Navbar from "../../components/Navbar";
import { Container } from "../../components/Section";
import Title1 from "../../components/Titles/Title1";
import Title2 from "../../components/Titles/Title2";
import styled from "styled-components";

const Partenaires = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title1>{partenairesText.title}</Title1>
        {partenairesText.partenaires.map((partenaire, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <LineContainer>
                <Paragraph>
                  <Title2
                    style={{ textAlign: "center", marginBottom: "1.2rem" }}
                  >
                    {partenaire.name}
                  </Title2>
                  <div>
                    <h3>Offres</h3>
                    {partenaire.offres}
                  </div>
                  <div>
                    <h3>Conditions</h3>
                    {partenaire.conditions}
                  </div>
                </Paragraph>
                <Image src={partenaire.logo} alt={`${partenaire.name}-logo`} />
              </LineContainer>
            ) : (
              <LineContainer>
                <Image src={partenaire.logo} alt={`${partenaire.name}-logo`} />
                <Paragraph>
                  <Title2
                    style={{ textAlign: "center", marginBottom: "1.2rem" }}
                  >
                    {partenaire.name}
                  </Title2>
                  <div>
                    <h3>Offres</h3>
                    {partenaire.offres}
                  </div>
                  <div>
                    <h3>Conditions</h3>
                    {partenaire.conditions}
                  </div>
                </Paragraph>
              </LineContainer>
            )}
          </div>
        ))}
      </Container>
    </>
  );
};

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
  margin-block: 2rem;

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  width: 300;
  height: 300;
`;

export default Partenaires;
