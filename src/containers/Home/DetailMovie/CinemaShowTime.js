import { PropTypes } from 'prop-types';
import React from 'react';
import { SimpleAccordion } from '../../../components/Accordion';
import MovieInfo from '../Cinema/MovieInfo';
import CustomRouterLink from '../../../components/CustomLink/CustomRouterLink';

function CinemaShowTime(props) {
  const { cinema, date } = props;
  // Render movie show by mapping props.movie and just show timeline that match to day. But API just have date from 2019 then just pick up one (01-01-2019)
  const renderMovieShow = () => {
    if (cinema.lichChieuPhim && cinema.lichChieuPhim.length > 0) {
      const timeList = cinema.lichChieuPhim.filter(
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

CinemaShowTime.propTypes = {
  cinema: PropTypes.any,
  date: PropTypes.any,
};

export default function ShowTimeItem(props) {
  const { cinema, date } = props;
  // Check if lstLichChieu have the date= 01/01/2019 then show the showTime List if not hide it
  const isDate = cinema.lichChieuPhim.some(
    (item) =>
      new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
      new Date(date).toLocaleDateString(),
  );

  const cinemaInfo = {
    hinhAnh: '../img/cinema-img.jpg',
    title: cinema.tenCumRap,
  };

  return (
    <>
      {isDate && (
        <SimpleAccordion
          summary={<MovieInfo movie={cinemaInfo} />}
          details={<CinemaShowTime cinema={cinema} date={date} />}
        />
      )}
    </>
  );
}

ShowTimeItem.propTypes = {
  cinema: PropTypes.any,
  date: PropTypes.any,
};
