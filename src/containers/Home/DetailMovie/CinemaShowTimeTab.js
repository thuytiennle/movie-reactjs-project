import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Tabs,
  Typography,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { SimpleCard } from '../../../components/Card';
import { Spinner } from '../../../components/LoadingIndicator';
import { CustomTab } from '../../../components/Tabs';
import { TextTranslation } from '../../Language/TextTranslation';
import CinemaShowTime from './CinemaShowTime';
import DateTab from './DateTab';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.dark,
    borderRadius: 'unset',
    padding: '60px 0',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 600,
    borderRadius: 10,
    boxShadow: '0 0 20px #e8e8e86c',
    overflow: 'hidden',
  },
  padding: {
    padding: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    padding: '15px 0',
  },
  container1: {
    padding: '10px',
    backgroundColor: theme.palette.background.paper,
    height: '100%',
  },
  tabsVetical: {
    borderRight: '1px solid #e8e8e8',
    height: '100%',
  },
  tabsHorizontal: {
    borderBottom: '1px solid #e8e8e8',
  },
  container2: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
  },
  root1: {
    display: 'flex',
  },
  scrollbar: {
    height: '100%',
    overflowY: 'scroll',
    // Customize scrollbar
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: '#e8e3e3',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 10,
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 20,
      backgroundColor: theme.palette.secondary.main,
      outline: '1px solid slategrey',
    },
  },
}));

export default function MovieShowTime(props) {
  const classes = useStyles();
  const { detailMovie } = props;
  const [selectCinemaComplex, setSelectCinemaComplex] = React.useState(0);
  const [dateList, setDateList] = React.useState([]);
  const [date, setDate] = React.useState(0);

  const handleChangeTab1 = (event, newValue) => {
    setSelectCinemaComplex(newValue);
    setDate(0);
  };

  const handleChangeTab2 = (event, newValue) => {
    setDate(newValue);
  };

  // DateList will be updated when selecteCinemaComplex update
  useEffect(() => {
    if (
      detailMovie.heThongRapChieu &&
      detailMovie.heThongRapChieu.length > 0 &&
      detailMovie.heThongRapChieu[selectCinemaComplex].cumRapChieu &&
      detailMovie.heThongRapChieu[selectCinemaComplex].cumRapChieu.length > 0
    ) {
      // // Get all date having movie show
      const dateArr = detailMovie.heThongRapChieu[
        selectCinemaComplex
      ].cumRapChieu.map((cinema) => {
        return cinema.lichChieuPhim.map((item) =>
          new Date(item.ngayChieuGioChieu).toLocaleDateString(),
        );
      });
      // Merge concat nested arrays into continous array
      const mergedDate = dateArr.toString().split(',');
      const sortDate = mergedDate.sort((a, b) => {
        return new Date(a) - new Date(b);
      });
      // Filter all date on array
      const uniqueDateSet = new Set(sortDate);
      const movieDateArray = [...uniqueDateSet];
      setDateList(movieDateArray);
    }
  }, [selectCinemaComplex, detailMovie.heThongRapChieu]);

  const handleValue = () => {
    if (date === 0 && dateList && dateList.length > 0) {
      setDate(dateList[0]);
    }
    return date;
  };

  const renderCinemaTab = () => {
    return detailMovie.heThongRapChieu.map((item, index) => {
      return (
        <CustomTab
          key={`detailMovie-${item.maHeThongRap}`}
          value={index}
          label={<SimpleCard img={item.logo} title={item.maHeThongRap} />}
        />
      );
    });
  };

  const renderDateTab = () => {
    if (dateList && dateList.length > 0) {
      return dateList.map((item, index) => {
        return (
          <CustomTab
            key={`detailMovie-${index}`}
            value={item}
            label={<DateTab date={item} />}
          />
        );
      });
    }
  };

  const renderTabContent = () => {
    if (
      detailMovie.heThongRapChieu[selectCinemaComplex].cumRapChieu &&
      detailMovie.heThongRapChieu[selectCinemaComplex].cumRapChieu.length > 0
    ) {
      return detailMovie.heThongRapChieu[selectCinemaComplex].cumRapChieu.map(
        (cinema) => {
          return (
            <CinemaShowTime
              key={`cinemaShowTime-${cinema.macumRap}`}
              cinema={cinema}
              date={date}
            />
          );
        },
      );
    }
  };

  return (
    <Paper className={classes.wrapper}>
      <Container maxWidth="md" className={classes.padding}>
        <Typography variant="h5" color="secondary" className={classes.title}>
          <TextTranslation id="components.Navbar.ShowTime" />
        </Typography>
        <div className={classes.root}>
          {detailMovie.heThongRapChieu &&
          detailMovie.heThongRapChieu.length > 0 ? (
            <>
              <Grid item sm={3} className={classes.container1}>
                <Tabs
                  className={classes.tabsVetical}
                  value={selectCinemaComplex}
                  orientation="vertical"
                  variant="scrollable"
                  onChange={handleChangeTab1}
                  aria-label="ant example"
                >
                  {renderCinemaTab()}
                </Tabs>
              </Grid>
              <Grid item sm={9} className={classes.container2}>
                <Tabs
                  className={classes.tabsHorizontal}
                  value={handleValue()}
                  variant="scrollable"
                  onChange={handleChangeTab2}
                  aria-label="ant example"
                >
                  {renderDateTab()}
                </Tabs>
                <div role="tabpanel" className={classes.scrollbar}>
                  {renderTabContent()}
                </div>
              </Grid>
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </Container>
    </Paper>
  );
}

MovieShowTime.propTypes = {
  detailMovie: PropTypes.any,
};
