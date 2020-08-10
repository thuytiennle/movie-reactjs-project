import React from 'react';
import { PropTypes } from 'prop-types';
import DefaultSwiper from './DefaultSwiper';

export default function CoverflowSwiper(props) {
  const { options } = props;
  const settings = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 60,
      modifier: 3,
      slideShadows: true,
    },
    spaceBetween: 30,
    // If component changes (theme changes) then swiper can update
    rebuildOnUpdate: true,
    ...options,
  };
  return (
    <DefaultSwiper settings={settings} {...props}>
      {props.children}
    </DefaultSwiper>
  );
}

CoverflowSwiper.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.any,
};
