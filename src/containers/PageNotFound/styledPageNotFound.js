import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  position: relative;
  height: 100vh;
  background: #030005;
`;

export const NotFoundContent = styled.div`
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const NotFoundDiv = styled.div`
  position: relative;
  height: 180px;
  margin-bottom: 20px;
  z-index: -1;
`;

export const NotFoundH1 = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 224px;
  font-weight: 900;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: -12px;
  color: #030005;
  text-transform: uppercase;
  text-shadow: -2px -2px 0px #66fcf1, 2px 2px 0px #66fcf1;
  letter-spacing: -20px;
  @media only screen and (max-width: 480px) {
    font-size: 182px;
  }
`;

export const NotFoundH2 = styled.h2`
  position: absolute;
  left: 0;
  right: 0;
  top: 110px;
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0px 2px 0px #66fcf1;
  letter-spacing: 13px;
  margin: 0;
  @media only screen and (max-width: 767px) {
    font-size: 24px;
  }
`;

export const NotFoundLink = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  border: 2px solid;
  background: transparent;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  &:hover {
    color: #66fcf1;
    text-decoration: none;
  }
`;
