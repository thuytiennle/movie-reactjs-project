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
import { DateTimePicker } from '@material-ui/pickers';
import { Form } from 'formik';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchCinemaComplexRequest } from '../../Home/Cinema/modules/actions';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchCiemaBranchInfoRequest } from './module/actions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function ShowTimeForm(props) {
  const { errors, handleChange, touched, values, setFieldValue } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  // Set state
  const [cinemaBranchSelected, setCinemaBranchSelected] = React.useState('');
  // Get state from store
  const cinemaComplex = useSelector(
    (state) => state.cinemaReducer.cinemaComplex,
  );
  const cinemaBranch = useSelector(
    (state) => state.movieManageReducer.cinemaBranch,
  );

  // Did mount
  // Get list cinemacomplex from server
  React.useEffect(() => {
    dispatch(actFetchCinemaComplexRequest());
  }, [dispatch]);

  // Call API get cinemaBranch info based on cinemaComplex id
  React.useEffect(() => {
    if (values.heThongRap) {
      dispatch(actFetchCiemaBranchInfoRequest(values.heThongRap));
    }
  }, [dispatch, values.heThongRap]);

  // setCinemaSelected
  React.useEffect(() => {
    if (values.cumRap) {
      setCinemaBranchSelected(values.cumRap);
    }
  }, [values.cumRap]);

  return (
    <Form className={classes.formControl}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink>
              <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.CinemaComplex" />
            </InputLabel>
            <Select
              name="heThongRap"
              native
              onChange={handleChange}
              value={values.heThongRap}
            >
              <option value="">
                {TextTranslation({
                  id:
                    'container.Admin.MovieManage.ShowTimeCreation.CinemaSelect',
                })}
              </option>
              {cinemaComplex &&
                cinemaComplex.length > 0 &&
                cinemaComplex.map((item) => (
                  <option
                    key={`showTimeDialog-${item.maHeThongRap}`}
                    value={item.maHeThongRap}
                  >
                    {item.tenHeThongRap}
                  </option>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink>
              <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.CinemaBranch" />
            </InputLabel>
            <Select
              name="cumRap"
              native
              value={values.cumRap}
              onChange={handleChange}
            >
              <option value="">
                {TextTranslation({
                  id:
                    cinemaBranch && cinemaBranch.length > 0
                      ? 'container.Admin.MovieManage.ShowTimeCreation.CinemaBranchSelect'
                      : 'container.Admin.MovieManage.ShowTimeCreation.CinemaComplexRequest',
                })}
              </option>
              {cinemaBranch &&
                cinemaBranch.length > 0 &&
                cinemaBranch.map((item) => (
                  <option
                    key={`showTimeDialog-${item.maCumRap}`}
                    value={item.maCumRap}
                  >
                    {item.tenCumRap}
                  </option>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="filled" fullWidth>
            <InputLabel shrink>
              <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.Room" />
            </InputLabel>
            <Select
              name="maRap"
              native
              value={values.maRap}
              onChange={handleChange}
            >
              <option value="">
                {TextTranslation({
                  id:
                    cinemaBranchSelected &&
                    cinemaBranch &&
                    cinemaBranch.length > 0
                      ? 'container.Admin.MovieManage.ShowTimeCreation.RoomSelect'
                      : 'container.Admin.MovieManage.ShowTimeCreation.CinemaBranchRequest',
                })}
              </option>
              {cinemaBranchSelected &&
                cinemaBranch &&
                cinemaBranch.length > 0 &&
                cinemaBranch.map(
                  (item) =>
                    item.maCumRap === cinemaBranchSelected &&
                    item.danhSachRap.map((room) => (
                      <option
                        key={`showTimeDialog-${room.maRap}`}
                        value={room.maRap}
                      >
                        {room.tenRap}
                      </option>
                    )),
                )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateTimePicker
            name="ngayChieuGioChieu"
            label={
              <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.DateTimePicker" />
            }
            inputVariant="outlined"
            fullWidth
            value={values.ngayChieuGioChieu}
            format="dd/MM/yyyy hh.mm a"
            onChange={(value) => setFieldValue('ngayChieuGioChieu', value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="thoiLuong"
            variant="outlined"
            fullWidth
            label={<TextTranslation id="container.Profile.Movie.Duration" />}
            color="secondary"
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={errors.thoiLuong && touched.thoiLuong}
            helperText={
              errors.thoiLuong && touched.thoiLuong ? errors.thoiLuong : null
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
            value={values.giaVe}
            InputLabelProps={{ shrink: true }}
            error={errors.giaVe && touched.giaVe}
            helperText={errors.giaVe && touched.giaVe ? errors.giaVe : null}
          />
        </Grid>
      </Grid>
      <Box width="100%" margin="10px" display="flex" justifyContent="center">
        <Button type="submit" variant="contained" color="secondary">
          <TextTranslation id="container.Admin.MovieManage.ShowTimeCreation.AddShowTimeBtn" />
        </Button>
      </Box>
    </Form>
  );
}

export default memo(ShowTimeForm);

ShowTimeForm.propTypes = {
  errors: PropTypes.any,
  touched: PropTypes.any,
  handleChange: PropTypes.func,
  values: PropTypes.any,
  setFieldValue: PropTypes.any,
};
