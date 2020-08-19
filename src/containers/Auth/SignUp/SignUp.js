import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchSignUpRequest } from '../module/actions';
import SignUpForm from './SignUpForm';
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

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

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
          {({ errors, handleChange, touched, values }) => (
            <SignUpForm
              errors={errors}
              handleChange={handleChange}
              touched={touched}
              values={values}
            >
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
            </SignUpForm>
          )}
        </Formik>
      </div>
    </Container>
  );
}
