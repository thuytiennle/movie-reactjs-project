import React from 'react';
import * as Styled from './StyledCinema';
import ShowTimeItem from '../../../components/ShowTimeItem';
import CinemaBrachItem from '../../../components/CinemaBranchItem';

export default function Cinema() {
  return (
    <Styled.CinemaSection>
      <div className="container">
        <Styled.CinemaTitle>Cụm rạp</Styled.CinemaTitle>
        <Styled.CinemaContent className="cinema-content">
          <CinemaBrachItem />
          <ShowTimeItem />
        </Styled.CinemaContent>
      </div>
    </Styled.CinemaSection>
  );
}
