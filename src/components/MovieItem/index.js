import React from 'react';
import { useDispatch } from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import * as Styled from './StyledMovieItem';
import { actMovieModalOpen } from '../../containers/Home/MovieShow/modules/actions';

export default function MovieItem(props) {
  const { movie } = props;
  // Declare dispatch
  const dispatch = useDispatch();

  return (
    <Styled.MovieSwiper>
      <Styled.SwiperItem className="showTime-swiperItem">
        <Styled.MovieImgContainer>
          <Styled.MovieImg src={movie.hinhAnh} alt="" />
          <Styled.MovieContent className="showTime-content">
            <h5 className="showTime-title">{movie.tenPhim}</h5>
            <p className="showTime-text mb-0">2D</p>
          </Styled.MovieContent>
        </Styled.MovieImgContainer>
        <Styled.MovieContainer className="showTime-container">
          <div className="showTimeBtn">
            <Styled.MovieModalBtn
              type="button"
              className="showTime-detailBtn"
              onClick={() => dispatch(actMovieModalOpen(movie.trailer))}
            >
              <PlayArrowIcon />
            </Styled.MovieModalBtn>
            <Styled.MovieBookingBtn
              type="button"
              to={`/detail-movie/${movie.maPhim}`}
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
