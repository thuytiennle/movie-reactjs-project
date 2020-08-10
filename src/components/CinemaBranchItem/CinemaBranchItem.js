import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { TextTranslation } from '../../containers/Language/TextTranslation';

const CinemaDetailLink = styled(Link)`
  color: red;

  &:hover {
    text-decoration: none;
    color: red;
    font-weight: 700;
  }
`;

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px 0',
  },
  address: {
    fontSize: 13,
    display: 'block',
  },
}));

export default function CinemaBrachItem(props) {
  const classes = useStyles();
  const { cineBran, cinema } = props;
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">{cineBran.tenCumRap}</Typography>
      <Typography
        variant="body1"
        color="textPrimary"
        className={classes.address}
      >
        {cineBran.diaChi}
      </Typography>
      <CinemaDetailLink
        // Get API lstCumRap of cinema based on cinemaId(maHeThongRap). cinemaBrachId uses for showing first at table on DetailCinema Page
        to={`/detail-cinema/${cinema}/${cineBran.maCumRap}`}
      >
        [<TextTranslation id="container.Cinema.detailButton" />]
      </CinemaDetailLink>
    </div>
  );
}

CinemaBrachItem.propTypes = {
  cinema: PropTypes.any,
  cineBran: PropTypes.any,
};
