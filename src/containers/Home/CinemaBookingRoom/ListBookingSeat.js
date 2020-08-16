import React, { memo } from 'react';
import { Paper, makeStyles, Box, Typography, Grid } from '@material-ui/core';
import WeekendRoundedIcon from '@material-ui/icons/WeekendRounded';
import { PropTypes } from 'prop-types';
import { TextTranslation } from '../../Language/TextTranslation';
import Seat from './Seat';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflowX: 'scroll',
    backgroundColor: '#fff',
    // Customize scrollbar
    '&::-webkit-scrollbar': {
      height: 4,
      backgroundColor: '#e8e3e3',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 20,
      backgroundColor: theme.palette.secondary.main,
      outline: '1px solid slategrey',
    },
  },
  container: {
    width: 900,
    height: '100%',
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
  screen: {
    width: '80%',
    height: 10,
    margin: '5px auto',
    backgroundColor: '#000',
  },
  blackText: {
    color: '#000',
  },
  seatColorNote: {
    display: 'flex',
    margin: '20px 0',
    color: '#000',
    fontSize: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatRow: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
}));

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'H'];

function ListBookingSeat(props) {
  const classes = useStyles();
  const { danhSachGhe } = props;
  const [seatListToRows, setSeatListToRows] = React.useState([]);

  React.useEffect(() => {
    if (danhSachGhe && danhSachGhe.length > 0) {
      // Get first 96 elements of danhSachGhe and make danhSachGhe 2D array with 14 elements/rows
      const newSeatList = danhSachGhe.slice(0, 96);
      const newArr = [];
      while (newSeatList.length) newArr.push(newSeatList.splice(0, 14));
      setSeatListToRows(newArr);
    }
  }, [danhSachGhe]);

  const renderSeat = () => {
    if (seatListToRows && seatListToRows.length > 0) {
      // Get 96 first seats
      return seatListToRows.map((row, rowIndex) => {
        return (
          <Box key={`rowSeat-${rowIndex}`} className={classes.seatRow}>
            <Grid item sm={1}>
              <Typography className={classes.blackText}>
                {rows[rowIndex]}
              </Typography>
            </Grid>
            <Grid item sm={11}>
              {row.map((seat, index) => (
                <Seat
                  key={`seat-${seat.maGhe}`}
                  seat={seat}
                  seatName={`${rows[rowIndex]}${`0${index + 1}`.slice(-2)}`}
                />
              ))}
            </Grid>
          </Box>
        );
      });
    }
  };

  return (
    <Paper className={classes.wrapper}>
      <div className={classes.container}>
        {/* Screen */}
        <Box marginBottom="15px">
          <Paper className={classes.screen} />
          <Typography className={classes.blackText} variant="body2">
            <TextTranslation id="container.CinemaBookingRoom.Screen" />
          </Typography>
        </Box>
        {/* Seat picker section */}
        {renderSeat()}
        {/* Seat note */}
        <Box className={classes.seatColorNote}>
          <Box display="flex" alignItems="center">
            <WeekendRoundedIcon
              style={{
                fontSize: '16px',
                color: '#3e515d',
              }}
            />
            <TextTranslation id="container.CinemaBookingRoom.Standard" />
          </Box>
          <Box display="flex" alignItems="center" marginX="10px">
            <WeekendRoundedIcon
              style={{
                fontSize: '16px',
                color: '#f7b500',
              }}
            />
            <TextTranslation id="container.CinemaBookingRoom.VIP" />
          </Box>
          <Box display="flex" alignItems="center" marginX="10px">
            <WeekendRoundedIcon
              style={{
                fontSize: '16px',
                color: '#44c020',
              }}
            />
            <TextTranslation id="container.CinemaBookingRoom.SelectingSeat" />
          </Box>
          <Box display="flex" alignItems="center" marginX="10px">
            <WeekendRoundedIcon
              style={{
                fontSize: '16px',
                color: '#e7eaec',
              }}
            />
            <TextTranslation id="container.CinemaBookingRoom.SelectedSeat" />
          </Box>
        </Box>
      </div>
    </Paper>
  );
}

ListBookingSeat.propTypes = {
  danhSachGhe: PropTypes.any,
};

export default memo(ListBookingSeat);
