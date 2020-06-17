import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Styled from './StyledCinema';
import ShowTimeItem from '../../../components/ShowTimeItem';
import CinemaBrachItem from '../../../components/CinemaBranchItem';
import { actFetchCinemaComplexRequest } from './modules/actions';

export default function Cinema() {
  // Declare dispatch func
  const dispatch = useDispatch();

  // Get state from store
  const { cinemaComplex, cinemaBranch } = useSelector((state) => ({
    cinemaComplex: state.cinemaReducer.cinemaComplex,
    cinemaBranch: state.cinemaReducer.cinemaBranch,
  }));

  // Did Mount
  useEffect(() => {
    // Dispatch cinema complex action
    dispatch(actFetchCinemaComplexRequest());
  }, []);

  // Declare state
  const [state, setState] = useState({
    // Cinema and cinema branches selected
    cinemaSelected: '',
    cinemaBranchSelected: '',
  });

  const renderCinemaTab = () => {
    if (cinemaComplex && cinemaComplex.length > 0) {
      return <h1>jkdskas</h1>;
    }
  };

  return (
    <Styled.CinemaSection>
      <div className="container">
        <Styled.CinemaTitle>Cụm rạp</Styled.CinemaTitle>
        <Styled.CinemaContent className="cinema-content d-flex">
          {renderCinemaTab()}
          <CinemaBrachItem />
          <ShowTimeItem />
        </Styled.CinemaContent>
      </div>
    </Styled.CinemaSection>
  );
}
