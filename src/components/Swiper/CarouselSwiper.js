import React from 'react';
import PropTypes from 'prop-types';
import DefaultSwiper from './DefaultSwiper';

export default function CarouselSwiper(props) {
  const settings = {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination.customized-swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <DefaultSwiper settings={settings} {...props}>
      {props.children}
    </DefaultSwiper>
  );
}

CarouselSwiper.propTypes = {
  children: PropTypes.node.isRequired,
};
