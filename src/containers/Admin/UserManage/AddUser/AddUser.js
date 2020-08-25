import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import SignUpForm from '../../../Auth/SignUp/SignUpForm';
import { SignupSchema } from '../../../Auth/SignUp/SignUpSchema';
import { TextTranslation } from '../../../Language/TextTranslation';
import { actFetchAddUserRequest } from '../module/actions';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 68px)',
    backgroundColor: theme.palette.background.light,
    marginLeft: 0,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '50px 0',
  },
}));

export default function AddUser() {
  const classes = useStyle();
  const dispatch = useDispatch();
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
    </div>
  );
}
