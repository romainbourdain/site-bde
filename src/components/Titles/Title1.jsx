import styled from "styled-components";

const Title1 = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.textDark};

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 800px) {
    font-size: 2.7rem;
  }

  @media (max-width: 650px) {
    font-size: 2.3rem;
  }
`;

export default Title1;
