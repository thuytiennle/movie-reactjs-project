import React, { memo } from 'react';
import { IconButton } from '@material-ui/core';
import WeekendRoundedIcon from '@material-ui/icons/WeekendRounded';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actBookingSeat } from './modules/actions';

function getColor(isSelected, isSelecting, type) {
  if (isSelected) {
    return '#e7eaec';
  }
  if (isSelecting) {
    return '#44c020';
  }
  switch (type) {
    case 'Thuong':
      return '#3e515d';
    case 'Vip':
      return '#f7b500';
    default:
      break;
  }
}

function Seat(props) {
  const { seat, seatName, rowsName, seatIndex, rowLength } = props;
  const [isSelecting, setIsSelecting] = React.useState(Boolean(false));
  const dispatch = useDispatch();
  // Get state fro store
  const listBookingSeat = useSelector(
    (state) => state.cinemaBookingRoomReducer.listBookingSeat,
  );

  const handleClick = () => {
    // If listBookingSeat over
    if (listBookingSeat && listBookingSeat.length > 7) {
      setIsSelecting(false);
    } else {
      setIsSelecting(!isSelecting);
    }
    const selectingSeat = {
      seatId: seat.maGhe,
      price: seat.giaVe,
      seatName,
      rowsName,
      seatIndex,
      rowLength,
      status: !isSelecting,
    };
    // Push sselecting to store
    dispatch(actBookingSeat(selectingSeat));
  };
  return (
    <IconButton disabled={seat.daDat} onClick={handleClick}>
      <WeekendRoundedIcon
        style={{
          fontSize: '28px',
          color: `${getColor(seat.daDat, isSelecting, seat.loaiGhe)}`,
        }}
      />
    </IconButton>
  );
}

Seat.propTypes = {
  seat: PropTypes.any,
  seatName: PropTypes.string,
  rowsName: PropTypes.string,
  seatIndex: PropTypes.any,
  rowLength: PropTypes.any,
};

export default memo(Seat);
