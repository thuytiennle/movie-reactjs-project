import {
  Paper,
  Typography,
  Container,
  Tabs,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextTranslation } from '../../Language/TextTranslation';
import { CustomTab } from '../../../components/Tabs';
import {
  actFetchCinemaComplexRequest,
  actFetchCinemaBranchRequest,
} from './modules/actions';
import { Spinner } from '../../../components/LoadingIndicator';
import ShowTimeItem from './ShowTimeItem';
import { CinemaBranchItem } from '../../../components/CinemaBranchItem';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.dark,
    borderRadius: 'unset',
    padding: '50px 0',
  },
  title: {
    textAlign: 'center',
    paddingBottom: 20,
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 600,
    borderRadius: 10,
    boxShadow: '0 0 20px #e8e8e86c',
    overflow: 'hidden',
  },
  container1: {
    padding: '10px 0',
    backgroundColor: theme.palette.background.paper,
  },
  tabsVetical: {
    borderRight: '1px solid #e8e8e8',
    height: '100%',
  },
  container2: {
    padding: 10,
    backgroundColor: theme.palette.background.paper,
  },
  rootInner: {
    display: 'flex',
    height: '100%',
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

function Cinema() {
  // Declare classes
  const classes = useStyles();

  // Declare dispatch func
  const dispatch = useDispatch();

  // Get State from Store
  const cinemaComplex = useSelector(
    (state) => state.cinemaReducer.cinemaComplex,
  );
  const cinemaBranch = useSelector((state) => state.cinemaReducer.cinemaBranch);

  // Declare state
  const [selectCinema, setSelectCinema] = React.useState('');
  const [selectCinemaBranch, setSelectCinemaBranch] = React.useState(0);

  // Did Mount
  useEffect(() => {
    dispatch(actFetchCinemaComplexRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectCinema) {
      dispatch(actFetchCinemaBranchRequest(selectCinema));
    }
  }, [dispatch, selectCinema]);

  const handleValueTab1 = () => {
    // Check if selectCinema is empty then set selectCinema with first cinema in arr
    if (selectCinema === '') {
      setSelectCinema(cinemaComplex[0].maHeThongRap);
      return cinemaComplex[0].maHeThongRap;
    }
    return selectCinema;
  };

  // const handleValueTab2 = () => {
  //   // Check if selectCinema is empty then set selectCinema with first cinema in arr
  //   if (selectCinemaBranch === '') {
  //     setSelectCinemaBranch(cinemaBranch[0].lstCumRap[0].maCumRap);
  //     return cinemaBranch[0].lstCumRap[0].maCumRap;
  //   }
  //   return selectCinemaBranch;
  // };

  // Function onChange tab1
  const handleChangeTab1 = (event, newValue) => {
    setSelectCinema(newValue);
    setSelectCinemaBranch(0);
  };

  // Function onChange tab2
  const handleChangeTab2 = (event, newValue) => {
    setSelectCinemaBranch(newValue);
  };

  const renderCinemaComplex = () => {
    return cinemaComplex.map((item) => {
      return (
        <CustomTab
          key={`cinemaComplex-${item.maHeThongRap}`}
          value={item.maHeThongRap}
          label={<img src={item.logo} width="100px" height="100px" alt="" />}
        />
      );
    });
  };

  const renderCinemaBranch = () => {
    return cinemaBranch[0].lstCumRap.map((item, ind) => {
      return (
        <CustomTab
          key={`cinemaComplex-${item.maCumRap}`}
          value={ind}
          label={
            <CinemaBranchItem cineBran={item} cinema={selectCinema} idx={ind} />
          }
        />
      );
    });
  };

  const renderCinemaShowTime = () => {
    if (
      selectCinemaBranch !== null &&
      selectCinemaBranch !== undefined &&
      cinemaBranch[0].lstCumRap[selectCinemaBranch].danhSachPhim &&
      cinemaBranch[0].lstCumRap[selectCinemaBranch].danhSachPhim.length > 0
    ) {
      return cinemaBranch[0].lstCumRap[selectCinemaBranch].danhSachPhim.map(
        (item) => {
          return (
            <ShowTimeItem
              key={`movieShowTime-${item.maPhim}`}
              movie={item}
              date="2019/01/01"
            />
          );
        },
      );
    }
  };

  return (
    <Paper className={classes.wrapper} id="cinema">
      <Container maxWidth="md">
        <Typography className={classes.title} variant="h4" color="secondary">
          <TextTranslation id="container.Cinema.Title" />
        </Typography>
        <div className={classes.root}>
          <Grid item sm={1} className={classes.container1}>
            {/* When cinemaComplex has data then render tabs otherwise spinner */}
            {cinemaComplex && cinemaComplex.length ? (
              <Tabs
                value={handleValueTab1()}
                orientation="vertical"
                variant="scrollable"
                onChange={handleChangeTab1}
                aria-label="ant example"
                className={classes.tabsVetical}
              >
                {renderCinemaComplex()}
              </Tabs>
            ) : (
              <Spinner />
            )}
          </Grid>
          <Grid item sm={11} className={classes.container2}>
            <div className={classes.rootInner}>
              {cinemaBranch &&
              cinemaBranch.length > 0 &&
              cinemaBranch[0].lstCumRap &&
              cinemaBranch[0].lstCumRap.length > 0 ? (
                <>
                  <Grid item sm={4}>
                    <Tabs
                      value={selectCinemaBranch}
                      orientation="vertical"
                      variant="scrollable"
                      onChange={handleChangeTab2}
                      aria-label="ant example"
                      className={classes.tabsVetical}
                    >
                      {renderCinemaBranch()}
                    </Tabs>
                  </Grid>
                  <Grid
                    item
                    sm={8}
                    role="tabpanel"
                    className={classes.scrollbar}
                  >
                    {renderCinemaShowTime()}
                  </Grid>
                </>
              ) : (
                <Spinner />
              )}
            </div>
          </Grid>
        </div>
      </Container>
    </Paper>
  );
}
export default memo(Cinema);
