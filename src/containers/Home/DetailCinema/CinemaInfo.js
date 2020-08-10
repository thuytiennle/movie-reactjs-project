import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  link: {
    margin: '15px 0',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  address: {
    fontSize: 13,
    display: 'block',
  },
  title: {
    fontSize: 15,
  },
}));

export default function CinemaInfo(props) {
  const classes = useStyles();
  const { cinema } = props;

  return (
    <Link
      className={classes.link}
      to={`/detail-cinema/${cinema.cinemaId}/${cinema.maCumRap}`}
    >
      <div className={classes.root}>
        <img className={classes.img} src={cinema.hinhAnh} alt="" />
        <div>
          <Typography
            className={classes.title}
            variant="subtitle1"
            color="secondary"
          >
            {cinema.tenCumRap}
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.address}
          >
            {cinema.diaChi}
          </Typography>
        </div>
      </div>
    </Link>
  );
}

CinemaInfo.propTypes = {
  cinema: PropTypes.any,
};
