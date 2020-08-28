import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../components/LoadingIndicator';
import { actMovieModalClose } from '../MovieShow/modules/actions';
import CinemaShowTimeTab from './CinemaShowTimeTab';
import { actFetchDetailMovieRequest, actAddComment } from './modules/actions';
import MovieIntro from './MovieIntro';
import { Footer } from '../../../components/Footer';
import { SimpleTabs } from '../../../components/Tabs';
import { TextTranslation } from '../../Language/TextTranslation';
import { Review } from '../../../components/ReviewItem';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    backgroundColor: theme.palette.background.dark,
    padding: '60px 0',
  },
}));

export default function DetailMovie() {
  const classes = useStyles();
  // useSelector uses to get state from store
  const detailMovie = useSelector(
    (state) => state.detailMovieReducer.detailMovie,
  );
  const loadingDetailMovie = useSelector(
    (state) => state.detailMovieReducer.loadingDetailMovie,
  );
  const isOpenModal = useSelector(
    (state) => state.listMovieReducer.isOpenModal,
  );
  const modalMovieURL = useSelector(
    (state) => state.listMovieReducer.modalMovieURL,
  );
  const listComment = useSelector(
    (state) => state.detailMovieReducer.listComment,
  );
  // Declare dispatch func
  const dispatch = useDispatch();
  // Call match.params of router by hook useParams
  const { id } = useParams();

  // Get video url from npm install --save get-video-id
  /* eslint-disable global-require */
  const getVideoId = require('get-video-id');
  /* eslint-enable global-require */
  // End of get video url

  // Did mount
  useEffect(() => {
    // Dispatch actFetchDetailMovieRequest
    dispatch(actFetchDetailMovieRequest(id));
  }, [dispatch, id]);

  // Display Loader while loading data
  if (loadingDetailMovie) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      {/* Check in case detailMovie.data is null then can not read props of detailMovie  */}
      {detailMovie && (
        <>
          <Box marginTop="68px">
            <MovieIntro
              movie={{
                hinhAnh: detailMovie.hinhAnh,
                tenPhim: detailMovie.tenPhim,
                moTa: detailMovie.moTa,
                trailer: detailMovie.trailer,
              }}
            />
            <div id="movieShowTime" className={classes.tabContainer}>
              <SimpleTabs
                tabs={[
                  {
                    tabName: (
                      <TextTranslation id="components.Navbar.ShowTime" />
                    ),
                    // If renderHTML null then tabContent gets ''
                    tabContent: <CinemaShowTimeTab detailMovie={detailMovie} />,
                  },
                  {
                    tabName: (
                      <TextTranslation id="container.MovieShow.Review" />
                    ),
                    tabContent: (
                      <Review
                        listComment={listComment}
                        onSubmit={(comment) => {
                          dispatch(actAddComment(comment));
                        }}
                      />
                    ),
                  },
                ]}
              />
            </div>
            <Footer />
          </Box>
        </>
      )}
      {/* MODAL TRAILER VIDEO */}
      <ModalVideo
        channel={getVideoId(modalMovieURL).service}
        isOpen={isOpenModal}
        videoId={getVideoId(modalMovieURL).id}
        onClose={() => dispatch(actMovieModalClose())}
      />
    </div>
  );
}
