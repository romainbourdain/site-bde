import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import Reveal from "../../../animations/Reveal";
import RevealLeft from "../../../animations/RevealLeft";
import RevealRight from "../../../animations/RevealRight";
import Title2 from "../../../components/Titles/Title2";

const Text = ({ imagePos, src, alt, children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const childrenArray = Children.toArray(children);
  if (window.innerWidth < 1024)
    return (
      <Container>
        <TextContainer>
          {childrenArray.map((child, key) => (
            <Reveal key={key}>{child}</Reveal>
          ))}
        </TextContainer>
        <Reveal>
          <Image src={src} alt={alt} pos={imagePos} />
        </Reveal>
      </Container>
    );
  if (imagePos === "left")
    return (
      <Container>
        <TextContainer pos={imagePos}>
          {childrenArray.map((child, key) => (
            <Reveal key={key} delay=".1s">
              {child}
            </Reveal>
          ))}
        </TextContainer>
        <RevealRight delay={`.${childrenArray.length}s`}>
          <Image src={src} alt={alt} pos={imagePos} />
        </RevealRight>
      </Container>
    );
  if (imagePos === "right")
    return (
      <Container>
        <RevealLeft>
          <Image src={src} alt={alt} pos={imagePos} />
        </RevealLeft>
        <TextContainer pos={imagePos}>
          {childrenArray.map((child, key) => (
            <Reveal key={key}>{child}</Reveal>
          ))}
        </TextContainer>
      </Container>
    );
  return <></>;
};

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: 4fr 1fr 4fr;
  gap: 5vw;

  ${Title2} {
    text-align: center;
    @media (min-width: 1024px) and (max-width: 1450px) {
      font-size: 2rem;
    }

    @media (max-width: 900px) {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: left;
  flex: 1;
  grid-column: ${(props) => (props.pos === "left" ? "1/3" : "2/4")};

  p {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme.textDarkSecondary};

    @media (min-width: 1024px) and (max-width: 1450px) {
      font-size: 1.1rem;
    }

    @media (max-width: 900px) {
      font-size: 1.3rem;
    }

    li {
      list-style: disc;
    }

    @media (max-width: 1450px) {
      gap: 30px;
    }

    @media (max-width: 1024px) {
      align-items: center;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  grid-column: ${(props) => (props.pos === "left" ? "3/4" : "1/2")};

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default Text;
