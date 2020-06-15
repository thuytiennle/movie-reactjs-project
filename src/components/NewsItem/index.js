import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import * as Styled from './styledNewsItem';

export default function NewsItem() {
  return (
    <Styled.NewsItemLContainer className="row news-item m-0">
      <Styled.NewsLink className="col-4 col-lg-12 news-img" to="/news">
        <Styled.NewsImg src="./img/psma6450x300_1587961446961.png" alt="" />
      </Styled.NewsLink>
      <div className="col-8 col-lg-12 news-content">
        <div className="news-detail">
          <Styled.NewsTitle to="/news">
            [Review] Bloodshot: Vin Diesel Và Giấc Mơ Siêu Anh Hùng
          </Styled.NewsTitle>
          <Styled.NewsDetail>
            Dù hóa thân thành Groot trong Guardians Of The Galaxy là siêu anh
            hùng nhưng Vin Diesel chỉ lồng tiếng chứ chẳng đóng một cảnh giải
            cứu thế giới nào cả. Thế nên, Vin Dầu Nhớt quyết tâm trở thành siêu
            anh hùng thực sự bằng Bloodshot.
          </Styled.NewsDetail>
        </div>
        <Styled.NewsInteract className="news-interact">
          <Styled.NewsBtn>
            <ThumbUpAltIcon
              fontSize="small"
              style={{ color: '#ddd' }}
              className="mr-2"
            />
            Like
          </Styled.NewsBtn>
          <Styled.NewsBtn className="news-view">
            <VisibilityIcon
              fontSize="small"
              style={{ color: '#ddd' }}
              className="mr-2"
            />
            <span>5632</span>
          </Styled.NewsBtn>
          <Styled.NewsBtn className="new-rating">
            <Styled.CustomStarIcon fontSize="small" className="mr-2" />
            <span>8.2/10 (256)</span>
          </Styled.NewsBtn>
        </Styled.NewsInteract>
      </div>
    </Styled.NewsItemLContainer>
  );
}
