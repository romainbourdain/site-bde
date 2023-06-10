import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Grid = ({ data }) => {
  return (
    <StyledGrid>
      {data?.map((entry, key) => {
        const name = entry.slug?.toUpperCase() || entry.name;
        const fullname = entry.slug && entry.name;
        return (
          <Card
            name={name}
            fullname={fullname}
            img={entry.logo_link}
            key={key}
          />
        );
      })}
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  -webkit-user-drag: none;
`;

export default Grid;
