import styled from 'styled-components';

export const Booking = styled.section`
  height: 0;
  display: block;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const BookingContainer = styled.div`
  position: relative;
  top: -40px;
  z-index: 2;
  background-color: #1f2833 !important;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #fff;
`;

export const BookingForm = styled.div`
  padding: 20px 0;
`;

export const BookingToggle = styled.div`
  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  border-right: 1px solid #fff;

  transition: all 0.5s;

  &:hover {
    text-decoration: none;
    color: #66fcf1;
  }
`;

export const DropdownMenu = styled.ul`
  width: 100%;
  top: 100% !important;
  transform: unset !important;

  &.selectScroll {
    max-height: 300px;
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
      background-color: #f5f5f5;
    }
  }
`;
export const BookingButton = styled.button`
  padding: 5px 10px;
  font-weight: 600;
  color: #66fcf1;
  border: 2px solid #66fcf1;
  border-radius: 20px;
  background: transparent;
  cursor: pointer;

  transition: all 0.5s;

  &:hover,
  &:focus {
    outline: none;
    background-color: #66fcf1;
    color: #1f2833;
    box-shadow: 0 0 5px #66fcf1, 0 0 25px #66fcf1, 0 0 50px #66fcf1,
      0 0 200px #66fcf1;
  }
`;
