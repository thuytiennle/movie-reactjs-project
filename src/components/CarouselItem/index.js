import React from 'react';
import { Link } from 'react-router-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import * as Styled from './styledCarouselItem';

export default function CarouselItem(props) {
  const openModal = () => {
    props.openModal();
  };

  return (
    <Styled.CarouselSlide className="carousel-swiper swiper-slide">
      <Styled.CarouselItem className="carousel-swiperItem">
        <Link className="carousel-img" to="/">
          <Styled.CarouselImg
            src="https://s3img.vcdn.vn/123phim/2020/03/vin-dau-nhot-15840272645345.png"
            alt="First slide"
          />
        </Link>
        {/* Button trailer trigger modal */}
        <Styled.CarouselBtn
          type="button"
          className="carousel-videoBtn"
          onClick={openModal}
        >
          <PlayArrowIcon />
        </Styled.CarouselBtn>
      </Styled.CarouselItem>
    </Styled.CarouselSlide>
  );
}
