import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TrailerButton } from '../Button';

const CarouselItemDiv = styled.div`
  position: relative;
  transition: 0.5s;

  &:hover .carousel-videoBtn {
    display: block;
  }
`;

export default function CarouselItem(props) {
  return (
    <CarouselItemDiv className="carousel-swiperItem swiper-slide">
      <Link className="carousel-img" to="/">
        <img
          src="https://s3img.vcdn.vn/123phim/2020/03/vin-dau-nhot-15840272645345.png"
          alt="First slide"
        />
      </Link>
      {/* Button trailer trigger modal */}
      <TrailerButton
        type="button"
        className="carousel-videoBtn"
        onClick={() => props.openModal()}
      />
    </CarouselItemDiv>
  );
}

CarouselItem.propTypes = {
  openModal: PropTypes.func,
};
