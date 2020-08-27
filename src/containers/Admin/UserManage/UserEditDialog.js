import { Snackbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from '../../Auth/SignUp/SignUpForm';
import { SignupSchema } from '../../Auth/SignUp/SignUpSchema';
import { TextTranslation } from '../../Language/TextTranslation';
import {
  actFetchUpdateUserRequest,
  actCloseEditDialog,
  actFetchListUserRequest,
  actFetchSearchUserRequest,
  actResetUpdateUSer,
} from './module/actions';

export default function UserEditDialog(props) {
  const { open } = props;
  const dispatch = useDispatch();
  // Set state
  const [openAlert, setOpenAlert] = React.useState(false);
  const [snackbarMess, setSnackbarMess] = React.useState('');
  // Get editUSer from store
  const editUser = useSelector((state) => state.userManageReducer.editUser);
  const keyword = useSelector((state) => state.userManageReducer.keyword);
  const updateUser = useSelector((state) => state.userManageReducer.updateUser);
  const errorUpdateUser = useSelector(
    (state) => state.userManageReducer.errorUpdateUser,
  );

  // Did mount
  React.useEffect(() => {
    // Set alert and dialog off
    setOpenAlert(false);
  }, [dispatch]);

  // Update openAlert when error occurs, and open alert sign up success
  React.useEffect(() => {
    if (errorUpdateUser) {
      setOpenAlert(true);
      setSnackbarMess(errorUpdateUser.response.data);
    }
    // Check info user has sign in successful
    if (Object.keys(updateUser).length > 0) {
      setOpenAlert(true);
      setSnackbarMess(
        <TextTranslation id="container.Admin.UserManage.SuccessfulUpdateUser" />,
      );
    }
  }, [errorUpdateUser, updateUser]);

  // Close alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const handleCloseDialog = () => {
    // Close alert
    setOpenAlert(false);
    dispatch(actCloseEditDialog());
    // Load user
    dispatch(actFetchListUserRequest());
    dispatch(actFetchSearchUserRequest(keyword));
    // Reset all state of update user
    dispatch(actResetUpdateUSer());
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <TextTranslation id="container.Admin.UserManage.UpdateUser" />
      </DialogTitle>
      <DialogContent>
        {editUser && (
          <Formik
            initialValues={{
              taiKhoan: editUser.taiKhoan,
              hoTen: editUser.hoTen,
              email: editUser.email,
              matKhau: editUser.matKhau,
              soDt: editUser.soDt,
              maLoaiNguoiDung: editUser.maLoaiNguoiDung,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              dispatch(
                actFetchUpdateUserRequest({ ...values, maNhom: 'GP05' }),
              );
            }}
          >
            {({ errors, handleChange, touched, values }) => (
              <SignUpForm
                errors={errors}
                handleChange={handleChange}
                touched={touched}
                values={values}
                edit="update"
              >
                <DialogActions>
                  <Button onClick={handleCloseDialog}>Cancel</Button>
                  <Button type="submit" color="secondary">
                    <TextTranslation id="container.Admin.UserManage/MovieManage.UpdateBtn" />
                  </Button>
                </DialogActions>
              </SignUpForm>
            )}
          </Formik>
        )}
      </DialogContent>
      {/* Display when sign in have error */}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={errorUpdateUser ? 'error' : 'success'}
        >
          {snackbarMess}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

UserEditDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};
