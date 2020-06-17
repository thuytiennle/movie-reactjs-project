import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { useDispatch, useSelector } from 'react-redux';
import ModalVideo from 'react-modal-video';
import MovieItem from '../../../components/MovieItem';
import {
  actFetchListMovieRequest,
  actMovieModalClose,
} from './modules/actions';
import * as Styled from './StyledMovieShow';

// Set props for Swiper
const params = {
  effect: 'coverflow',
  loop: true,
  speed: 1000,
  // loopedSlides: 3, // according to the codepen
  // mousewheel: {
  //   releaseOnEdges: true,
  // },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 60,
    modifier: 3,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 3000,
  // },
  spaceBetween: 30,
  // rebuildOnUpdate: true,
};
// End of Swiper props

export default function MovieShow() {
  // Get listMovie from store by userSelector
  // const listMovie = useSelector((state) => state.listMovieReducer.listMovie);
  const { listMovie, isOpenModal, modalMovieURL } = useSelector((state) => ({
    listMovie: state.listMovieReducer.listMovie,
    isOpenModal: state.listMovieReducer.isOpenModal,
    modalMovieURL: state.listMovieReducer.modalMovieURL,
  }));

  // Declare dispatch
  const dispatch = useDispatch();

  // Get video url from npm install --save get-video-id
  /* eslint-disable global-require */
  const getVideoId = require('get-video-id');
  /* eslint-enable global-require */
  // End of get video url

  // DidMount
  useEffect(() => {
    // Dispatch action request to init saga listMovie API
    dispatch(actFetchListMovieRequest());
  }, [dispatch]);

  // Render Swiper
  const renderHTML = (list) => {
    if (list && list.length > 0) {
      return (
        <Swiper {...params}>
          {list.map((movie) => {
            return (
              <div
                key={movie.maPhim}
                style={{ width: '250px', height: '350px' }}
              >
                <MovieItem movie={movie} />
              </div>
            );
          })}
        </Swiper>
      );
    }
  };
  // End of render Swiper

  return (
    <Styled.MovieShow>
      {/* MOVIE NAVS WITH MOVIE SLIDES */}
      <Styled.MovieNavTab
        className="nav nav-tabs"
        id="showTimeTab"
        role="tablist"
      >
        <li className="nav-item">
          <Styled.MovieNavLink
            className="nav-link active"
            id="nowShowing-tab"
            data-toggle="tab"
            href="#nowShowing"
            role="tab"
            aria-selected="true"
          >
            Phim đang chiếu
          </Styled.MovieNavLink>
        </li>
        <li className="nav-item">
          <Styled.MovieNavLink
            className="nav-link"
            id="upComing-tab"
            data-toggle="tab"
            href="#upComing"
            role="tab"
            aria-selected="false"
          >
            Phim sắp chiếu
          </Styled.MovieNavLink>
        </li>
      </Styled.MovieNavTab>
      <div className="tab-content" id="showTimeTabContent">
        <div
          className="tab-pane fade show active"
          id="nowShowing"
          role="tabpanel"
        >
          {renderHTML(listMovie)}
        </div>
        <div className="tab-pane fade" id="upComing" role="tabpanel">
          {renderHTML(listMovie)}
        </div>
      </div>
      {/* MODAL VIDEO */}

      {/* When click play button from MovieItem which sends movieurl, and toggle isOpenModal in store. Get is isOpenModal and movieurl to Movie Show get movie id from movieurl */}
      <ModalVideo
        channel={getVideoId(modalMovieURL).service}
        isOpen={isOpenModal}
        videoId={getVideoId(modalMovieURL).id}
        onClose={() => dispatch(actMovieModalClose())}
      />
    </Styled.MovieShow>
  );
}
