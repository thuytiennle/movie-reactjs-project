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
      return cinema.lichChieuPhim.map((item) => {
        return (
          new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
            new Date(date).toLocaleDateString() && (
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
          )
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

  const cinemaInfo = {
    hinhAnh: '../img/cinema-img.jpg',
    title: cinema.tenCumRap,
  };

  return (
    <SimpleAccordion
      summary={<MovieInfo movie={cinemaInfo} />}
      details={<CinemaShowTime cinema={cinema} date={date} />}
    />
  );
}

ShowTimeItem.propTypes = {
  cinema: PropTypes.any,
  date: PropTypes.any,
};
