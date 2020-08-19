import { Grid, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchSignUpUserTypeRequest } from '../module/actions';

const engUserType = [
  {
    maLoaiNguoiDung: 'KhachHang',
    tenLoai: 'Customer',
  },
  {
    maLoaiNguoiDung: 'QuanTri',
    tenLoai: 'Admin',
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlSelect: {
    width: '100%',
  },
  label: {
    color: theme.palette.secondary.main,
  },
}));

export default function SignUpForm(props) {
  const { errors, touched, handleChange, values, edit, grid, children } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  // Get state from store
  const userType = useSelector((state) => state.AuthReducer.userType);

  // Get language from local storage
  const language =
    localStorage.getItem('rcml-language') ||
    window.navigator.language.substring(0, 2);

  // Did Mount
  React.useEffect(() => {
    dispatch(actFetchSignUpUserTypeRequest());
  }, [dispatch]);

  return (
    <Form className={classes.formControl}>
      <Grid container spacing={2}>
        <Grid item xs={12} {...grid}>
          <TextField
            // Update or edit info dont allow to change account
            disabled={edit === 'update' ? Boolean(true) : Boolean(false)}
            name="taiKhoan"
            variant="outlined"
            fullWidth
            id="taiKhoan"
            label={<TextTranslation id="container.Auth.SignIn.Account" />}
            color="secondary"
            onChange={handleChange}
            value={values.taiKhoan}
            error={errors.taiKhoan && touched.taiKhoan}
            helperText={
              errors.taiKhoan && touched.taiKhoan ? errors.taiKhoan : null
            }
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            variant="outlined"
            fullWidth
            id="hoTen"
            label={<TextTranslation id="container.Auth.SignUp.Name" />}
            name="hoTen"
            color="secondary"
            value={values.hoTen}
            onChange={handleChange}
            error={errors.hoTen && touched.hoTen}
            helperText={errors.hoTen && touched.hoTen ? errors.hoTen : null}
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            variant="outlined"
            fullWidth
            name="matKhau"
            label={<TextTranslation id="container.Auth.SignIn.Password" />}
            // Edit or update info which needs to see password
            type={edit ? 'text' : 'password'}
            id="matKhau"
            color="secondary"
            value={values.matKhau}
            onChange={handleChange}
            error={errors.matKhau && touched.matKhau}
            helperText={
              errors.matKhau && touched.matKhau ? errors.matKhau : null
            }
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label="Email"
            name="email"
            color="secondary"
            value={values.email}
            onChange={handleChange}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : null}
          />
        </Grid>
        <Grid item xs={12} {...grid}>
          <TextField
            variant="outlined"
            fullWidth
            id="soDt"
            label={<TextTranslation id="container.Auth.SignUp.Phone" />}
            name="soDt"
            color="secondary"
            value={values.soDt}
            onChange={handleChange}
            error={errors.soDt && touched.soDt}
            helperText={errors.soDt && touched.soDt ? errors.soDt : null}
          />
        </Grid>
        {/* Sign up dont need choose user type since backend automatically set userType is customer, but when update user in admin page we allow to update user types */}
        {edit && (
          <Grid item xs={12} {...grid}>
            <Select
              native
              color="secondary"
              variant="outlined"
              className={classes.formControlSelect}
              // value={user}
              name="maLoaiNguoiDung"
              value={values.maLoaiNguoiDung}
              onChange={handleChange}
            >
              {userType &&
                userType.length > 0 &&
                userType.map((item) => (
                  <option
                    key={`signUp-${item.maLoaiNguoiDung}`}
                    value={item.maLoaiNguoiDung}
                  >
                    {language === 'vi'
                      ? item.tenLoai
                      : engUserType.find(
                          (engItem) =>
                            engItem.maLoaiNguoiDung === item.maLoaiNguoiDung,
                        ).tenLoai}
                  </option>
                ))}
            </Select>
          </Grid>
        )}
      </Grid>
      {children}
    </Form>
  );
}

SignUpForm.propTypes = {
  errors: PropTypes.any,
  touched: PropTypes.any,
  handleChange: PropTypes.func,
  values: PropTypes.any,
  edit: PropTypes.any,
  grid: PropTypes.any,
  children: PropTypes.node,
};
