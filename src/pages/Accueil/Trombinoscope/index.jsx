import React, {useState} from "react";
import styled from "styled-components";
import Card from "./Card";
import Title1 from "../../../components/Titles/Title1";
import accueilText from "../../../assets/text/accueil";
import members from "../../../data/membresBde";

const Trombinoscope = () => {
    const [, setSelected] = useState(new Array(members.length).fill(false));

    return (
        <Container>
            <Title1>{accueilText.trombinoscope.title}</Title1>
            <Grid>
                {members.map((member, key) => (
                    <Card
                        img={member.image}
                        prenom={member.name}
                        role={member.role}
                        key={key}
                        index={key}
                        setSelected={setSelected}
                    />
                ))}
            </Grid>
        </Container>
    );
};

const Container = styled.div`
  padding: 150px 10vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 50px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 3vw;
  grid-template-columns: repeat(12, 1fr);

  & > :nth-child(-n + 3) {
    grid-column: span 4;
  }

  & > :nth-child(n + 4) {
    grid-column: span 3;
  }

  @media (max-width: 1024px) {
    & > :nth-child(1) {
      grid-column: 4/10;
    }

    & > :nth-child(n + 2) {
      grid-column: span 6;
    }
  }
`;


export default Trombinoscope;
