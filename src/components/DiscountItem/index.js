import React from 'react';
import Swiper from 'react-id-swiper';
import { SwiperItemContainer } from './styledDiscountItem';

export default function DiscountItem() {
  const params = {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000,
    },
    autoHeight: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      870: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <SwiperItemContainer>
      <Swiper {...params}>
        <div className="discount-img">
          <img
            src="https://cms.megagscinemas.vn//media/76018/soda-800x600.png?width=359&height=267"
            alt=" "
          />
        </div>
        <div className="discount-img">
          <img
            src="https://cms.megagscinemas.vn//media/75681/u22-800x600_2020.png?width=359&height=267"
            alt=" "
          />
        </div>
        <div className="discount-img">
          <img
            src="https://cms.megagscinemas.vn//media/75345/hour-800x600.png?width=359&height=267"
            alt=" "
          />
        </div>
        <div className="discount-img">
          <img
            src="https://cms.megagscinemas.vn//media/75337/member-card-c.png?width=359&height=267"
            alt=" "
          />
        </div>
        <div className="discount-img">
          <img
            src="https://cms.megagscinemas.vn//media/76281/refill-bắp_800x600.png?width=359&height=267"
            alt=" "
          />
        </div>
        <div className="discount-img">
          <img
            src="https://cms.megagscinemas.vn//media/76076/share-800x600.png?width=359&height=267"
            alt=" "
          />
        </div>
      </Swiper>
    </SwiperItemContainer>
  );
}
