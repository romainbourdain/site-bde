import React from "react";
import styled from "styled-components";
import Title1 from "../../../components/Titles/Title1";
import accueilText from "../../../assets/text/accueil";
import partenaires from "../../../data/partenaires";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Modal from "../../../components/Modal";

const Partenaires = () => {
  const swiperSettings = {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: { delay: 5000, disableOnInteraction: true },
    navigation: true,
    modules: [Navigation, Autoplay],
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1024: {
        spaceBetween: 100,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      600: {
        spaceBetween: 100,
      },
    },
  };
  return (
    <Container>
      <Title1>{accueilText.partenaires.title}</Title1>
      <StyledSwiper {...swiperSettings}>
        {partenaires.map((partenaire) => (
          <SwiperSlide>
            <Modal
              trigger={<Image src={partenaire.img} alt={partenaire.name} />}
              title={partenaire.name}
            >
              {partenaire.description}
            </Modal>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 10vw;
  display: flex;
  gap: 60px;
  flex-direction: column;

  @media (max-width: 1024px) {
    gap: 30px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 300px;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Partenaires;
