import { PropTypes } from 'prop-types';
import React from 'react';
import MovieInfo from './MovieInfo';
import MovieShowTime from './MovieShowTime';
import { SimpleAccordion } from '../../../components/Accordion';

export default function ShowTimeItem(props) {
  const { movie, date } = props;
  // Check if lstLichChieu have the date= 01/01/2019 then show the showTime List if not hide it
  const isDate = movie.lstLichChieuTheoPhim.some(
    (item) =>
      new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
      new Date(date).toLocaleDateString(),
  );

  const movieInfo = { hinhAnh: movie.hinhAnh, title: movie.tenPhim };
  return (
    <>
      {isDate && (
        <SimpleAccordion
          summary={<MovieInfo movie={movieInfo} />}
          details={<MovieShowTime movie={movie} date={date} />}
        />
      )}
    </>
  );
}

ShowTimeItem.propTypes = {
  movie: PropTypes.any,
  date: PropTypes.any,
};
