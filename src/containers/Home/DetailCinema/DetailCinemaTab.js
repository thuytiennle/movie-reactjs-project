import { Container, Grid, makeStyles, Paper, Tabs } from '@material-ui/core';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { CustomTab } from '../../../components/Tabs';
import ShowTimeItem from '../Cinema/ShowTimeItem';
import DateTab from '../DetailMovie/DateTab';
import CinemaInfo from './CinemaInfo';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.dark,
    boxShadow: 'unset',
  },
  tabContainer: {
    overflowX: 'scroll',
    boxShadow: '0 0 20px #e8e8e86c',
  },
  scrollCustom: {
    // Customize scrollbar
    '&::-webkit-scrollbar': {
      width: 4,
      height: 4,
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
  root: {
    flexGrow: 1,
    display: 'flex',
    minWidth: 912,
    height: 600,
    overflow: 'hidden',
  },
  padding: {
    padding: theme.spacing(2),
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
  },
}));

export default function MovieShowTime(props) {
  const classes = useStyles();
  const { detailCinema, cinemaId, cinemaBranchId } = props;
  const [selectCinema, setSelectCinema] = React.useState(0);
  const [dateList, setDateList] = React.useState([]);
  const [date, setDate] = React.useState(0);

  useEffect(() => {
    const index = findIndex(detailCinema, 'maCumRap', cinemaBranchId);
    if (index !== -1) {
      if (
        detailCinema[index].danhSachPhim &&
        detailCinema[index].danhSachPhim.length > 0
      ) {
        const dateArr = detailCinema[index].danhSachPhim.map((movie) => {
          return movie.lstLichChieuTheoPhim.map((item) =>
            new Date(item.ngayChieuGioChieu).toLocaleDateString(),
          );
        });
        // Merged array
        // Merge concat nested arrays into continous array
        const mergedDate = dateArr.toString().split(',');
        const sortDate = mergedDate.sort((a, b) => {
          return new Date(a) - new Date(b);
        });
        // Filter all date on array
        const uniqueDateSet = new Set(sortDate);
        const movieDateArray = [...uniqueDateSet];
        setDateList(movieDateArray);
        // Have new date array then setDate=movieDateArray[0]
        setDate(movieDateArray[0]);
      }
    }
  }, [cinemaBranchId, detailCinema]);

  const handleChangeTab1 = (event, newValue) => {
    setSelectCinema(0);
  };

  const handleChangeTab2 = (event, newValue) => {
    setDate(newValue);
  };

  const handleValue = () => {
    if (date === 0 && dateList && dateList.length > 0) {
      setDate(dateList[0]);
    }
    return date;
  };

  // Function find index
  const findIndex = (mang, key, id) => {
    return mang.findIndex((item) => item[key] === id);
  };

  const renderCinemaTab = () => {
    const cinemaList = [...detailCinema];
    // Swap selected cinema to first position
    if (cinemaList && cinemaList.length > 0) {
      const index = findIndex(detailCinema, 'maCumRap', cinemaBranchId);
      if (index !== -1) {
        // Only sway when element is not in first position
        if (index !== 0) {
          const temp = cinemaList[index];
          cinemaList[index] = cinemaList[0];
          cinemaList[0] = temp;
        }
        return cinemaList.map((item, indx) => {
          const cinemaInfo = {
            hinhAnh:
              'https://s3img.vcdn.vn/123phim/2020/01/galaxy-linh-trung-15791434974170.jpg',
            tenCumRap: item.tenCumRap,
            diaChi: item.diaChi,
            maCumRap: item.maCumRap,
            cinemaId,
          };
          return (
            <CustomTab
              key={`detailCinema-${item.maCumRap}`}
              value={indx}
              label={<CinemaInfo cinema={cinemaInfo} />}
            />
          );
        });
      }
    }
  };

  const renderDateTab = () => {
    if (dateList && dateList.length > 0) {
      return dateList.map((item, indx) => {
        return (
          <CustomTab
            key={`detailCinema-${indx}`}
            value={item}
            label={<DateTab date={item} />}
          />
        );
      });
    }
  };

  const renderTabContent = () => {
    const index = findIndex(detailCinema, 'maCumRap', cinemaBranchId);
    if (index !== -1) {
      if (
        detailCinema[index].danhSachPhim &&
        detailCinema[index].danhSachPhim.length > 0
      ) {
        return detailCinema[index].danhSachPhim.map((item) => {
          return (
            <ShowTimeItem
              key={`cinemaShowTime-${item.maPhim}`}
              movie={item}
              date={date}
            />
          );
        });
      }
    }
  };

  return (
    <Paper className={classes.wrapper}>
      <Container maxWidth="md" className={classes.padding}>
        <div className={clsx(classes.tabContainer, classes.scrollCustom)}>
          <div className={classes.root}>
            {detailCinema && detailCinema.length > 0 && (
              <>
                <Grid item sm={4} className={classes.container1}>
                  <Tabs
                    className={classes.tabsVetical}
                    value={selectCinema}
                    orientation="vertical"
                    variant="scrollable"
                    onChange={handleChangeTab1}
                    aria-label="ant example"
                  >
                    {renderCinemaTab()}
                  </Tabs>
                </Grid>
                <Grid item sm={8} className={classes.container2}>
                  <Tabs
                    className={classes.tabsHorizontal}
                    value={handleValue()}
                    variant="scrollable"
                    onChange={handleChangeTab2}
                    aria-label="ant example"
                  >
                    {renderDateTab()}
                  </Tabs>
                  <div
                    role="tabpanel"
                    className={clsx(classes.scrollbar, classes.scrollCustom)}
                  >
                    {renderTabContent()}
                  </div>
                </Grid>
              </>
            )}
          </div>
        </div>
      </Container>
    </Paper>
  );
}

MovieShowTime.propTypes = {
  detailCinema: PropTypes.any,
  cinemaBranchId: PropTypes.any,
  cinemaId: PropTypes.any,
};
