import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';
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

export default function ShowTimeForm(props) {
  const { errors, handleChange, touched, values, setFieldValue } = props;
  const classes = useStyles();
  return (
    <Form className={classes.formControl}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink>
              <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.CinemaComplex" />
            </InputLabel>
            <Select native onChange={handleChange}>
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink>
              <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.CinemaBranch" />
            </InputLabel>
            <Select native onChange={handleChange}>
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink>
              <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.Room" />
            </InputLabel>
            <Select native onChange={handleChange}>
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <TextField
            name="thoiLuong"
            variant="outlined"
            fullWidth
            label={<TextTranslation id="container.Profile.Movie Duration" />}
            color="secondary"
            onChange={handleChange}
            value={values.tenPhim}
            InputLabelProps={{ shrink: true }}
            error={errors.tenPhim && touched.tenPhim}
            helperText={
              errors.tenPhim && touched.tenPhim ? errors.tenPhim : null
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="giaVe"
            variant="outlined"
            fullWidth
            label={<TextTranslation id="container.Profile.TicketPrice" />}
            color="secondary"
            onChange={handleChange}
            value={values.tenPhim}
            InputLabelProps={{ shrink: true }}
            error={errors.tenPhim && touched.tenPhim}
            helperText={
              errors.tenPhim && touched.tenPhim ? errors.tenPhim : null
            }
          />
        </Grid>
      </Grid>
      <Box width="100%" margin="10px" display="flex" justifyContent="center">
        <Button type="submit" variant="contained" color="secondary">
          <TextTranslation id="container.Admin.MovieManage.SaveBtn" />
        </Button>
      </Box>
    </Form>
  );
}

ShowTimeForm.propTypes = {
  errors: PropTypes.any,
  touched: PropTypes.any,
  handleChange: PropTypes.func,
  values: PropTypes.any,
  setFieldValue: PropTypes.any,
};
