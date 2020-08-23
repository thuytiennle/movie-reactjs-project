import { makeStyles, Paper, Typography, Container } from '@material-ui/core';
import React, { memo } from 'react';
import { TextTranslation } from '../../Language/TextTranslation';
import { DefaultSwiper } from '../../../components/Swiper';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 'unset',
    backgroundColor: theme.palette.background.dark,
    padding: '50px 0',
  },
  title: {
    paddingBottom: 30,
    textAlign: 'center',
  },
}));

const discountList = [
  'https://cms.megagscinemas.vn//media/76018/soda-800x600.png?width=359&height=267',
  'https://cms.megagscinemas.vn//media/75681/u22-800x600_2020.png?width=359&height=267',
  'https://cms.megagscinemas.vn//media/75345/hour-800x600.png?width=359&height=267',
  'https://cms.megagscinemas.vn//media/75337/member-card-c.png?width=359&height=267',
  'https://cms.megagscinemas.vn//media/76281/refill-bắp_800x600.png?width=359&height=267',
  'https://cms.megagscinemas.vn//media/76076/share-800x600.png?width=359&height=267',
];

const settings = {
  pagination: {
    el: '.swiper-pagination.customized-swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  autoHeight: true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
};

function Discount() {
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper} id="discounts">
      <Container>
        <Typography className={classes.title} variant="h4" color="secondary">
          <TextTranslation id="container.Cinema.Discounts" />
        </Typography>
        <DefaultSwiper settings={settings}>
          {discountList.map((item, index) => (
            <img
              key={`discount-${index}`}
              className="swiper-slide"
              src={item}
              alt=""
            />
          ))}
        </DefaultSwiper>
      </Container>
    </Paper>
  );
}

export default memo(Discount);
