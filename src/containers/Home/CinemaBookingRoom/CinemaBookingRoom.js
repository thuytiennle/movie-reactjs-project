import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Loader } from '../../../components/LoadingIndicator';
import { TextTranslation } from '../../Language/TextTranslation';
import BookingSeatForm from './BookingSeatForm';
import ListBookingSeat from './ListBookingSeat';
import {
  actFetchCinemaBookingRoomRequest,
  actResetForNextBooking,
  actDialogMessage,
  actClearDialogMess,
} from './modules/actions';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 68,
    padding: 39,
    borderRadius: 'unset',
    backgroundColor: theme.palette.background.dark,
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
    },
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

export default function CinemaBookingRoom() {
  const cinemaBookingRoom = useSelector(
    (state) => state.cinemaBookingRoomReducer.cinemaBookingRoom,
  );
  const loadingCinemaBookingRoom = useSelector(
    (state) => state.cinemaBookingRoomReducer.loadingCinemaBookingRoom,
  );
  const dialogMessType = useSelector(
    (state) => state.cinemaBookingRoomReducer.dialogMessType,
  );
  const errorCinemaBookingTicket = useSelector(
    (state) => state.cinemaBookingRoomReducer.errorCinemaBookingTicket,
  );

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { showTimeId } = useParams();

  const [second, setSecond] = React.useState(303);
  const [time, setTime] = React.useState({});
  const [openDialog, setOpenDialog] = React.useState(false);
  const [messDialog, setMessDialog] = React.useState('');

  // DidMount get list seat
  useEffect(() => {
    // Close openDialog
    setOpenDialog(false);
    // Close booking Successful Dialog of the previous order
    dispatch(actResetForNextBooking());
    // Call API render list seat
    dispatch(actFetchCinemaBookingRoomRequest(showTimeId));
  }, [dispatch, showTimeId]);

  const secondsToTime = (secs) => {
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = Math.floor((secs % 3600) % 60);
    return {
      minutes,
      seconds: `0${seconds}`.slice(-2),
    };
  };

  // Update time count down
  useEffect(() => {
    let interval = null;
    if (second !== 0) {
      interval = setInterval(() => {
        setSecond(second - 1);
        setTime(secondsToTime(second - 1));
      }, 1000);
    } else if (second === 0) {
      clearInterval(interval);
      // Set open Dialog time up
      dispatch(actDialogMessage('time-up'));
      // setOpenDialog(true);
      // setMessDialog(
      //   <TextTranslation id="container.CinemaBookingRoom.BookingAgain" />,
      // );
    }
    return () => clearInterval(interval);
  }, [dispatch, second]);
  // Update booking error
  useEffect(() => {
    switch (dialogMessType) {
      case 'time-up':
        setOpenDialog(true);
        setMessDialog(
          <TextTranslation id="container.CinemaBookingRoom.TimeupNote" />,
        );
        break;
      case 'seat-over-limit':
        setOpenDialog(true);
        setMessDialog(
          <TextTranslation id="container.CinemaBookingRoom.SeatOverLimit" />,
        );
        break;
      case 'not-leave-outer-seat':
        setOpenDialog(true);
        setMessDialog(
          <TextTranslation id="container.CinemaBookingRoom.NotLeaveOuterSeat" />,
        );
        break;
      case 'not-leave-middle-seat':
        setOpenDialog(true);
        setMessDialog(
          <TextTranslation id="container.CinemaBookingRoom.NotLeaveMiddleSeat" />,
        );
        break;
      case 'sucessful-booking':
        setOpenDialog(true);
        setMessDialog(
          <TextTranslation id="container.CinemaBookingRoom.BookingSuccess" />,
        );
        break;
      case 'fail-booking':
        setOpenDialog(true);
        setMessDialog(errorCinemaBookingTicket.response.data || '');
        break;
      default:
        // If there isnt any messages then close dialog
        setOpenDialog(false);
        break;
    }
  }, [dialogMessType, errorCinemaBookingTicket]);

  // Time booking out then off the dialog alerting and set time
  const handleBookingAgain = () => {
    switch (dialogMessType) {
      case 'time-up':
        setOpenDialog(false);
        setSecond(300);
        dispatch(actClearDialogMess());
        break;
      case 'sucessful-booking':
        setOpenDialog(false);
        // Back to home
        history.push('/');
        break;
      default:
        setOpenDialog(false);
        dispatch(actClearDialogMess());
        break;
    }
  };

  if (loadingCinemaBookingRoom) {
    return <Loader />;
  }

  return (
    <Paper className={classes.wrapper}>
      {cinemaBookingRoom &&
        cinemaBookingRoom.thongTinPhim &&
        cinemaBookingRoom.danhSachGhe && (
          <Grid container>
            <Grid item sm={12} md={8} lg={9}>
              <Container maxWidth="md">
                <Box display="flex" justifyContent="space-between">
                  <div>
                    <Typography variant="subtitle1">
                      {cinemaBookingRoom.thongTinPhim.tenCumRap}
                    </Typography>
                    <Typography>
                      {`${cinemaBookingRoom.thongTinPhim.ngayChieu} - ${cinemaBookingRoom.thongTinPhim.gioChieu} - ${cinemaBookingRoom.thongTinPhim.tenRap}`}
                    </Typography>
                  </div>
                  <Box textAlign="right">
                    <Typography variant="body2">
                      <TextTranslation id="container.CinemaBookingRoom.BookingTime" />
                    </Typography>
                    <Typography variant="h4">
                      {`${time.minutes} : ${time.seconds}`}
                    </Typography>
                  </Box>
                </Box>
                <Box textAlign="center">
                  <ListBookingSeat
                    danhSachGhe={cinemaBookingRoom.danhSachGhe}
                  />
                </Box>
              </Container>
            </Grid>
            <Grid item sm={12} md={4} lg={3} style={{ marginTop: 20 }}>
              <BookingSeatForm cinemaBookingRoom={cinemaBookingRoom} />
            </Grid>
            {/* display dialog when time is up */}
            <Dialog disableBackdropClick open={openDialog}>
              <Box padding="10px" alignItems="center">
                <Typography>{messDialog}</Typography>
                <Box className={classes.buttonContainer}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleBookingAgain}
                  >
                    OK
                  </Button>
                </Box>
              </Box>
            </Dialog>
          </Grid>
        )}
    </Paper>
  );
}
