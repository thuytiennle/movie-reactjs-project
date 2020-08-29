import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/LoadingIndicator';
import { actFetchListMovieRequest } from '../../Home/MovieShow/modules/actions';
import { actCloseShowTimeDialog, actResetDeleteMovie } from './module/actions';
import MovieEditDialog from './MovieEditDialog';
import MovieTable from './MovieTable';
import MovieToolbar from './MovieToolbar';
import ShowTimeCreateDialog from './ShowTimeCreateDialog';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 68px)',
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  loaderDiv: {
    marginLeft: 0,
    backgroundColor: theme.palette.titleBar.main,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
  },
}));

export default function MovieManage() {
  const classes = useStyle();
  const dispatch = useDispatch();
  // Set state
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messError, setMessError] = React.useState('');
  // Get state from store
  const listMovie = useSelector((state) => state.listMovieReducer.listMovie);
  const loadingListMovie = useSelector(
    (state) => state.listMovieReducer.loadingListMovie,
  );
  const openMovieDialog = useSelector(
    (state) => state.movieManageReducer.openDialog,
  );
  const openShowTimeDialog = useSelector(
    (state) => state.movieManageReducer.openShowTimeDialog,
  );
  const errorDeleteMovie = useSelector(
    (state) => state.movieManageReducer.errorDeleteMovie,
  );

  // Did Mount
  React.useEffect(() => {
    // Dispatch action request to init saga listMovie API
    dispatch(actFetchListMovieRequest());
    dispatch(actResetDeleteMovie());
    // Set alert and dialog off
    setOpenAlert(false);
  }, [dispatch]);

  // Update openAlert when error occurs, and open alert sign up success
  React.useEffect(() => {
    if (errorDeleteMovie) {
      setOpenAlert(true);
      setMessError(errorDeleteMovie.response.data);
      // Reset delete movie for next delete
      dispatch(actResetDeleteMovie());
    }
  }, [dispatch, errorDeleteMovie]);

  // Loader
  if (loadingListMovie) {
    return (
      <div className={classes.loaderDiv}>
        <Loader />;
      </div>
    );
  }

  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div className={classes.wrapper}>
      {listMovie && listMovie.length > 0 && (
        <>
          <MovieToolbar />
          <MovieTable rows={listMovie} />
          <MovieEditDialog open={openMovieDialog} />
          <ShowTimeCreateDialog
            open={openShowTimeDialog}
            onClose={() => dispatch(actCloseShowTimeDialog())}
          />
          {/* Display when sign in have error */}
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              {messError}
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
}
