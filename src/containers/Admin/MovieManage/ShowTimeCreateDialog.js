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
import { useSelector } from 'react-redux';
import { TextTranslation } from '../../Language/TextTranslation';
import { ShowTimeSchema } from './MovieSchema';
import ShowTimeForm from './ShowTimeForm';
import ShowTimeTable from './ShowTimeTable';

function ShowTimeCreateDialog(props) {
  const { open, onClose } = props;
  const movieInfo = useSelector((state) => state.movieManageReducer.movieInfo);

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
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
                  if (movieInfo) {
                    const showtime = {
                      maPhim: movieInfo.maPhim,
                      maRap: values.maRap,
                      ngayChieuGioChieu: values.ngayChieuGioChieu,
                      giaVe: values.giaVe,
                    };
                    console.log(showtime);
                  }
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
              {Object.keys(movieInfo).length > 0 && (
                <ShowTimeTable movieInfo={movieInfo} />
              )}
            </CardContent>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
export default memo(ShowTimeCreateDialog);
ShowTimeCreateDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
