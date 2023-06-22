import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {getTime} from "../../../utils/time";
import Reveal from "../../../animations/Reveal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Loader from "../../../animations/Loader";
import accueilText from "../../../assets/text/accueil";
import Video from "./Video";

const Header = ({scroll, video}) => {
    const [countdown, setCountdown] = useState({
        days: "--",
        hours: "--",
        minutes: "--",
        seconds: "--",
    });

    useEffect(() => {
        const end = new Date(2023, 8, 5, 18, 0, 0);
        const interval = setInterval(() => {
            setCountdown(getTime(end - new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Video video={video}/>
            <Container>
                {countdown.days !== "--" ? (
                    <>
                        <Title>{accueilText.header.title}</Title>

                        <Grid>
                            {Object.values(countdown).map((value, index) => (
                                <Reveal key={index} delay={`${index * 0.1}s`}>
                                    <Countdown>{value}</Countdown>
                                </Reveal>
                            ))}
                            {accueilText.header.units.map((unit, index) => (
                                <Reveal key={index} delay={`${index * 0.1}s`}>
                                    <CountdownUnit>{unit}</CountdownUnit>
                                </Reveal>
                            ))}
                        </Grid>
                        <PrimaryButton onClick={scroll}>
                            {accueilText.header.button} <FontAwesomeIcon icon={faArrowDown}/>
                        </PrimaryButton>
                    </>
                ) : (
                    <Loader/>
                )}
            </Container>
        </>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5),
  rgba(0, 0, 0, 0.1),
  rgba(0, 0, 0, 0.5));
  gap: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  gap: 10px 50px;
  font-weight: 700;
  color: ${(props) => props.theme.textLight};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    gap: 10px 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.7rem;
  font-weight: 700;
  color: ${(props) => props.theme.textLight};
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 750px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Countdown = styled.span`
  font-size: 3.7rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 750px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const CountdownUnit = styled.span`
  font-size: 2.3rem;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export default Header;
