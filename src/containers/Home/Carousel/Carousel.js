import React, { useState } from 'react';
import styled from 'styled-components';
import ModalVideo from 'react-modal-video';
import { CarouselItem } from '../../../components/CarouselItem';
import { CarouselSwiper } from '../../../components/Swiper';

const CarouselWrapper = styled.section`
  /* padding-top: 60px; */
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
`;

export default function Carousel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CarouselWrapper className="carousel">
      <CarouselSwiper>
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
        <CarouselItem openModal={() => setIsOpen(true)} />
      </CarouselSwiper>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="MG-BJBSeV64"
        onClose={() => setIsOpen(false)}
      />
    </CarouselWrapper>
  );
}
