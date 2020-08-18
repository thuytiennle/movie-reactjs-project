import {
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextTranslation } from '../../Language/TextTranslation';
import {
  actFetchSignUpRequest,
  actFetchSignUpUserTypeRequest,
} from '../module/actions';
import { SignupSchema } from './SignUpSchema';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  routerLink: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControlSelect: {
    width: '100%',
  },
}));

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

export default function SignUp() {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link to="/">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          <TextTranslation id="components.Navbar.SignUp" />
        </Typography>
        <Formik
          initialValues={{
            taiKhoan: '',
            hoTen: '',
            email: '',
            matKhau: '',
            soDt: '',
            maLoaiNguoiDung: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            dispatch(actFetchSignUpRequest(values));
            // console.log(values);
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="taiKhoan"
                    variant="outlined"
                    fullWidth
                    id="taiKhoan"
                    label={
                      <TextTranslation id="container.Auth.SignIn.Account" />
                    }
                    color="secondary"
                    onChange={handleChange}
                    error={errors.taiKhoan && touched.taiKhoan}
                    helperText={
                      errors.taiKhoan && touched.taiKhoan
                        ? errors.taiKhoan
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="hoTen"
                    label={<TextTranslation id="container.Auth.SignUp.Name" />}
                    name="hoTen"
                    color="secondary"
                    onChange={handleChange}
                    error={errors.hoTen && touched.hoTen}
                    helperText={
                      errors.hoTen && touched.hoTen ? errors.hoTen : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="matKhau"
                    label={
                      <TextTranslation id="container.Auth.SignIn.Password" />
                    }
                    type="password"
                    id="matKhau"
                    color="secondary"
                    onChange={handleChange}
                    error={errors.matKhau && touched.matKhau}
                    helperText={
                      errors.matKhau && touched.matKhau ? errors.matKhau : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    color="secondary"
                    onChange={handleChange}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="soDt"
                    label={<TextTranslation id="container.Auth.SignUp.Phone" />}
                    name="soDt"
                    color="secondary"
                    onChange={handleChange}
                    error={errors.soDt && touched.soDt}
                    helperText={
                      errors.soDt && touched.soDt ? errors.soDt : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControlSelect}
                  >
                    <InputLabel color="secondary">
                      <TextTranslation id="container.Auth.SignUp.SelectUser" />
                    </InputLabel>
                    <Select
                      native
                      color="secondary"
                      // value={user}
                      name="maLoaiNguoiDung"
                      onChange={handleChange}
                      label={
                        <TextTranslation id="container.Auth.SignUp.SelectUser" />
                      }
                    >
                      <option aria-label="None" value="" />
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
                                    engItem.maLoaiNguoiDung ===
                                    item.maLoaiNguoiDung,
                                ).tenLoai}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                <TextTranslation id="components.Navbar.SignUp" />
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link className={classes.routerLink} to="/sign-in">
                    <TextTranslation id="components.Navbar.SignIn" />
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
