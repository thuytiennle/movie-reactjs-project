import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../components/LoadingIndicator';
import { actMovieModalClose } from '../MovieShow/modules/actions';
import CinemaShowTimeTab from './CinemaShowTimeTab';
import { actFetchDetailMovieRequest } from './modules/actions';
import MovieIntro from './MovieIntro';
import { Footer } from '../../../components/Footer';

export default function DetailMovie() {
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
            <div id="movieShowTime">
              <CinemaShowTimeTab detailMovie={detailMovie} />
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
