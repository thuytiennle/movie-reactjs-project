import React from 'react';
import * as Styled from './StyledShowTimeItem';

export default function ShowTimeItem(props) {
  const { movie } = props;

  // Render movie show by mapping props.movie and just show timeline that match to day. But API just have date from 2019 then just pick up one (01-01-2019)
  const renderMovieShow = () => {
    if (movie.lstLichChieuTheoPhim && movie.lstLichChieuTheoPhim.length > 0) {
      return movie.lstLichChieuTheoPhim.map((item) => {
        return (
          new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
            new Date('2019-01-01').toLocaleDateString() && (
            <Styled.MovieTimeSelect
              key={item.maLichChieu}
              className="movie-timeSelection"
              to="/cinema"
            >
              {new Date(item.ngayChieuGioChieu).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
            </Styled.MovieTimeSelect>
          )
        );
      });
    }
  };
  return (
    <div className="movie-description mb-4">
      <Styled.MovieInfo
        className="movie-info"
        data-toggle="collapse"
        data-target="#toggleShowTime"
      >
        <div className="movie-img">
          <Styled.MovieImg src={movie.hinhAnh} alt="" />
        </div>
        <div className="movie-content ml-3">
          <Styled.MovieTitle className="movie-title">
            {movie.tenPhim}
          </Styled.MovieTitle>
          <Styled.MovieDuration className="movie-duration">
            109 phút - TIX 7.9 - IMDb 0
          </Styled.MovieDuration>
        </div>
      </Styled.MovieInfo>
      <div className="movie-timeline" id="toggleShowTime">
        <p>2D Digital</p>
        <div className="movie-time">{renderMovieShow()}</div>
      </div>
    </div>
  );
}
