import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieSwiper = styled.div`
  width: 250px;
  height: 350px;
`;

export const SwiperItem = styled.div`
  position: relative;
  transition: all 1s;

  &:hover .showTime-container {
    display: block;
  }
`;

export const MovieImgContainer = styled.div`
  border: 1px solid #66fcf1;
  display: block;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const MovieImg = styled.img`
  display: block;
  width: 250px;
  height: 350px;
`;

export const MovieContent = styled.div`
  background-color: #1f2833;
  color: #fff;
  text-align: center;
`;

export const MovieContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: none;
`;

export const MovieModalBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55px;
  height: 55px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #1f2833;
  color: #66fcf1;

  &:hover,
  &:focus {
    outline: none;
    background-color: #66fcf1;
    color: #1f2833;
    box-shadow: 0 0 5px #66fcf1, 0 0 25px #66fcf1, 0 0 50px #66fcf1,
      0 0 200px #66fcf1;
  }
`;

export const MovieBookingBtn = styled(Link)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #1f2833;
  padding: 10px 30px;
  background-color: #66fcf1;
  border-radius: 10px;
  font-size: 1.1rem;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #1f2833;
    box-shadow: 0 0 5px #66fcf1, 0 0 25px #66fcf1, 0 0 50px #66fcf1,
      0 0 200px #66fcf1;
  }
`;
