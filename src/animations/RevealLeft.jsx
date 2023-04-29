import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const RevealLeft = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  });
  return (
    <Container
      ref={ref}
      className={inView ? "reveal-left-visible" : "reveal-left"}
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
  &.reveal-left {
    opacity: 0;
    transform: translateX(-10px);
  }

  &.reveal-left-visible {
    opacity: 1;
    transform: translateX(0);
    transition: 0.5s;
    transition-delay: ${(props) => props.delay};
  }
`;

export default RevealLeft;
