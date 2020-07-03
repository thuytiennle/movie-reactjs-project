import React, { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './StyledCinema';
import { actFetchCinemaComplexRequest } from './modules/actions';
import CinemaBrachItem from '../../../components/CinemaBranchItem';
import ShowTimeItem from '../../../components/ShowTimeItem';

function Cinema() {
  // Declare dispatch func
  const dispatch = useDispatch();

  // Get state from store
  const { cinemaComplex, cinemaBranch } = useSelector((state) => ({
    cinemaComplex: state.cinemaReducer.cinemaComplex,
    cinemaBranch: state.cinemaReducer.cinemaBranch,
  }));

  // Declare useState
  const [state, setState] = useState({
    cinemaSelected: 0,
    cinemaBranchSelected: 0,
  });

  // Did Mount
  useEffect(() => {
    // Dispatch cinema complex action
    dispatch(actFetchCinemaComplexRequest());
  }, [dispatch]);

  const renderCinemaTab = () => {
    if (cinemaBranch && cinemaBranch.length > 0) {
      return cinemaBranch.map((cinema, index) => {
        return (
          <Styled.CinemaLi
            key={cinema.maHeThongRap}
            className={
              state.cinemaSelected === index ||
              state.cinemaSelected === cinema.maHeThongRap
                ? 'active'
                : ''
            }
            onClick={() => {
              setState({
                cinemaBranchSelected: cinema.lstCumRap[0].maCumRap,
                cinemaSelected: cinema.maHeThongRap,
              });
            }}
          >
            {cinemaComplex.map((item) => {
              return (
                cinema.maHeThongRap === item.maHeThongRap && (
                  <Styled.CinemaImg
                    key={`${item.maHeThongRap}-img`}
                    src={item.logo}
                    alt=""
                  />
                )
              );
            })}
          </Styled.CinemaLi>
        );
      });
    }
  };

  const renderCinemaBranchTab = () => {
    if (cinemaBranch && cinemaBranch.length > 0) {
      return cinemaBranch.map((cinema, index) => {
        return (
          <Styled.CinemaUL
            key={`${cinema.maHeThongRap}-branch`}
            className={`${cinema.maHeThongRap}-branch ${
              state.cinemaSelected === index ||
              state.cinemaSelected === cinema.maHeThongRap
                ? 'show'
                : 'hide'
            }`}
          >
            {cinema.lstCumRap.map((item, lstCumRapindex) => {
              return (
                <Styled.CinemaLi
                  key={item.maCumRap}
                  className={
                    state.cinemaBranchSelected === lstCumRapindex ||
                    state.cinemaBranchSelected === item.maCumRap
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setState({
                      ...state,
                      cinemaBranchSelected: item.maCumRap,
                    });
                  }}
                >
                  <CinemaBrachItem
                    cinemaBranch={{
                      maHeThongRap: cinema.maHeThongRap,
                      maCumRap: item.maCumRap,
                      tenCumRap: item.tenCumRap,
                      diaChi: item.diaChi,
                      index: lstCumRapindex,
                    }}
                  />
                </Styled.CinemaLi>
              );
            })}
          </Styled.CinemaUL>
        );
      });
    }
  };

  const renderCinemaListMovie = () => {
    if (cinemaBranch && cinemaBranch.length > 0) {
      return cinemaBranch.map((cinema, index) => {
        return (
          <Styled.CinemaMovieShow
            key={`${cinema.maHeThongRap}-movieShow`}
            className={`${cinema.maHeThongRap}-movieShow ${
              state.cinemaSelected === index ||
              state.cinemaSelected === cinema.maHeThongRap
                ? 'active'
                : 'hide'
            }`}
          >
            {cinema.lstCumRap.map((item, lstCumRapindex) => {
              return (
                <Styled.CinemaMovieShow
                  key={`${item.maCumRap}-movieShow`}
                  className={
                    state.cinemaBranchSelected === lstCumRapindex ||
                    state.cinemaBranchSelected === item.maCumRap
                      ? 'show'
                      : 'hide'
                  }
                >
                  {item.danhSachPhim.map((movie) => (
                    <ShowTimeItem
                      key={movie.maPhim}
                      movie={movie}
                      date="2019/01/01"
                    />
                  ))}
                </Styled.CinemaMovieShow>
              );
            })}
          </Styled.CinemaMovieShow>
        );
      });
    }
  };

  return (
    <Styled.CinemaSection>
      <div className="container">
        <Styled.CinemaTitle>Cụm rạp</Styled.CinemaTitle>
        <Styled.CinemaContent className="cinema-content">
          <div className="row">
            <ul className="col-1 tabCinema border-right">
              {renderCinemaTab()}
            </ul>
            <div className="col-4 tabCinemaBranch selectScroll border-right">
              {renderCinemaBranchTab()}
            </div>
            <div className="col-7 selectScroll CinemaBranchMovieTime">
              {renderCinemaListMovie()}
            </div>
          </div>
        </Styled.CinemaContent>
      </div>
    </Styled.CinemaSection>
  );
}
export default memo(Cinema);
