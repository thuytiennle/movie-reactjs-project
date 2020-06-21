import styled from 'styled-components';

export const CinemaSection = styled.section`
  background: #000;
  padding: 50px 0;
`;

export const CinemaTitle = styled.h2`
  padding: 10px 0;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #66fcf1;
  margin: 0;
`;

export const CinemaContent = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 20px #fff;
`;

export const CinemaImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const CinemaBranchTab = styled.div`
  opacity: 0.5;
  cursor: pointer;

  &.active,
  &:hover {
    opacity: 1;
  }
`;
