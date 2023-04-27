import React, { Children } from "react";
import styled from "styled-components";
import Reveal from "../../../animations/Reveal";
import RevealLeft from "../../../animations/RevealLeft";
import RevealRight from "../../../animations/RevealRight";

const Text = ({ imagePos, src, alt, children }) => {
  const childrenArray = Children.toArray(children);
  if (imagePos === "left")
    return (
      <Container>
        <TextContainer>
          {childrenArray.map((child, key) => (
            <Reveal key={key} delay=".1s">
              {child}
            </Reveal>
          ))}
        </TextContainer>
        <RevealRight delay={`.${childrenArray.length}s`}>
          <Image src={src} alt={alt} />
        </RevealRight>
      </Container>
    );
  if (imagePos === "right")
    return (
      <Container>
        <RevealLeft>
          <Image src={src} alt={alt} />
        </RevealLeft>
        <TextContainer>
          {childrenArray.map((child, key) => (
            <Reveal key={key}>{child}</Reveal>
          ))}
        </TextContainer>
      </Container>
    );
  return <></>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 170px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  flex: 1;

  p {
    font-weight: 400;
    font-size: 1.5rem;
    color: #4b4b4b;

    a {
      color: #4b4b4b;
      text-decoration: underline;
    }

    li {
      list-style: disc;
    }
  }
`;

const Image = styled.img`
  width: 600px;
  height: 424px;
  object-fit: cover;
`;

export default Text;
