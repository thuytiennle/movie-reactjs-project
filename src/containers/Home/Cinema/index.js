import React, { useState, useEffect, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './StyledCinema';
import { actFetchCinemaComplexRequest } from './modules/actions';
import CinemaBrachItem from '../../../components/CinemaBranchItem';
// import ShowTimeItem from '../../../components/ShowTimeItem';

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
    cinemaBranchSelected: 0,
  });

  const handleCinemaBranchClick = useCallback((cinemaBrachId) => {
    setState({
      cinemaBranchSelected: cinemaBrachId,
    });
  });

  // Did Mount
  useEffect(() => {
    // Dispatch cinema complex action
    dispatch(actFetchCinemaComplexRequest());
  }, []);

  const renderCinemaTab = () => {
    if (cinemaComplex && cinemaComplex.length > 0) {
      return cinemaComplex.map((cinema, index) => {
        return (
          <a
            key={`${cinema.maHeThongRap}-tab`}
            className={index === 0 ? 'nav-link active' : 'nav-link'}
            id={`${cinema.maHeThongRap}-tab`}
            data-toggle="pill"
            href={`#${cinema.maHeThongRap}`}
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            onClick={() => {
              setState({
                cinemaBranchSelected: 0,
              });
            }}
          >
            <Styled.CinemaImg src={cinema.logo} alt="" />
          </a>
        );
      });
    }
  };

  const renderCinemaBranch = () => {
    if (cinemaBranch && cinemaBranch.length > 0) {
      return cinemaBranch.map((cinema, index) => {
        return (
          <div
            key={`${cinema.maHeThongRap}-tabContent`}
            className={
              index === 0 ? 'tab-pane fade show active' : 'tab-pane fade'
            }
            id={cinema.maHeThongRap}
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="row">
              {/* Cinema Branch Tab */}
              <div
                key={`cinema-${cinema.maHeThongRap}-tab`}
                className="col-4 nav flex-column nav-pills"
                id={`cinema-${cinema.maHeThongRap}-tab`}
                role="tablist"
                aria-orientation="vertical"
              >
                {cinema.lstCumRap.map((item, indexCinemaBrach) => {
                  return (
                    <Styled.CinemaBranchTab
                      key={`${item.maCumRap}-tab`}
                      className={
                        state.cinemaBranchSelected === indexCinemaBrach ||
                        state.cinemaBranchSelected === item.maCumRap
                          ? 'cinema-branch nav-link active'
                          : 'cinema-branch nav-link'
                      }
                      id={`${item.maCumRap}-tab`}
                      onClick={() => {
                        handleCinemaBranchClick(item.maCumRap);
                      }}
                    >
                      <CinemaBrachItem
                        cinemaBranch={{
                          maCumRap: item.maCumRap,
                          tenCumRap: item.tenCumRap,
                          diaChi: item.diaChi,
                        }}
                      />
                    </Styled.CinemaBranchTab>
                  );
                })}
              </div>
            </div>
          </div>
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
            <div
              className="col-1 nav flex-column nav-pills"
              id="cinemaBrands-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {renderCinemaTab()}
            </div>
            <div className="col-11 tab-content" id="cinemaBrands-tabContent">
              {renderCinemaBranch()}
            </div>
          </div>
        </Styled.CinemaContent>
      </div>
    </Styled.CinemaSection>
  );
}
export default memo(Cinema);
