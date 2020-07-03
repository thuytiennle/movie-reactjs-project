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
        // Get API lstCumRap of cinema based on cinemaId(maHeThongRap). cinemaBrachId uses for showing first at table on DetailCinema Page
        to={`/detail-cinema/${cinemaBranch.maHeThongRap}-${cinemaBranch.index}-${cinemaBranch.maCumRap}`}
      >
        [chi tiết]
      </Styled.CinemaDetail>
    </div>
  );
}
