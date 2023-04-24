import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Reveal = ({ children }) => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  return (
    <Container ref={ref} className={inView ? "reveal-visible" : "reveal"}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  &.reveal {
    opacity: 0;
    transform: translateY(-20px);
  }

  &.reveal-visible {
    opacity: 1;
    transform: translateY(0);
    transition: 0.3s;
  }
`;

export default Reveal;
