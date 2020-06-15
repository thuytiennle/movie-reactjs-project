import React from 'react';
import * as Styled from './styledCinemaBranchItem';

export default function CinemaBrachItem() {
  return (
    <Styled.CinemaContent className="cinema-branch-content">
      <div className="cinema-branch-img">
        <Styled.CinemaImg
          src="https://s3img.vcdn.vn/123phim/2019/10/290284596e800086d4f06054e56f26fa.jpg"
          alt=""
        />
      </div>
      <div className="cinema-description ml-3">
        <Styled.CinemaName className="cinema-name">
          <span>CGV</span> - Lý Chính Thắng
        </Styled.CinemaName>
        <Styled.CinemaAddres className="cinema-address">
          Tầng 3, 83 Lý Chính Thắng, Phường 8, Q.3, TP.HCM
        </Styled.CinemaAddres>
        <Styled.CinemaDetail className="cinema-detail" to="/cinema-detail">
          [chi tiết]
        </Styled.CinemaDetail>
      </div>
    </Styled.CinemaContent>
  );
}
