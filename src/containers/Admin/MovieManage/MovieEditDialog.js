import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextTranslation } from '../../Language/TextTranslation';
import MovieForm from './MovieForm';
import { MovieSchema } from './MovieSchema';
import { actFetchUpdateMovieRequest } from './module/actions';

export default function MovieEditDialog(props) {
  const { open, onClose } = props;
  const FormData = require('form-data');
  // Get editUSer from store
  const editMovie = useSelector((state) => state.movieManageReducer.editMovie);
  const dispatch = useDispatch();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
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
              const formdata = new FormData();
              for (let key in movie) {
                formdata.append(key, movie[key]);
              }
              dispatch(actFetchUpdateMovieRequest(formdata));
              console.log(movie);
            }}
          >
            {(propsForm) => (
              <MovieForm {...propsForm}>
                <DialogActions>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="submit" onClick={onClose} color="secondary">
                    <TextTranslation id="container.Admin.UserManage/MovieManage.UpdateBtn" />
                  </Button>
                </DialogActions>
              </MovieForm>
            )}
          </Formik>
        )}
      </DialogContent>
    </Dialog>
  );
}

MovieEditDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
