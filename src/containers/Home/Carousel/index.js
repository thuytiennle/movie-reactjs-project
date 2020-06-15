import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Swiper from 'react-id-swiper';
import CarouselItem from '../../../components/CarouselItem';
import * as Styled from './StyledCarousel';

export default function Carousel() {
  const params = {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.CarouselWrapper className="carousel">
      <Swiper {...params}>
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
      </Swiper>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="MG-BJBSeV64"
        onClose={() => setIsOpen(false)}
      />
    </Styled.CarouselWrapper>
  );
}
