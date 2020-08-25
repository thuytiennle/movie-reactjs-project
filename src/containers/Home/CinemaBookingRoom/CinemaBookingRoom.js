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
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../../../components/LoadingIndicator';
import { TextTranslation } from '../../Language/TextTranslation';
import BookingSeatForm from './BookingSeatForm';
import ListBookingSeat from './ListBookingSeat';
import {
  actFetchCinemaBookingRoomRequest,
  actResetForNextBooking,
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
  const openSucessDialog = useSelector(
    (state) => state.cinemaBookingRoomReducer.openSucessDialog,
  );
  const loadingCinemaBookingRoom = useSelector(
    (state) => state.cinemaBookingRoomReducer.loadingCinemaBookingRoom,
  );

  const classes = useStyles();
  const dispatch = useDispatch();
  const { showTimeId } = useParams();

  const [second, setSecond] = React.useState(60);
  const [time, setTime] = React.useState({});
  const [openDialogTimeUp, setOpenDialogTimeUp] = React.useState(false);

  // DidMount get list seat
  useEffect(() => {
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
      setOpenDialogTimeUp(true);
    }
    return () => clearInterval(interval);
  }, [second]);

  // Time booking out then off the dialog alerting and set time
  const handleBookingAgain = () => {
    setOpenDialogTimeUp(false);
    setSecond(300);
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
            <Dialog disableBackdropClick open={openDialogTimeUp}>
              <Box padding="10px" alignItems="center">
                <Typography>
                  <TextTranslation id="container.CinemaBookingRoom.TimeupNote" />
                </Typography>
                <Box className={classes.buttonContainer}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleBookingAgain}
                  >
                    <TextTranslation id="container.CinemaBookingRoom.BookingAgain" />
                  </Button>
                </Box>
              </Box>
            </Dialog>
            {/* Display dialog when booking is successful */}
            <Dialog disableBackdropClick open={openSucessDialog}>
              <Box padding="10px" alignItems="center">
                <Typography>
                  <TextTranslation id="container.CinemaBookingRoom.BookingSuccess" />
                </Typography>
                <Box className={classes.buttonContainer}>
                  <Button
                    className={classes.link}
                    variant="outlined"
                    color="secondary"
                    component={Link}
                    to="/"
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
