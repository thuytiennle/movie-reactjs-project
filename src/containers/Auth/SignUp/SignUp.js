import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  Snackbar,
  Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchSignUpRequest, actResetSignUp } from '../module/actions';
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
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const infoUserError = useSelector((state) => state.AuthReducer.infoUserError);
  const infoUser = useSelector((state) => state.AuthReducer.infoUser);
  // Set state
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messError, setMessError] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);

  // Did mount
  React.useEffect(() => {
    dispatch(actResetSignUp());
    // Set alert and dialog off
    setOpenAlert(false);
    setOpenDialog(false);
  }, [dispatch]);

  // Update openAlert when error occurs, and open alert sign up success
  React.useEffect(() => {
    if (infoUserError) {
      setOpenAlert(true);
      setMessError(infoUserError.response.data);
    }
    // Check info user has sign in successful
    if (Object.keys(infoUser).length > 0) {
      setOpenDialog(true);
    }
  }, [infoUserError, infoUser]);

  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

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
        {/* Display when sign in have error */}
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            {messError}
          </Alert>
        </Snackbar>
        {/* Display when sign up successfully */}
        <Dialog disableBackdropClick open={openDialog}>
          <Box padding="10px" alignItems="center">
            <Typography>
              <TextTranslation id="container.Auth.SignUp.SucessfulAuth" />
            </Typography>
            <Box className={classes.buttonContainer}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  // Move to sign in page
                  history.push('/sign-in');
                }}
              >
                Ok
              </Button>
            </Box>
          </Box>
        </Dialog>
      </div>
    </Container>
  );
}
