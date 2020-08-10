import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalVideo from 'react-modal-video';
import { Paper, makeStyles } from '@material-ui/core';
import { MovieItem } from '../../../components/MovieItem';
import { actMovieModalClose } from './modules/actions';
import { SimpleTabs } from '../../../components/Tabs';
import { Spinner } from '../../../components/LoadingIndicator';
import { CoverflowSwiper } from '../../../components/Swiper';
import { TextTranslation } from '../../Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 'unset',
    padding: '30px 0 50px',
  },
}));

function MovieShow() {
  const classes = useStyles();
  // Get listMovie from store by userSelector
  const listMovie = useSelector((state) => state.listMovieReducer.listMovie);
  const loadingListMovie = useSelector(
    (state) => state.listMovieReducer.loadingListMovie,
  );
  const isOpenModal = useSelector(
    (state) => state.listMovieReducer.isOpenModal,
  );
  const modalMovieURL = useSelector(
    (state) => state.listMovieReducer.modalMovieURL,
  );

  // Declare dispatch
  const dispatch = useDispatch();

  // Get video url from npm install --save get-video-id
  /* eslint-disable global-require */
  const getVideoId = require('get-video-id');
  /* eslint-enable global-require */
  // End of get video url

  // Render Swiper. useCallback prevents the re-render of renderHTML
  const renderHTML = useCallback(() => {
    if (listMovie && listMovie.length > 0) {
      return (
        // Update swiper when component is updated
        <CoverflowSwiper shouldSwiperUpdate>
          {listMovie.map((movie) => {
            return <MovieItem key={movie.maPhim} movie={movie} />;
          })}
        </CoverflowSwiper>
      );
    }
    // circular progress
    if (loadingListMovie) {
      return <Spinner />;
    }
  }, [listMovie, loadingListMovie]);
  // End of render Swiper

  return (
    <Paper id="movie-show" className={classes.wrapper}>
      {/* MOVIE NAVS WITH MOVIE TABS */}
      <SimpleTabs
        tabs={[
          {
            tabName: <TextTranslation id="container.MovieShow.NowShowing" />,
            // If renderHTML null then tabContent gets ''
            tabContent: renderHTML() || '',
          },
          {
            tabName: <TextTranslation id="container.MovieShow.UpComing" />,
            tabContent: renderHTML() || '',
          },
        ]}
      />
      {/* MODAL VIDEO */}
      <ModalVideo
        channel={getVideoId(modalMovieURL).service}
        isOpen={isOpenModal}
        videoId={getVideoId(modalMovieURL).id}
        onClose={() => dispatch(actMovieModalClose())}
      />
    </Paper>
  );
}

export default memo(MovieShow);
