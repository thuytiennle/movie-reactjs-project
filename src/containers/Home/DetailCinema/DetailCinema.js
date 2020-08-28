import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Footer } from '../../../components/Footer';
import { Loader } from '../../../components/LoadingIndicator';
import { Review } from '../../../components/ReviewItem';
import { SimpleTabs } from '../../../components/Tabs';
import { TextTranslation } from '../../Language/TextTranslation';
import CinemaIntro from './CinemaIntro';
import DetailCinemaTab from './DetailCinemaTab';
import {
  actFetchDetailCinemaRequest,
  actAddCinemaComment,
} from './modules/actions';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    backgroundColor: theme.palette.background.dark,
    padding: '60px 0',
  },
}));

export default function DetailCinema() {
  const classes = useStyles();
  // useSelector uses to get state from store
  const detailCinema = useSelector(
    (state) => state.detailCinemaReducer.detailCinema,
  );
  const loadingDetailCinema = useSelector(
    (state) => state.detailCinemaReducer.loadingDetailCinema,
  );
  const listComment = useSelector(
    (state) => state.detailCinemaReducer.listComment,
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
              <div id="cinemaShowTime" className={classes.tabContainer}>
                <SimpleTabs
                  tabs={[
                    {
                      tabName: (
                        <TextTranslation id="components.Navbar.ShowTime" />
                      ),
                      // If renderHTML null then tabContent gets ''
                      tabContent: (
                        <DetailCinemaTab
                          detailCinema={[...detailCinema[0].lstCumRap]}
                          cinemaBranchId={cinemaBranchId}
                          cinemaId={cinemaId}
                        />
                      ),
                    },
                    {
                      tabName: (
                        <TextTranslation id="container.MovieShow.Review" />
                      ),
                      tabContent: (
                        <Review
                          listComment={listComment}
                          onSubmit={(comment) => {
                            dispatch(actAddCinemaComment(comment));
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
    </div>
  );
}
