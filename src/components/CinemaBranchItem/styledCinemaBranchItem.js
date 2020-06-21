import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled.a``;
export const CinemaName = styled.h6`
  span {
    color: red;
    font-weight: 700;
  }
`;

export const CinemaAddress = styled.span`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  color: black;
  height: 25px;
`;

export const CinemaDetail = styled(Link)`
  color: red;

  &:hover {
    text-decoration: none;
    color: red;
    font-weight: 700;
  }
`;
