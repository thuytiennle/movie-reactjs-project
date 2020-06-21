import React from 'react';
import * as Styled from './styledCinemaBranchItem';

export default function CinemaBrachItem(props) {
  const { cinemaBranch } = props;
  return (
    <div>
      <Styled.CinemaName className="cinema-name">
        {cinemaBranch.tenCumRap}
      </Styled.CinemaName>
      <Styled.CinemaAddress className="cinema-address">
        {cinemaBranch.diaChi}
      </Styled.CinemaAddress>
      <Styled.CinemaDetail
        type="button"
        className="cinema-detail"
        to="/detail-cinema"
      >
        [chi tiết]
      </Styled.CinemaDetail>
    </div>
  );
}
