import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { TrailerButton } from '../Button';

const CarouselItemDiv = styled.div`
  position: relative;
  transition: 0.5s;
  height: 650px;
  &:hover .carousel-videoBtn {
    display: block;
  }
  @media screen and (max-width: 992px) {
    height: 550px;
  }
  @media screen and (max-width: 768px) {
    height: 450px;
  }
`;

export default function CarouselItem(props) {
  const { carousel, openModal } = props;
  return (
    <CarouselItemDiv className="carousel-swiperItem swiper-slide">
      {/* <Link className="carousel-img" to="/"> */}
      <img src={carousel.img} alt="First slide" />
      {/* </Link> */}
      {/* Button trailer trigger modal */}
      <TrailerButton
        type="button"
        className="carousel-videoBtn"
        onClick={() => openModal(carousel.trailer)}
      />
    </CarouselItemDiv>
  );
}

CarouselItem.propTypes = {
  openModal: PropTypes.func,
  carousel: PropTypes.object,
};
