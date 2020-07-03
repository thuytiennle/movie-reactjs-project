import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDetailMovieRequest } from './modules/actions';
import LoadingIndicator from '../../../components/LoadingIndicator';

export default function DetailMovie(props) {
  // useSelector uses to get state from store
  const detailMovie = useSelector(
    (state) => state.detailMovieReducer.detailMovie,
  );
  const loadingDetailMovie = useSelector(
    (state) => state.detailMovieReducer.loadingDetailMovie,
  );

  // Set State
  const [state, setState] = useState({
    cinemaSelected: 0,
    dateSelected: 0,
  });

  // Declare dispatch func
  const dispatch = useDispatch();

  // Did mount
  useEffect(() => {
    const { id } = props.match.params;
    // Dispatch actFetchDetailMovieRequest
    dispatch(actFetchDetailMovieRequest(id));
  }, [dispatch, props.match.params]);

  // RenderHTLM func
  const renderCinemaTab = (list) => {
    if (list && list.length > 0) {
      const lstCinema = list.map((item) => {
        return item.thongTinRap.tenHeThongRap;
      });
      // Filter all date on array
      const uniqueCinemaSet = new Set(lstCinema);
      const cinemaArray = [...uniqueCinemaSet];
      return cinemaArray.map((item) => {
        return (
          <li
            key={`${item}-detail-movie-tab`}
            className={`${item}-tab`}
            onClick={() => {
              setState({
                ...state,
                cinemaSelected: item,
              });
            }}
          >
            {item}
          </li>
        );
      });
    }
  };

  const renderCinemaTabContent = (list) => {
    if (list && list.length > 0) {
      const lstCinema = list.map((item) => {
        return item.thongTinRap.tenHeThongRap;
      });
      // Filter all date on array
      const uniqueCinemaSet = new Set(lstCinema);
      const cinemaArray = [...uniqueCinemaSet];
      // Filter all date based on cinema
      const selectedCinema =
        state.cinemaSelected === 0 ? cinemaArray[0] : state.cinemaSelected;
      const lstCinemaMovieShow = list.filter((item) => {
        return item.thongTinRap.tenHeThongRap === selectedCinema;
      });
      const dateArr = lstCinemaMovieShow.map((item) => {
        return new Date(item.ngayChieuGioChieu).toLocaleDateString();
      });
      // Filter all date on array
      const uniqueDateSet = new Set(dateArr);
      const dateArray = [...uniqueDateSet];

      return (
        <ul>
          {dateArray.map((item, index) => {
            const date = new Date(item);
            return (
              <li
                key={`detail-movie-date-tab-${index}`}
                className={`detail-movie-date-tab-${index}`}
                // onClick={
                //   setState({
                //     ...state,
                //     date
                //   })
                // }
              >
                <p className="py-1 m-0 border-bottom">
                  {`0${date.getDate()}`.slice(-2)}
                </p>
                <p className="py-1 m-0">
                  {`0${date.getMonth() + 1}`.slice(-2)}
                </p>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  // Display Loader while loading data
  if (loadingDetailMovie) {
    return <LoadingIndicator />;
  }

  return (
    <div className="container">
      {/* Check in case detailMovie.data is null then can not read props of detailMovie  */}
      {detailMovie.data && (
        <>
          {' '}
          <h3>Detail Movie</h3>
          <div className="row">
            <div className="col-sm-6">
              <img src={detailMovie.data.hinhAnh} alt="" />
            </div>
            <div className="col-sm-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Ten Phim</td>
                    <td>{detailMovie.data.tenPhim}</td>
                  </tr>
                  <tr>
                    <td>Mo ta</td>
                    <td>{detailMovie.data.moTa}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <ul className="col-sm-4 detail-movie-cinema-tab">
              {renderCinemaTab(detailMovie.data.lichChieu)}
            </ul>
            <div className="col-sm-8 detail-movie-cinema-tabContent">
              {renderCinemaTabContent(detailMovie.data.lichChieu)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
