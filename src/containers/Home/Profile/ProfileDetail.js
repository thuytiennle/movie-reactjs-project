import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { SignupSchema } from '../../Auth/SignUp/SignUpSchema';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchUserProfileUpdateRequest } from './module/actions';

function ProfileDetail(props) {
  const { user } = props;
  const dispatch = useDispatch();

  return (
    <Card>
      {user && (
        <Formik
          initialValues={user}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // dispatch(actFetchSignUpRequest(values));
            if (localStorage.getItem('UserSignIn')) {
              const { maLoaiNguoiDung, maNhom } = JSON.parse(
                localStorage.getItem('UserSignIn'),
              );
              const userUpdate = { ...values, maLoaiNguoiDung, maNhom };
              // Call API update user
              dispatch(actFetchUserProfileUpdateRequest(userUpdate));
              // console.log(userUpdate);
              // Updating has been finished show succes nofication then sign out
            }
          }}
        >
          {({ errors, handleChange, touched, values }) => (
            <Form autoComplete="off" noValidate>
              <CardHeader
                subheader={
                  <TextTranslation id="container.Profile.UpdateTitle" />
                }
                title={<TextTranslation id="container.Profile.ProfileTitle" />}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label={
                        <TextTranslation id="container.Auth.SignIn.Account" />
                      }
                      margin="dense"
                      name="taiKhoan"
                      color="secondary"
                      onChange={handleChange}
                      value={values.taiKhoan}
                      variant="outlined"
                      error={errors.taiKhoan && touched.taiKhoan}
                      helperText={
                        errors.taiKhoan && touched.taiKhoan
                          ? errors.taiKhoan
                          : null
                      }
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label={
                        <TextTranslation id="container.Auth.SignUp.Name" />
                      }
                      margin="dense"
                      name="hoTen"
                      color="secondary"
                      onChange={handleChange}
                      value={values.hoTen}
                      variant="outlined"
                      error={errors.hoTen && touched.hoTen}
                      helperText={
                        errors.hoTen && touched.hoTen ? errors.hoTen : null
                      }
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label={
                        <TextTranslation id="container.Auth.SignIn.Password" />
                      }
                      margin="dense"
                      name="matKhau"
                      color="secondary"
                      onChange={handleChange}
                      value={values.matKhau}
                      variant="outlined"
                      error={errors.matKhau && touched.matKhau}
                      helperText={
                        errors.matKhau && touched.matKhau
                          ? errors.matKhau
                          : null
                      }
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      margin="dense"
                      name="email"
                      color="secondary"
                      onChange={handleChange}
                      value={values.email}
                      variant="outlined"
                      error={errors.email && touched.email}
                      helperText={
                        errors.email && touched.email ? errors.email : null
                      }
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label={
                        <TextTranslation id="container.Auth.SignUp.Phone" />
                      }
                      margin="dense"
                      color="secondary"
                      name="soDt"
                      onChange={handleChange}
                      value={values.soDt}
                      variant="outlined"
                      error={errors.soDt && touched.soDt}
                      helperText={
                        errors.soDt && touched.soDt ? errors.soDt : null
                      }
                    />
                  </Grid>
                  {/* Only admin can change uertype. User cannot do that so profile dont have update usertype(maLoaiNguoiDung) */}
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button type="submit" color="secondary" variant="contained">
                  <TextTranslation id="container.Profile.UpdateProfile" />
                </Button>
              </CardActions>
            </Form>
          )}
        </Formik>
      )}
    </Card>
  );
}

ProfileDetail.propTypes = {
  user: PropTypes.object,
};

export default memo(ProfileDetail);
