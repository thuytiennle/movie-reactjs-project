import { Snackbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchListMovieRequest } from '../../Home/MovieShow/modules/actions';
import { TextTranslation } from '../../Language/TextTranslation';
import {
  actCloseMovieDialog,
  actFetchUpdateMovieRequest,
  actResetUpdateMovie,
} from './module/actions';
import MovieForm from './MovieForm';
import { MovieSchema } from './MovieSchema';

export default function MovieEditDialog(props) {
  const { open } = props;
  const dispatch = useDispatch();
  const FormData = require('form-data');
  // Set state
  const [openAlert, setOpenAlert] = React.useState(false);
  const [snackbarMess, setSnackbarMess] = React.useState('');
  // Get editUSer from store
  const editMovie = useSelector((state) => state.movieManageReducer.editMovie);
  const upDateMovie = useSelector(
    (state) => state.movieManageReducer.upDateMovie,
  );
  const errorUpdateMovie = useSelector(
    (state) => state.userManageReducer.errorUpdateMovie,
  );

  // Did mount
  React.useEffect(() => {
    // Set alert and dialog off
    setOpenAlert(false);
  }, [dispatch]);

  // Update openAlert when error occurs, and open alert sign up success
  React.useEffect(() => {
    if (errorUpdateMovie) {
      setOpenAlert(true);
      setSnackbarMess(errorUpdateMovie.response.data);
    }
    // Check info user has sign in successful
    if (Object.keys(upDateMovie).length > 0) {
      setOpenAlert(true);
      setSnackbarMess(
        <TextTranslation id="container.Admin.UserManage.SuccessfulUpdateUser" />,
      );
    }
  }, [errorUpdateMovie, upDateMovie]);

  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  const handleCloseDialog = () => {
    // Close alert
    setOpenAlert(false);
    dispatch(actCloseMovieDialog());
    // Load list Movie
    dispatch(actFetchListMovieRequest());
    // Reset updat movie state
    dispatch(actResetUpdateMovie());
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <TextTranslation id="container.Admin.UserManage.UpdateUser" />
      </DialogTitle>
      <DialogContent>
        {editMovie && (
          <Formik
            initialValues={{
              tenPhim: editMovie.tenPhim,
              biDanh: editMovie.biDanh,
              trailer: editMovie.trailer,
              hinhAnh: editMovie.hinhAnh,
              ngayKhoiChieu: editMovie.ngayKhoiChieu,
              moTa: editMovie.moTa,
            }}
            validationSchema={MovieSchema}
            onSubmit={(values) => {
              const movie = {
                ...values,
                ngayKhoiChieu: new Date(
                  values.ngayKhoiChieu,
                ).toLocaleDateString('en-GB'),
                maNhom: 'GP05',
                maPhim: editMovie.maPhim,
                danhGia: editMovie.danhGia,
              };
              // Do JSON ko giữ đc file nên dùng formData. FormData sẽ bảo mật hơn
              // Sử dụng FormData để có thể gửi dữ liệu lên server
              // Bao gồm các loại dữ liệu và file
              const formUpdateUser = new FormData();
              for (let key in movie) {
                formUpdateUser.append(key, movie[key]);
              }
              dispatch(actFetchUpdateMovieRequest(formUpdateUser));
            }}
          >
            {(propsForm) => (
              <MovieForm {...propsForm}>
                <DialogActions>
                  <Button onClick={handleCloseDialog}>Cancel</Button>
                  <Button type="submit" color="secondary">
                    <TextTranslation id="container.Admin.UserManage/MovieManage.UpdateBtn" />
                  </Button>
                </DialogActions>
              </MovieForm>
            )}
          </Formik>
        )}
      </DialogContent>
      {/* Display when sign in have error */}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={errorUpdateMovie ? 'error' : 'success'}
        >
          {snackbarMess}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

MovieEditDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};
