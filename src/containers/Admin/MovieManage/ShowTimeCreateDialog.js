import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Snackbar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Spinner } from '../../../components/LoadingIndicator';
import { TextTranslation } from '../../Language/TextTranslation';
import {
  actFetchAddMovieShowTimeRequest,
  actResetAddShowTime,
  actFetchMovieInfoRequest,
} from './module/actions';
import { ShowTimeSchema } from './MovieSchema';
import ShowTimeForm from './ShowTimeForm';
import ShowTimeTable from './ShowTimeTable';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

function ShowTimeCreateDialog(props) {
  const { open, onClose } = props;
  // Set state
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messError, setMessError] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  // Geet state from store
  const movieInfo = useSelector((state) => state.movieManageReducer.movieInfo);
  const movieShowTime = useSelector(
    (state) => state.movieManageReducer.movieShowTime,
  );
  const errorMovieShowTime = useSelector(
    (state) => state.userManageReducer.errorMovieShowTime,
  );
  // Did mount
  React.useEffect(() => {
    // Reset add state from store
    dispatch(actResetAddShowTime());
    // Set alert and dialog off
    setOpenAlert(false);
    setOpenDialog(false);
  }, [dispatch]);

  // Update openAlert when error occurs, and open alert sign up success
  React.useEffect(() => {
    if (errorMovieShowTime) {
      setOpenAlert(true);
      setMessError(errorMovieShowTime.response.data);
    }
    // Check info user has sign in successful
    if (Object.keys(movieShowTime).length > 0) {
      setOpenDialog(true);
    }
  }, [errorMovieShowTime, movieShowTime]);

  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      {Object.keys(movieInfo).length > 0 ? (
        <>
          <AppBar>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={onClose}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h5" color="inherit">
                <TextTranslation id="components.Navbar.ShowTime" />
                {` ${movieInfo.tenPhim}`}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogTitle id="form-dialog-title">
            <TextTranslation id="components.Navbar.ShowTime" />
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Card style={{ margin: 10 }}>
                  <CardHeader
                    title={
                      <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.AddShowTimeBtn" />
                    }
                  />
                </Card>
                <CardContent>
                  <Formik
                    initialValues={{
                      hethongRap: '',
                      cumRap: '',
                      maRap: '',
                      ngayChieuGioChieu: new Date(),
                      thoiLuong: '',
                      giaVe: '',
                    }}
                    validationSchema={ShowTimeSchema}
                    onSubmit={(values) => {
                      const showtime = {
                        maPhim: movieInfo.maPhim,
                        maRap: values.maRap,
                        ngayChieuGioChieu: `${new Date(
                          values.ngayChieuGioChieu,
                        ).toLocaleDateString('en-GB')} ${new Date(
                          values.ngayChieuGioChieu,
                        ).toLocaleTimeString('en-GB')}`,
                        giaVe: values.giaVe,
                      };
                      dispatch(actFetchAddMovieShowTimeRequest(showtime));
                    }}
                  >
                    {(propsForm) => <ShowTimeForm {...propsForm} />}
                  </Formik>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card style={{ margin: 10 }}>
                  <CardHeader
                    title={<TextTranslation id="container.Booking.ShowTime" />}
                  />
                </Card>
                <CardContent>
                  {Object.keys(movieInfo).length > 0 ? (
                    <ShowTimeTable movieInfo={movieInfo} />
                  ) : (
                    <Spinner />
                  )}
                </CardContent>
              </Grid>
            </Grid>
          </DialogContent>
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
          {/* Display when sign up successfully */}
          <Dialog disableBackdropClick open={openDialog}>
            <Box padding="10px" alignItems="center">
              <Typography>
                <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.SuccessfulAddShowTime" />
              </Typography>
              <Box className={classes.buttonContainer}>
                <Button
                  style={{ marginRight: 10 }}
                  color="primary"
                  onClick={() => {
                    setOpenDialog(false);
                    // Load movie showtime
                    dispatch(actFetchMovieInfoRequest(movieInfo.maPhim));
                    dispatch(actResetAddShowTime());
                  }}
                >
                  Ok
                </Button>
              </Box>
            </Box>
          </Dialog>
        </>
      ) : (
        <Loader />
      )}
    </Dialog>
  );
}
export default memo(ShowTimeCreateDialog);
ShowTimeCreateDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
