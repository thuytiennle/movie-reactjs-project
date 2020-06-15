import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import * as Styled from './StyledMovieItem';

export default function MovieItem(props) {
  const { movie } = props;

  return (
    <Styled.MovieSwiper>
      <Styled.SwiperItem className="showTime-swiperItem">
        <Styled.MovieImgContainer>
          <Styled.MovieImg src={movie.hinhAnh} alt="" />
          <Styled.MovieContent className="showTime-content">
            <h5 className="showTime-title">Card title</h5>
            <p className="showTime-text mb-0">2D</p>
          </Styled.MovieContent>
        </Styled.MovieImgContainer>
        <Styled.MovieContainer className="showTime-container">
          <div className="showTimeBtn">
            <Styled.MovieModalBtn type="button" className="showTime-detailBtn">
              <PlayArrowIcon />
            </Styled.MovieModalBtn>
            <Styled.MovieBookingBtn
              type="button"
              to="/"
              className="showTime-bookingBtn"
            >
              Mua vé
            </Styled.MovieBookingBtn>
          </div>
        </Styled.MovieContainer>
      </Styled.SwiperItem>
    </Styled.MovieSwiper>
  );
}
