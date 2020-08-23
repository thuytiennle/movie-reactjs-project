import React, { useState } from 'react';
import styled from 'styled-components';
import ModalVideo from 'react-modal-video';
import { CarouselItem } from '../../../components/CarouselItem';
import { CarouselSwiper } from '../../../components/Swiper';

const CarouselWrapper = styled.section`
  /* padding-top: 60px; */
  display: block;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

const carouselImgList = [
  {
    img:
      'https://s3img.vcdn.vn/123phim/2020/08/dinh-thu-oan-khuat-15967340117741.png',
    trailer: 'https://www.youtube.com/watch?v=50aEACmN5iI',
  },
  {
    img:
      'https://s3img.vcdn.vn/123phim/2020/08/hon-ma-van-si-15967680643765.jpg',
    trailer: 'https://www.youtube.com/watch?v=CtmcwhzzjXQ',
  },
  {
    img:
      'https://s3img.vcdn.vn/123phim/2020/08/bi-mat-thien-duong-15972163589211.jpg',
    trailer: 'https://www.youtube.com/watch?v=5IMIdd3iq6A',
  },
  {
    img: 'https://s3img.vcdn.vn/123phim/2020/08/ca-sau-15972253022491.png',
    trailer: 'https://www.youtube.com/watch?v=xYwC4oxldL0',
  },
  {
    img:
      'https://s3img.vcdn.vn/123phim/2020/07/du-lich-chet-choc-15961360123636.jpg',
    trailer: 'https://www.youtube.com/watch?v=o3Q9LETlHqk',
  },
];

export default function Carousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTrailer, setModalTrailer] = useState('');
  // Get video url from npm install --save get-video-id
  /* eslint-disable global-require */
  const getVideoId = require('get-video-id');
  /* eslint-enable global-require */
  // End of get video url

  return (
    <CarouselWrapper className="carousel">
      <CarouselSwiper>
        {carouselImgList.map((item, index) => (
          <CarouselItem
            key={`carouselImg-${index}`}
            carousel={item}
            openModal={(trailer) => {
              setIsOpen(true);
              setModalTrailer(trailer);
            }}
          />
        ))}
      </CarouselSwiper>
      <ModalVideo
        channel={getVideoId(modalTrailer).service}
        isOpen={isOpen}
        videoId={getVideoId(modalTrailer).id}
        onClose={() => setIsOpen(false)}
      />
    </CarouselWrapper>
  );
}
