import React from 'react';
import NewsItem from '../../../components/NewsItem';
import * as Styled from './StyledNews';

export default function News() {
  return (
    <Styled.NewsSection>
      <Styled.NewsContainer>
        <nav>
          <Styled.NewsNavTab
            className="nav nav-tabs"
            id="nav-tab"
            role="tablist"
          >
            <Styled.NewsNavLink
              className="nav-item nav-link active"
              id="reviewNews-tab"
              data-toggle="tab"
              href="#reviewNews"
              role="tab"
            >
              Bình luận phim
            </Styled.NewsNavLink>
            <Styled.NewsNavLink
              className="nav-item nav-link"
              id="blogNews-tab"
              data-toggle="tab"
              href="#blogNews"
              role="tab"
            >
              Blog điện ảnh
            </Styled.NewsNavLink>
          </Styled.NewsNavTab>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="reviewNews"
            role="tabpanel"
          >
            <div className="row m-0">
              <div className="col-12 col-lg-6">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-6">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-4">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-4">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-4">
                <NewsItem />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="blogNews" role="tabpanel">
            <div className="row m-0">
              <div className="col-12 col-lg-6">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-6">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-4">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-4">
                <NewsItem />
              </div>
              <div className="col-12 col-lg-4">
                <NewsItem />
              </div>
            </div>
          </div>
        </div>
      </Styled.NewsContainer>
    </Styled.NewsSection>
  );
}
