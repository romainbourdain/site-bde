import styled from "styled-components";

const Title2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.textDark};

  @media (max-width: 1024px) {
    font-size: 2.3rem;
  }

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export default Title2;
