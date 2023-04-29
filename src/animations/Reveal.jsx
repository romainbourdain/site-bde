import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Reveal = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  });
  return (
    <Container
      ref={ref}
      className={inView ? "reveal-visible" : "reveal"}
      delay={delay}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.reveal {
    opacity: 0;
    transform: translateY(-10px);
  }

  &.reveal-visible {
    opacity: 1;
    transform: translateY(0);
    transition: 0.3s;
    transition-delay: ${(props) => props.delay};
  }
`;

export default Reveal;
