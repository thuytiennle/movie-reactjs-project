import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignUpForm from '../../Auth/SignUp/SignUpForm';
import { SignupSchema } from '../../Auth/SignUp/SignUpSchema';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchUpdateUserRequest } from './module/actions';

export default function UserEditDialog(props) {
  const { open, onClose } = props;
  // Get editUSer from store
  const editUser = useSelector((state) => state.userManageReducer.editUser);
  const dispatch = useDispatch();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
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
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="submit" onClick={onClose} color="secondary">
                    <TextTranslation id="container.Admin.UserManage/MovieManage.UpdateBtn" />
                  </Button>
                </DialogActions>
              </SignUpForm>
            )}
          </Formik>
        )}
      </DialogContent>
    </Dialog>
  );
}

UserEditDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
