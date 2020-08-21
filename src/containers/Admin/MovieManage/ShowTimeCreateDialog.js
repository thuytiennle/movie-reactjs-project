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
import React from 'react';
import { TextTranslation } from '../../Language/TextTranslation';
import { MovieSchema } from './MovieSchema';
import ShowTimeForm from './ShowTimeForm';

export default function ShowTimeCreateDialog(props) {
  const { open, onClose } = props;

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" color="default">
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
                  tenPhim: '',
                  biDanh: '',
                  trailer: '',
                  hinhAnh: '',
                  ngayKhoiChieu: '01/01/2020',
                  moTa: '',
                }}
                validationSchema={MovieSchema}
                onSubmit={(values) => {
                  console.log(values);
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
            <CardContent>fdsf</CardContent>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

ShowTimeCreateDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
