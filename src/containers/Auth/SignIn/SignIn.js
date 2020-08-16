import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchSignInRequest } from '../module/actions';

const SignInSchema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required(<TextTranslation id="container.Auth.SignUp.AccountValidate" />),
  matKhau: yup
    .string()
    .min(6, <TextTranslation id="container.Auth.SignUp.PassValidateShort" />)
    .max(20, <TextTranslation id="container.Auth.SignUp.PassValidateLong" />)
    .required(<TextTranslation id="container.Auth.SignUp.PasswordValidate" />),
});

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
    marginTop: theme.spacing(1),
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
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: '/' } };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link to="/" variant="body2">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          <TextTranslation id="components.Navbar.SignIn" />
        </Typography>
        <Formik
          initialValues={{
            taiKhoan: '',
            matKhau: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            dispatch(actFetchSignInRequest(values, history, from));
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label={<TextTranslation id="container.Auth.SignIn.Account" />}
                name="taiKhoan"
                color="secondary"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                error={errors.taiKhoan && touched.taiKhoan}
                helperText={
                  errors.taiKhoan && touched.taiKhoan ? errors.taiKhoan : null
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="matKhau"
                label={<TextTranslation id="container.Auth.SignIn.Password" />}
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
                onChange={handleChange}
                error={errors.matKhau && touched.matKhau}
                helperText={
                  errors.matKhau && touched.matKhau ? errors.matKhau : null
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                <TextTranslation id="components.Navbar.SignIn" />
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className={classes.routerLink} to="/">
                    <TextTranslation id="container.PageNotFound.HomePageButton" />
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.routerLink} to="/sign-up">
                    <TextTranslation id="components.Navbar.SignUp" />
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
