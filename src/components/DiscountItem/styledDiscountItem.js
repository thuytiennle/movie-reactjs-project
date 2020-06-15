import styled from 'styled-components';

export const SwiperItemContainer = styled.div`
  .swiper-container {
    width: 85%;
    height: 100%;
    padding: 40px 0;
  }

  .swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  /* Customize swiper arrow, bullets */
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

  @media screen and (max-width: 576px) {
    .swiper-container {
      width: 100%;
    }
  }
`;

export const SwiperImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
