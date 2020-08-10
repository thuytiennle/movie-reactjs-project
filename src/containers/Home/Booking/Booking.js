import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, MenuItem } from '@material-ui/core';
import { TextTranslation } from '../../Language/TextTranslation';
import { CustomRouterLink } from '../../../components/CustomLink';
import { BookingSelect } from '../../../components/Select';
import { actFetchCinemaShowTimeRequest } from './modules/actions';
import { Spinner } from '../../../components/LoadingIndicator';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'block',
    borderRadius: 'unset',
    backgroundColor: theme.palette.background.default,

    '@media screen and (max-width: 992px)': {
      display: 'none',
    },
  },
  container: {
    position: 'relative',
    top: '-40px',
    zIndex: '2',
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0 0 5px  ${theme.palette.secondary.main}`,
    padding: '5px 0',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Booking() {
  // Get listMovie from store
  const listMovie = useSelector((state) => state.listMovieReducer.listMovie);
  const cinemaShowTime = useSelector(
    (state) => state.cinemaShowTimeReducer.cinemaShowTime,
  );
  const loadingCinemaShowTime = useSelector(
    (state) => state.cinemaShowTimeReducer.loadingCinemaShowTime,
  );
  // Declare classes of material ui
  const classes = useStyles();

  const dispatch = useDispatch();
  const [movieSelect, setMovieSelect] = useState('');
  const [cinemaSelect, setCinemaSelect] = useState('');
  const [dateSelect, setDateSelect] = useState('');
  const [timeSelect, setTimeSelect] = useState('');
  const [openCinemaMenu, setCinemaMenu] = useState(false);
  const [openDateMenu, setDateMenu] = useState(false);
  const [openShowTimeMenu, setShowTimeMenu] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'movieSelect':
        setMovieSelect(value);
        // CAll API to get cinemaShowTime
        dispatch(actFetchCinemaShowTimeRequest(value));
        // Reset other select
        setCinemaSelect('');
        setDateSelect('');
        setTimeSelect('');
        setCinemaMenu(true);
        break;
      case 'cinemaSelect':
        setCinemaSelect(value);
        // Reset other select
        setDateSelect('');
        setTimeSelect('');
        setDateMenu(true);
        break;
      case 'dateSelect':
        setDateSelect(value);
        // Reset other select
        setTimeSelect('');
        setShowTimeMenu(true);
        break;
      case 'timeSelect':
        setTimeSelect(value);
        break;

      default:
        break;
    }
  };

  const renderMenuItem = (list, key1, key2) => {
    if (list && list.length > 0) {
      return list.map((item) => {
        return (
          <MenuItem key={`booking-${item[key1]}`} value={item[key1]}>
            {/* Get of key2 in item */}
            {item[key2]}
          </MenuItem>
        );
      });
    }
    if (loadingCinemaShowTime) {
      return <Spinner />;
    }
  };

  // Find Index function
  const findIndex = (mang, id, key) => {
    return mang.findIndex((item) => {
      return item[key] === id;
    });
  };

  const renderDateMenuItem = () => {
    if (cinemaShowTime && cinemaShowTime.length > 0 && cinemaSelect) {
      const index = findIndex(cinemaShowTime, cinemaSelect, 'maCumRap');
      // Get all date having movie show
      const dateArr = cinemaShowTime[index].lichChieuPhim.map((item) =>
        new Date(item.ngayChieuGioChieu).toLocaleDateString(),
      );

      const sortDate = dateArr.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a) - new Date(b);
      });
      // Filter all date on array
      const uniqueDateSet = new Set(sortDate);
      const movieDateArray = [...uniqueDateSet];

      return movieDateArray.map((item, indx) => (
        <MenuItem key={`booking-date-${indx}`} value={item}>
          {/* Get of key2 in item */}
          {item}
        </MenuItem>
      ));
    }
  };

  const renderTimeMenuItem = () => {
    if (
      cinemaShowTime &&
      cinemaShowTime.length > 0 &&
      cinemaSelect &&
      dateSelect
    ) {
      const index = findIndex(cinemaShowTime, cinemaSelect, 'maCumRap');
      // Get all date having movie show
      const timeArr = cinemaShowTime[index].lichChieuPhim.filter((item) => {
        return (
          new Date(item.ngayChieuGioChieu).toLocaleDateString() === dateSelect
        );
      });
      return timeArr.map((item) => (
        <MenuItem
          key={`booking-time-${item.maLichChieu}`}
          value={item.maLichChieu}
        >
          {new Date(item.ngayChieuGioChieu).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </MenuItem>
      ));
    }
  };

  return (
    <Paper color="default" className={classes.wrapper}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item sm={3}>
            <BookingSelect
              name="movieSelect"
              label="Movie"
              value={movieSelect}
              onChange={handleChange}
            >
              {renderMenuItem(listMovie, 'maPhim', 'tenPhim')}
            </BookingSelect>
          </Grid>
          <Grid item sm={2}>
            <BookingSelect
              name="cinemaSelect"
              label="Cinema"
              value={cinemaSelect}
              onChange={handleChange}
              open={openCinemaMenu}
              onClick={() => {
                setCinemaMenu(!openCinemaMenu);
              }}
            >
              <MenuItem
                value=""
                hidden={movieSelect ? Boolean(true) : Boolean(false)}
              >
                <TextTranslation id="container.Booking.MovieRequest" />
              </MenuItem>
              {renderMenuItem(cinemaShowTime, 'maCumRap', 'tenCumRap')}
            </BookingSelect>
          </Grid>
          <Grid item sm={2}>
            <BookingSelect
              name="dateSelect"
              label="Date"
              value={dateSelect}
              onChange={handleChange}
              open={openDateMenu}
              onClick={() => {
                setDateMenu(!openDateMenu);
              }}
            >
              <MenuItem
                value=""
                hidden={cinemaSelect ? Boolean(true) : Boolean(false)}
              >
                <TextTranslation id="container.Booking.CinemaRequest" />
              </MenuItem>
              {renderDateMenuItem()}
            </BookingSelect>
          </Grid>
          <Grid item sm={3}>
            <BookingSelect
              name="timeSelect"
              label="ShowTime"
              value={timeSelect}
              onChange={handleChange}
              open={openShowTimeMenu}
              onClick={() => {
                setShowTimeMenu(!openShowTimeMenu);
              }}
            >
              <MenuItem
                value=""
                hidden={dateSelect ? Boolean(true) : Boolean(false)}
              >
                <TextTranslation id="container.Booking.DateRequest" />
              </MenuItem>
              {renderTimeMenuItem()}
            </BookingSelect>
          </Grid>
          <Grid item sm={2} className={classes.flex}>
            <CustomRouterLink
              variant="outlined"
              to={`/cinema-booking-room/${timeSelect}`}
              disabled={timeSelect ? Boolean(false) : Boolean(true)}
            >
              <TextTranslation id="container.BookingButton" />
            </CustomRouterLink>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
