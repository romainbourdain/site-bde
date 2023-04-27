import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ max, label }) => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  });
  return (
    <Container ref={ref}>
      {inView ? <Number duration={3} end={max} /> : ""}
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const Number = styled(CountUp)`
  font-weight: 700;
  font-size: 2.7rem;
`;

const Label = styled.span`
  font-size: 2rem;
`;

export default Counter;
