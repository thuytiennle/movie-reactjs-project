import React from 'react';
import * as Styled from './StyledShowTimeItem';

export default function ShowTimeItem() {
  return (
    <div className="movie-description mb-4">
      <Styled.MovieInfo
        className="movie-info"
        data-toggle="collapse"
        data-target="#toggleShowTime"
      >
        <div className="movie-img">
          <Styled.MovieImg
            src="https://s3img.vcdn.vn/mobile/123phim/2020/02/nang-3-loi-hua-cua-cha-c16-15827063492648_60x60.jpg"
            alt=""
          />
        </div>
        <div className="movie-content ml-3">
          <Styled.MovieTitle className="movie-title">
            <Styled.MovieAgeLimit className="movie-ageLimit">
              C16
            </Styled.MovieAgeLimit>
            Lời hứa của cha
          </Styled.MovieTitle>
          <Styled.MovieDuration className="movie-duration">
            109 phút - TIX 7.9 - IMDb 0
          </Styled.MovieDuration>
        </div>
      </Styled.MovieInfo>
      <div className="movie-timeline" id="toggleShowTime">
        <p>2D Digital</p>
        <div className="movie-time">
          <Styled.MovieTimeSelect className="movie-timeSelection" to="/cinema">
            <Styled.MovieStartTime className="movie-timeStart">
              19:50
            </Styled.MovieStartTime>
            ~ 21:39
          </Styled.MovieTimeSelect>
          <Styled.MovieTimeSelect className="movie-timeSelection" to="/cinema">
            <Styled.MovieStartTime className="movie-timeStart">
              21:50
            </Styled.MovieStartTime>
            ~ 23:39
          </Styled.MovieTimeSelect>
        </div>
      </div>
    </div>
  );
}
