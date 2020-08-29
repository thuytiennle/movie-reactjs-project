import { PropTypes } from 'prop-types';
import React from 'react';
import CustomRouterLink from '../../../components/CustomLink/CustomRouterLink';

export default function MovieShowTime(props) {
  const { movie, date } = props;
  // Render movie show by mapping props.movie and just show timeline that match to day. But API just have date from 2019 then just pick up one (01-01-2019)
  const renderMovieShow = () => {
    if (movie.lstLichChieuTheoPhim && movie.lstLichChieuTheoPhim.length > 0) {
      const timeList = movie.lstLichChieuTheoPhim.filter(
        (item) =>
          new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
          new Date(date).toLocaleDateString(),
      );
      // Sort time list
      const sortedTimeList = timeList.sort((a, b) => {
        const aDate = new Date(a.ngayChieuGioChieu);
        const bDate = new Date(b.ngayChieuGioChieu);
        return aDate.getTime() - bDate.getTime();
      });

      return sortedTimeList.map((item) => {
        return (
          <CustomRouterLink
            key={item.maLichChieu}
            to={`/cinema-booking-room/${item.maLichChieu}`}
          >
            {new Date(item.ngayChieuGioChieu).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}
          </CustomRouterLink>
        );
      });
    }
  };
  return <>{renderMovieShow()}</>;
}

MovieShowTime.propTypes = {
  movie: PropTypes.any,
  date: PropTypes.any,
};
