import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  background: url(./img/neon-bg.jpg);
  padding-top: 72px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 60px;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #66fcf1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: block;
    color: #fff;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: #66fcf1;
  }

  .swiper-button-prev:focus,
  .swiper-button-next:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    padding-top: 58px;

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 10px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;
