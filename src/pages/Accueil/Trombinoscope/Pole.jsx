import React, { Children } from "react";
import styled from "styled-components";

const Pole = ({ titles, children }) => {
  return (
    <Container>
      <TitleContainer>
        {titles.map((title) => (
          <Title>{title}</Title>
        ))}
      </TitleContainer>
      <Wrapper numCol={Children.count(children)}>{children}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.numCol}, 1fr);
  grid-template-rows: 1fr;
  justify-content: center;
  gap: 100px;
`;

export default Pole;
