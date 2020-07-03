import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CinemaInfo = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
    url(../img/cinema-img.jpg) no-repeat;
  background-size: cover;
  height: 500px;
  padding: 50px 0;
  display: flex;
  align-items: center;
`;

export const CinemaContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const CinemaImg = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  border: 1px solid #fff;
`;

export const CinemaBookingBtn = styled.button`
  border: none;
  color: #1f2833;
  padding: 10px 30px;
  background-color: #66fcf1;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;
    text-decoration: none;
    color: #1f2833;
    box-shadow: 0 0 5px #66fcf1, 0 0 25px #66fcf1, 0 0 50px #66fcf1,
      0 0 200px #66fcf1;
  }
`;

export const CinemaTabLink = styled(Link)`
  display: block;
  padding: 10px 0;
  color: #000;
  border-bottom: 1px solid #ddd;
  opacity: 0.4;

  &:hover {
    text-decoration: none;
    color: #000;
  }

  &.active {
    opacity: 1;
  }
`;

export const DetailCinemaUl = styled.ul`
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
`;

export const DetailCinemaLi = styled.li`
  display: inline-block;
  padding: 0 10px;
  list-style: none;
  cursor: pointer;
  opacity: 0.4;

  &.active,
  &:hover {
    opacity: 1;
  }
`;

export const CinemaNav = styled.ul`
  display: flex;
  justify-content: center;
  border: none !important;
`;

export const CinemaNavLink = styled.a`
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
`;

export const DetailCinemaTab = styled.div`
  background: #000;
`;

export const CinemaTabContent = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px #fff;
  height: 600px;
  overflow: hidden;

  .selectScroll {
    height: 600px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 4px;
      background-color: #e8e3e3;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #fff;
    }
  }
`;
