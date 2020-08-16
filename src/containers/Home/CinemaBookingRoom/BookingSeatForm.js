import {
  Box,
  Button,
  Divider,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchCinemaBookingTicketRequest } from './modules/actions';

const useStyles = makeStyles(() => ({
  form: {
    width: '100%',
    margin: '20px 0',
  },
}));

function BookingSeatForm(props) {
  const { cinemaBookingRoom } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  // Get state from store
  const listBookingSeat = useSelector(
    (state) => state.cinemaBookingRoomReducer.listBookingSeat,
  );

  // Calculate total payment
  const totalPayment = () => {
    return listBookingSeat.reduce((total, seat) => {
      return (total += seat.price);
    }, 0);
  };

  const handleBookingClick = () => {
    const danhSachVe = listBookingSeat.map((seat) => ({
      maGhe: seat.seatId,
      giaVe: seat.price,
    }));
    const bookedSeatinfo = {
      maLichChieu: cinemaBookingRoom.thongTinPhim.maLichChieu,
      danhSachVe,
      taiKhoanNguoiDung:
        JSON.parse(localStorage.getItem('UserSignIn')).taiKhoan || '',
    };
    dispatch(actFetchCinemaBookingTicketRequest(bookedSeatinfo));
  };

  return (
    <Paper style={{ padding: '15px' }}>
      <Box textAlign="center" marginY="10px">
        <Typography variant="h4" color="secondary">
          {totalPayment()}
        </Typography>
      </Box>
      <Divider />
      <Box marginY="10px">
        <Typography variant="subtitle1" color="secondary">
          {cinemaBookingRoom.thongTinPhim.tenPhim}
        </Typography>
        <Typography variant="subtitle2">
          {cinemaBookingRoom.thongTinPhim.tenCumRap}
        </Typography>
        <Typography>
          {`${cinemaBookingRoom.thongTinPhim.ngayChieu} - ${cinemaBookingRoom.thongTinPhim.gioChieu} - ${cinemaBookingRoom.thongTinPhim.tenRap}`}
        </Typography>
      </Box>
      <Divider />
      <Box marginY="10px">
        <Typography variant="subtitle2" color="secondary">
          <TextTranslation id="container.CinemaBookingRoom.Seat" />
        </Typography>
        <Typography>
          {listBookingSeat &&
            listBookingSeat.length > 0 &&
            listBookingSeat.map((seat, index) =>
              index === 0 ? seat.seatName : `, ${seat.seatName}`,
            )}
        </Typography>
      </Box>
      <Divider />
      {/* Booking form */}
      <form className={classes.form} autoComplete="off">
        <TextField
          style={{ width: '100%', marginBottom: '20px' }}
          id="standard-basic"
          label="Email"
          type="email"
          color="secondary"
        />
        <TextField
          style={{ width: '100%' }}
          id="standard-basic"
          label={<TextTranslation id="container.Auth.SignUp.Phone" />}
          color="secondary"
        />
      </form>
      {/* Booking Button */}
      <Button
        variant="contained"
        style={{ width: '100%', margin: '50px 0' }}
        color="secondary"
        // If listBooking not null then user can press ooking button
        disabled={
          listBookingSeat && listBookingSeat.length > 0
            ? Boolean(false)
            : Boolean(true)
        }
        onClick={handleBookingClick}
      >
        <TextTranslation id="container.BookingButton" />
      </Button>
    </Paper>
  );
}
export default memo(BookingSeatForm);

BookingSeatForm.propTypes = {
  cinemaBookingRoom: PropTypes.any,
};
