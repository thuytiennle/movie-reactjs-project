import {
  AppBar,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Spinner } from '../../../components/LoadingIndicator';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchAddMovieShowTimeRequest } from './module/actions';
import { ShowTimeSchema } from './MovieSchema';
import ShowTimeForm from './ShowTimeForm';
import ShowTimeTable from './ShowTimeTable';

function ShowTimeCreateDialog(props) {
  const dispatch = useDispatch();
  const { open, onClose } = props;
  const movieInfo = useSelector((state) => state.movieManageReducer.movieInfo);

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
                  <CardHeader title="Form" />
                </Card>
                <CardContent>
                  <Formik
                    initialValues={{
                      hethongRap: '',
                      cumRap: '',
                      maRap: '',
                      ngayChieuGioChieu: new Date(),
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
                  <CardHeader title="Table" />
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
