import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SignUpForm from '../../../Auth/SignUp/SignUpForm';
import { SignupSchema } from '../../../Auth/SignUp/SignUpSchema';
import { TextTranslation } from '../../../Language/TextTranslation';
import { actFetchAddUserRequest, actResetAddUSer } from '../module/actions';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    marginLeft: 0,
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 68px)',
    },
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '50px 0',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

export default function AddUser() {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  // Set state
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messError, setMessError] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);
  // Geet state from store
  const addUser = useSelector((state) => state.userManageReducer.addUser);
  const errorAddUser = useSelector(
    (state) => state.userManageReducer.errorAddUser,
  );

  // Did mount
  React.useEffect(() => {
    // Reset add state from store
    dispatch(actResetAddUSer());
    // Set alert and dialog off
    setOpenAlert(false);
    setOpenDialog(false);
  }, [dispatch]);

  // Update openAlert when error occurs, and open alert sign up success
  React.useEffect(() => {
    if (errorAddUser) {
      setOpenAlert(true);
      setMessError(errorAddUser.response.data);
    }
    // Check info user has sign in successful
    if (Object.keys(addUser).length > 0) {
      setOpenDialog(true);
    }
  }, [errorAddUser, addUser]);

  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div className={classes.wrapper}>
      <Card>
        <CardHeader
          title={<TextTranslation id="container.Admin.UserManage.AddUserBtn" />}
        />
        <CardContent>
          <Formik
            initialValues={{
              taiKhoan: '',
              hoTen: '',
              email: '',
              matKhau: '',
              soDt: '',
              maLoaiNguoiDung: 'QuanTri',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(actFetchAddUserRequest({ ...values, maNhom: 'GP05' }));
            }}
          >
            {({ errors, handleChange, touched, values }) => (
              <SignUpForm
                errors={errors}
                handleChange={handleChange}
                touched={touched}
                values={values}
                edit
                grid={{ md: 6 }}
              >
                <CardActions className={classes.button}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    startIcon={<SaveIcon />}
                  >
                    <TextTranslation id="container.Admin.MovieManage.SaveBtn" />
                  </Button>
                </CardActions>
              </SignUpForm>
            )}
          </Formik>
        </CardContent>
      </Card>
      {/* Display when sign in have error */}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {messError}
        </Alert>
      </Snackbar>
      {/* Display when sign up successfully */}
      <Dialog disableBackdropClick open={openDialog}>
        <Box padding="10px" alignItems="center">
          <Typography>
            <TextTranslation id="container.Admin.UserManage.SuccessfulAddUser" />
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button
              style={{ marginRight: 10 }}
              color="primary"
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                // Move to user admin page
                history.push('/admin/user-manage');
                // Reset add state from store
                dispatch(actResetAddUSer());
              }}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
