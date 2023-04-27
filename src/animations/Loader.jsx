import React from "react";
import styled from "styled-components";

const Loader = () => {
  return <Container></Container>;
};

export default Loader;

const Container = styled.span`
  width: 64px;
  height: 64px;
  position: relative;
  background: #fff;
  border-radius: 50%;
  transform: rotate(45deg);
  animation: rotate 2s linear infinite;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 15px;
    height: 30px;
    background: #367cbc;
    transform: skew(5deg, 60deg) translate(-50%, -5%);
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
  }

  @keyframes rotate {
    0% {
      transform: rotate(45deg);
    }
    30%,
    50%,
    70% {
      transform: rotate(230deg);
    }
    40%,
    60%,
    80% {
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(245deg);
    }
  }
`;
