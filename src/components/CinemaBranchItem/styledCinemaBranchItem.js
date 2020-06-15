import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CinemaContent = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const CinemaImg = styled.img`
  display: block;
  width: 60px;
  height: 60px;
`;

export const CinemaName = styled.h6`
  span {
    color: red;
    font-weight: 700;
  }
`;

export const CinemaAddres = styled.span`
  display: block;
  text-overflow: ellipsis;
  color: black;
  height: 20px;
`;

export const CinemaDetail = styled(Link)`
  display: block;
  color: red;

  &:hover {
    text-decoration: none;
    color: red;
    font-weight: 700;
  }
`;
