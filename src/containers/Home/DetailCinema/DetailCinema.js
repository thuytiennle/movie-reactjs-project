import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../components/LoadingIndicator';
import CinemaIntro from './CinemaIntro';
import DetailCinemaTab from './DetailCinemaTab';
import { actFetchDetailCinemaRequest } from './modules/actions';
import { Footer } from '../../../components/Footer';

export default function DetailCinema() {
  // useSelector uses to get state from store
  const detailCinema = useSelector(
    (state) => state.detailCinemaReducer.detailCinema,
  );
  const loadingDetailCinema = useSelector(
    (state) => state.detailCinemaReducer.loadingDetailCinema,
  );

  // Declare dispatch func
  const dispatch = useDispatch();

  const { cinemaId, cinemaBranchId } = useParams();
  // Did mount
  useEffect(() => {
    // Dispatch actFetchDetailMovieRequest
    dispatch(actFetchDetailCinemaRequest(cinemaId));
  }, [dispatch, cinemaId]);

  // Function find index
  const findIndex = (mang, key, id) => {
    return mang.findIndex((item) => item[key] === id);
  };

  const renderCinemaIntro = () => {
    const index = findIndex(
      detailCinema[0].lstCumRap,
      'maCumRap',
      cinemaBranchId,
    );
    if (detailCinema[0].lstCumRap[index]) {
      const cinema = detailCinema[0].lstCumRap[index];
      return (
        <CinemaIntro
          cinema={{
            hinhAnh:
              'https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791434974170.jpg',
            tenCumRap: cinema.tenCumRap,
            diaChi: cinema.diaChi,
          }}
        />
      );
    }
  };
  // Display Loader while loading data
  if (loadingDetailCinema) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      {/* Check in case detailMovie.data is null then can not read props of detailMovie  */}
      {detailCinema[0] &&
        detailCinema[0].lstCumRap &&
        detailCinema[0].lstCumRap.length > 0 && (
          <>
            <Box marginTop="68px">
              {renderCinemaIntro()}
              <div id="cinemaShowTime">
                <DetailCinemaTab
                  detailCinema={[...detailCinema[0].lstCumRap]}
                  cinemaBranchId={cinemaBranchId}
                  cinemaId={cinemaId}
                />
              </div>
              <Footer />
            </Box>
          </>
        )}
    </div>
  );
}
