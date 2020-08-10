import React from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';

const DefaultSwiper = ({ settings, children, ...props }) => {
  const params = {
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.customized-swiper-button-next',
      prevEl: '.swiper-button-prev.customized-swiper-button-prev',
    },
    ...settings,
  };

  return (
    <Swiper {...params} {...props}>
      {children}
    </Swiper>
  );
};

DefaultSwiper.propTypes = {
  settings: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default DefaultSwiper;
