import styled from 'styled-components';

export const NewsSection = styled.section`
  background-color: #000;
  padding: 20px 0;

  /* Customize nav link */
  .nav-tabs .nav-link {
    border: none;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
  }

  @media screen and (max-width: 360px) {
    .news-img {
      padding: 0;
    }
  }
`;

export const NewsContainer = styled.div`
  width: 85%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const NewsNavTab = styled.div`
  display: flex;
  justify-content: center;
  border: none;
`;

export const NewsNavLink = styled.a`
  border: none !important;
  background-color: transparent !important;
  font-size: 1.2rem;
  color: #fff !important;
  margin: 0 10px;

  &:hover {
    background-color: transparent !important;
    transform: scale(1.2);
    color: #66fcf1 !important;
    border-bottom: 1px solid #66fcf1;
  }

  &.active {
    background-color: transparent !important;
    color: #66fcf1 !important;
    transform: scale(1.2);
    border-bottom: 1px solid #66fcf1;
    cursor: default;
  }

  @media screen and (max-width: 578px) {
    font-size: 0.95rem;
  }
`;
