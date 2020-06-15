import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MovieImg = styled.img`
  display: block;
  width: 60px;
  height: 60px;
`;

export const MovieTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
`;

export const MovieAgeLimit = styled.span`
  background-color: red;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
`;

export const MovieDuration = styled.p`
  font-size: 15px;
  color: gray;
  margin: 5px 0;
`;

export const MovieTimeSelect = styled(Link)`
  display: inline-block;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #1f2833;
  font-size: 14px;
  color: #fff;
  margin-right: 10px;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #66fcf1;
  }
  cursor: pointer;
`;

export const MovieStartTime = styled.span`
  font-size: 17px;
  color: #66fcf1;
`;
