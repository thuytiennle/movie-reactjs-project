import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchDetailCinemaRequest } from './modules/actions';
import * as Styled from './StyledDetailCinema';
import Header from '../Header/index';
import Footer from '../../../components/Footer';
import ShowTimeItem from '../../../components/ShowTimeItem';

export default function DetailCinema(props) {
  // Declare dispatch
  const dispatch = useDispatch();

  // Get state from store
  const { detailCinema } = useSelector((state) => ({
    detailCinema: state.detailCinemaReducer.detailCinema,
  }));

  // Set state
  const [state, setState] = useState({
    dateSelected: 0,
  });
  // Did Mount
  useEffect(() => {
    const { cinemaId } = props.match.params;
    dispatch(actFetchDetailCinemaRequest(cinemaId));
  }, [dispatch, props.match.params]);

  // Destruct cinemaBranchId from props.match
  const { cinemaId, cinemaBranchIndex, cinemaBranchId } = props.match.params;

  const renderCinemaInfo = () => {
    if (detailCinema[0].lstCumRap && detailCinema[0].lstCumRap.length > 0) {
      return detailCinema[0].lstCumRap.map((cinema) => {
        return (
          cinema.maCumRap === cinemaBranchId && (
            <Styled.CinemaInfo
              key={`${cinema.maCumRap}-info`}
              className="cinema-info"
            >
              <Styled.CinemaContainer className="container">
                <div className="cinema-img mr-5">
                  <Styled.CinemaImg src="../img/cinema-img.jpg" alt="" />
                </div>
                <div className="cinemaAddress">
                  <h3>{cinema.tenCumRap}</h3>
                  <p>{cinema.diaChi}</p>
                  <Styled.CinemaBookingBtn
                    type="button"
                    className="cinema-bookingBtn"
                  >
                    Mua vé
                  </Styled.CinemaBookingBtn>
                </div>
              </Styled.CinemaContainer>
            </Styled.CinemaInfo>
          )
        );
      });
    }
  };

  const renderCinemaTab = () => {
    if (
      detailCinema[0].lstCumRap &&
      detailCinema[0].lstCumRap.length > 0 &&
      detailCinema[0].lstCumRap[cinemaBranchIndex]
    ) {
      return (
        <>
          <Styled.CinemaTabLink
            className={`${cinemaBranchId}-detailTab active`}
            key={`${cinemaBranchId}-detailTab`}
            to={`/detail-cinema/${cinemaId}-${cinemaBranchIndex}-${cinemaBranchId}`}
          >
            <h6>{detailCinema[0].lstCumRap[cinemaBranchIndex].tenCumRap}</h6>
            <p>{detailCinema[0].lstCumRap[cinemaBranchIndex].diaChi}</p>
          </Styled.CinemaTabLink>
          {detailCinema[0].lstCumRap.map((cinema, cinemaIndex) => {
            return (
              cinema.maCumRap !== cinemaBranchId && (
                <Styled.CinemaTabLink
                  className={`${cinema.maCumRap}-detailTab`}
                  key={`${cinema.maCumRap}-detailTab`}
                  to={`/detail-cinema/${cinemaId}-${cinemaIndex}-${cinema.maCumRap}`}
                >
                  <h6>{cinema.tenCumRap}</h6>
                  <p>{cinema.diaChi}</p>
                </Styled.CinemaTabLink>
              )
            );
          })}
        </>
      );
    }
  };

  const renderMovieShowDateTab = () => {
    if (
      detailCinema[0].lstCumRap[cinemaBranchIndex] &&
      detailCinema[0].lstCumRap[cinemaBranchIndex].danhSachPhim &&
      detailCinema[0].lstCumRap[cinemaBranchIndex].danhSachPhim.length > 0
    ) {
      // Get all date having movie show
      const dateArr = detailCinema[0].lstCumRap[
        cinemaBranchIndex
      ].danhSachPhim.map((movie) => {
        return movie.lstLichChieuTheoPhim.map((item) =>
          new Date(item.ngayChieuGioChieu).toLocaleDateString(),
        );
      });
      // Merge concat nested arrays into continous array
      const mergedDate = [].concat(...dateArr);
      const sortDate = mergedDate.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a) - new Date(b);
      });
      // Filter all date on array
      const uniqueDateSet = new Set(sortDate);
      const movieDateArray = [...uniqueDateSet];
      return (
        <React.Fragment key="deatil-movie">
          <Styled.DetailCinemaUl className="movie-date-tab selectScroll-horizontal">
            {/* Map movie Date array to dispaly tab */}
            {movieDateArray.map((item, index) => {
              const date = new Date(item);
              return (
                <Styled.DetailCinemaLi
                  key={`movie-time-${index}`}
                  className={`movie-time-${index} ${
                    state.dateSelected === index || state.dateSelected === item
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => {
                    setState({
                      dateSelected: item,
                    });
                  }}
                >
                  <p className="py-1 m-0 border-bottom">
                    {`0${date.getDate()}`.slice(-2)}
                  </p>
                  <p className="py-1 m-0">
                    {`0${date.getMonth() + 1}`.slice(-2)}
                  </p>
                </Styled.DetailCinemaLi>
              );
            })}
          </Styled.DetailCinemaUl>
          <div className="movie-show-time selectScroll">
            {detailCinema[0].lstCumRap[cinemaBranchIndex].danhSachPhim.map(
              (movie) => {
                return (
                  <ShowTimeItem
                    key={`${movie.maPhim}-detail-movie`}
                    movie={movie}
                    date={
                      state.dateSelected === 0
                        ? movieDateArray[0]
                        : state.dateSelected
                    }
                  />
                );
              },
            )}
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <Styled.DetailCinemaTab className="detail-cinema">
      {detailCinema[0] && (
        <>
          <Header />
          {/* Cinema Branch Information */}
          {renderCinemaInfo()}
          {/* End of Cinema Branch Info */}
          {/* Cinema Tab Table */}
          <div className="cinema-branch-tab container">
            <Styled.CinemaNav
              className="nav nav-tabs"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <Styled.CinemaNavLink
                  className="nav-link active"
                  id="show-time-tab"
                  data-toggle="tab"
                  href="#show-time"
                  role="tab"
                >
                  Lịch chiếu
                </Styled.CinemaNavLink>
              </li>
              <li className="nav-item">
                <Styled.CinemaNavLink
                  className="nav-link"
                  id="review-tab"
                  data-toggle="tab"
                  href="#review"
                  role="tab"
                >
                  Đánh giá
                </Styled.CinemaNavLink>
              </li>
            </Styled.CinemaNav>
            <Styled.CinemaTabContent className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="show-time"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-4 cinema-tabs border-right selectScroll">
                    {renderCinemaTab()}
                  </div>
                  <div className="col-8 cinema-movie-show-tabs">
                    {renderMovieShowDateTab()}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="review" role="tabpanel">
                Review
              </div>
            </Styled.CinemaTabContent>
          </div>

          {/* End of Cinema Tab Table */}
          <Footer />
        </>
      )}
    </Styled.DetailCinemaTab>
  );
}
