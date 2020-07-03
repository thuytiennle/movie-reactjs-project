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
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 20px #fff;
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

export const CinemaImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const CinemaLi = styled.li`
  list-style: none;
  opacity: 0.4;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:hover,
  &.active {
    opacity: 1;
  }
`;

export const CinemaUL = styled.ul`
  padding: 0 10px;
  &.show {
    display: block;
  }

  &.hide {
    display: none;
  }
`;

export const CinemaMovieShow = styled.div`
  &.active {
    opacity: 1;
  }

  &.show {
    display: block;
  }

  &.hide {
    display: none;
  }
`;
