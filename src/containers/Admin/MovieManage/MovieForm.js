import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Form } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { TextTranslation } from '../../Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MovieForm(props) {
  const {
    errors,
    handleChange,
    touched,
    values,
    grid,
    setFieldValue,
    children,
  } = props;
  const classes = useStyles();

  return (
    <Form className={classes.formControl}>
      <Grid container spacing={2}>
        <Grid item xs={12} {...grid}>
          <TextField
            name="tenPhim"
            variant="outlined"
            fullWidth
            label={
              <TextTranslation id="container.Admin.MovieManage.MovieName" />
            }
            color="secondary"
            onChange={handleChange}
            value={values.tenPhim}
            error={errors.tenPhim && touched.tenPhim}
            helperText={
              errors.tenPhim && touched.tenPhim ? errors.tenPhim : null
            }
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            name="biDanh"
            variant="outlined"
            fullWidth
            label={
              <TextTranslation id="container.Admin.MovieManage.MovieForm.CodeName" />
            }
            color="secondary"
            onChange={handleChange}
            value={values.biDanh}
            error={errors.biDanh && touched.biDanh}
            helperText={errors.biDanh && touched.biDanh ? errors.biDanh : null}
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            name="trailer"
            variant="outlined"
            fullWidth
            label="Trailer"
            color="secondary"
            onChange={handleChange}
            value={values.trailer}
            error={errors.trailer && touched.trailer}
            helperText={
              errors.trailer && touched.trailer ? errors.trailer : null
            }
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            type="file"
            name="hinhAnh"
            variant="outlined"
            fullWidth
            label={
              <TextTranslation id="container.Admin.MovieManage.MovieImage" />
            }
            InputLabelProps={{
              shrink: true,
            }}
            color="secondary"
            onChange={(event) =>
              setFieldValue('hinhAnh', event.target.files[0])
            }
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <KeyboardDatePicker
            name="ngayKhoiChieu"
            fullWidth
            inputVariant="outlined"
            label={
              <TextTranslation id="container.Admin.MovieManage.ReleaseDate" />
            }
            color="secondary"
            format="dd/MM/yyyy"
            onChange={(value) => setFieldValue('ngayKhoiChieu', value)}
            value={values.ngayKhoiChieu}
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            type="text"
            name="moTa"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            label={
              <TextTranslation id="container.Admin.MovieManage.MovieDescription" />
            }
            color="secondary"
            onChange={handleChange}
            value={values.moTa}
            error={errors.moTa && touched.moTa}
            helperText={errors.moTa && touched.moTa ? errors.moTa : null}
          />
        </Grid>
        {/* <Grid item xs={12} {...grid}>
          <TextField
            type="text"
            name="danhGia"
            variant="outlined"
            fullWidth
            label={<TextTranslation id="container.Admin.MovieManage.Review" />}
            color="secondary"
            onChange={handleChange}
            value={values.danhGia}
            error={errors.danhGia && touched.danhGia}
            helperText={
              errors.danhGia && touched.danhGia ? errors.danhGia : null
            }
          />
        </Grid> */}
      </Grid>
      {children}
    </Form>
  );
}

MovieForm.propTypes = {
  errors: PropTypes.any,
  touched: PropTypes.any,
  handleChange: PropTypes.func,
  values: PropTypes.any,
  grid: PropTypes.any,
  setFieldValue: PropTypes.any,
  children: PropTypes.node,
};
