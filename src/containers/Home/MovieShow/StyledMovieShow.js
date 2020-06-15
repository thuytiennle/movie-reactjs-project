import styled from 'styled-components';

export const MovieShow = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(./img/movie-bg.jpg) !important;
  background-size: cover;
  background-repeat: repeat-x;
  overflow: hidden;
  padding-top: 80px;
  position: relative;
  background: transparent;

  /* Bootstrap4 Navbar Resets */
  .tab-content > .tab-pane {
    overflow: hidden;
    display: block;
    visibility: hidden;
    transition: 0.1s;
  }
  .tab-content > .tab-pane.active {
    visibility: visible;
  }
  .tab-content {
    position: relative;
  }
  .tab-pane:not(:first-child) {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  /* Swiper Customize */
  .swiper-container {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 150px;
    background-color: transparent;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: block;
    color: #fff;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: #66fcf1;
  }

  .swiper-button-prev:focus,
  .swiper-button-next:focus {
    outline: none;
  }

  /* Customize nav link */
  .nav-tabs .nav-link {
    border: none;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
  }
`;

export const MovieNavTab = styled.ul`
  display: flex;
  justify-content: center;
  border: none;
`;

export const MovieNavLink = styled.a`
  background-color: #1f2833 !important;
  font-size: 1.1rem;
  color: #fff !important;
  margin: 0 10px;

  &:hover {
    background-color: #fff !important;
    color: #000 !important;
  }

  &.active {
    background-color: #fff !important;
    color: #000 !important;
    cursor: default;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.85rem;
  }
`;

export const MovieSwiper = styled.div`
  width: 250px;
  height: 350px;
`;
