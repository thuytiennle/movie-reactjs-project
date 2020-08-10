import { PropTypes } from 'prop-types';
import React from 'react';
import MovieInfo from './MovieInfo';
import MovieShowTime from './MovieShowTime';
import { SimpleAccordion } from '../../../components/Accordion';

export default function ShowTimeItem(props) {
  const { movie, date } = props;

  const movieInfo = { hinhAnh: movie.hinhAnh, title: movie.tenPhim };
  return (
    <SimpleAccordion
      summary={<MovieInfo movie={movieInfo} />}
      details={<MovieShowTime movie={movie} date={date} />}
    />
  );
}

ShowTimeItem.propTypes = {
  movie: PropTypes.any,
  date: PropTypes.any,
};
