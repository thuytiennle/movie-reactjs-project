import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

export const NewsItemLContainer = styled.div`
  padding: 10px 5px;
  position: relative;
`;

export const NewsLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const NewsImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const NewsTitle = styled(Link)`
  display: block;
  font-size: 1.1rem;
  margin: 5px 0;
  text-align: center;
  color: #ddd;

  &:hover {
    color: #66fcf1;
    text-decoration: none;
  }

  @media screen and (max-width: 992px) {
    text-align: left;
  }

  @media screen and (max-width: 578px) {
    font-size: 0.85rem;
  }
`;

export const NewsDetail = styled.p`
  font-size: 0.9rem;
  text-align: center;
  width: 100%;
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  color: #ddd;
  display: block;

  @media screen and (max-width: 992px) {
    text-align: left;
  }
  @media screen and (max-width: 578px) {
    display: none;
  }
`;

export const NewsInteract = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.9rem;

  @media screen and (max-width: 992px) {
    justify-content: flex-start;
  }
`;

export const CustomStarIcon = styled(StarIcon)`
  color: #fac917;
`;

export const NewsBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #ddd;

  @media screen and (max-width: 578px) {
    &.new-rating {
      display: none;
    }
  }
`;
