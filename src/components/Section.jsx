import styled from "styled-components";
import Title2 from "./Titles/Title2";

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 200px 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media (max-width: 1400px) {
    padding: 200px 10vw;
  }

  @media (max-width: 700px) {
    padding: 100px 5vw;
  }
`;

export const Title = styled(Title2)`
  display: flex;
  color: ${(props) => props.theme.text};
  gap: 15px;
`;

export const Text = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 1.7rem;

    @media (max-width: 1400px) {
      font-size: 1.5rem;
    }

    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }
`;
