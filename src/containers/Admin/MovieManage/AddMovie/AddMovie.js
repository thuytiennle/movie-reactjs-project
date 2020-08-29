import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextTranslation } from '../../../Language/TextTranslation';
import { actFetchAddMovieRequest, actResetAddMovie } from '../module/actions';
import MovieForm from '../MovieForm';
import { MovieSchema } from '../MovieSchema';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    marginLeft: 0,
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 68px)',
    },
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '50px 0',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

export default function AddMovie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const FormData = require('form-data');
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messError, setMessError] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);

  const addMovie = useSelector((state) => state.movieManageReducer.addMovie);
  const errorAddMovie = useSelector(
    (state) => state.movieManageReducer.errorAddMovie,
  );
  // Did mount
  React.useEffect(() => {
    // Reset add state from store
    dispatch(actResetAddMovie());
    // Set alert and dialog off
    setOpenAlert(false);
    setOpenDialog(false);
  }, [dispatch]);

  // Update openAlert when error occurs, and open alert sign up success
  React.useEffect(() => {
    if (errorAddMovie) {
      setOpenAlert(true);
      setMessError(errorAddMovie.response.data);
      dispatch(actResetAddMovie());
    }
    // Check info user has sign in successful
    if (Object.keys(addMovie).length > 0) {
      setOpenDialog(true);
    }
  }, [dispatch, errorAddMovie, addMovie]);

  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div className={classes.wrapper}>
      <Card>
        <CardHeader
          title={
            <TextTranslation id="container.Admin.MovieManage.AddMovieBtn" />
          }
        />
        <CardContent>
          <Formik
            initialValues={{
              tenPhim: '',
              biDanh: '',
              trailer: '',
              hinhAnh: '',
              ngayKhoiChieu: new Date(),
              moTa: '',
              // danhGia: '',
            }}
            validationSchema={MovieSchema}
            onSubmit={(values) => {
              const movie = {
                ...values,
                ngayKhoiChieu: new Date(
                  values.ngayKhoiChieu,
                ).toLocaleDateString('en-GB'),
                maNhom: 'GP05',
              };
              // Do JSON ko giữ đc file nên dùng formData. FormData sẽ bảo mật hơn
              // Sử dụng FormData để có thể gửi dữ liệu lên server
              // Bao gồm các loại dữ liệu và file
              const formdata = new FormData();
              for (let key in movie) {
                formdata.append(key, movie[key]);
              }
              dispatch(actFetchAddMovieRequest(formdata));
            }}
          >
            {(props) => (
              <MovieForm {...props} grid={{ md: 6 }}>
                <CardActions className={classes.button}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    startIcon={<SaveIcon />}
                  >
                    <TextTranslation id="container.Admin.MovieManage.SaveBtn" />
                  </Button>
                </CardActions>
              </MovieForm>
            )}
          </Formik>
        </CardContent>
      </Card>
      {/* Display when sign in have error */}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {messError}
        </Alert>
      </Snackbar>
      {/* Display when sign up successfully */}
      <Dialog disableBackdropClick open={openDialog}>
        <Box padding="10px" alignItems="center">
          <Typography>
            <TextTranslation id="container.Admin.MovieManage.SuccessfulAddMovie" />
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button
              style={{ marginRight: 10 }}
              color="primary"
              onClick={() => {
                dispatch(actResetAddMovie());
                setOpenDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                // Move to user admin page
                history.push('/admin/movie-manage');
                // Reset add state from store
                dispatch(actResetAddMovie());
              }}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
