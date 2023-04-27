import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "../../assets/img/home/background.png";
import { getTime } from "../../utils/time";
import Reveal from "../../animations/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Buttons/Button";
import Loader from "../../animations/Loader";

const Header = ({ scroll }) => {
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
    <Container>
      {countdown.days !== "--" ? (
        <>
          <Title>Début de l'intégration dans</Title>

          <Grid>
            <Reveal>
              <Countdown>{countdown?.days}</Countdown>
            </Reveal>
            <Reveal delay=".1s">
              <Countdown>{countdown?.hours}</Countdown>
            </Reveal>
            <Reveal delay=".2s">
              <Countdown>{countdown?.minutes}</Countdown>
            </Reveal>
            <Reveal delay=".3s">
              <Countdown>{countdown?.seconds}</Countdown>
            </Reveal>
            <Reveal>
              <CountdownUnit>Jour{countdown?.days > 1 && "s"}</CountdownUnit>
            </Reveal>
            <Reveal delay=".1s">
              <CountdownUnit>Heure{countdown?.hours > 1 && "s"}</CountdownUnit>
            </Reveal>
            <Reveal delay=".2s">
              <CountdownUnit>
                Minute{countdown?.minutes > 1 && "s"}
              </CountdownUnit>
            </Reveal>
            <Reveal delay=".3s">
              <CountdownUnit>
                Seconde{countdown?.seconds > 1 && "s"}
              </CountdownUnit>
            </Reveal>
          </Grid>
          <Button onClick={scroll}>
            Découvrir le BDE <FontAwesomeIcon icon={faArrowDown} />
          </Button>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.5)
    ),
    url(${background}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  gap: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 180px);
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  gap: 10px 60px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 3.7rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Countdown = styled.span`
  font-size: 3.7rem;
`;

const CountdownUnit = styled.span`
  font-size: 2.3rem;
`;

export default Header;
