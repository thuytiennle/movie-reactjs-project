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
import { useDispatch, useSelector } from 'react-redux';
import { TextTranslation } from '../../../Language/TextTranslation';
import { actFetchAddMovieRequest } from '../module/actions';
import MovieForm from '../MovieForm';
import { MovieSchema } from '../MovieSchema';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginLeft: 0,
    padding: 20,
    height: 'calc(100vh - 68px)',
    backgroundColor: theme.palette.background.light,
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

export default function AddMovie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const FormData = require('form-data');

  const error = useSelector((state) => state.movieManageReducer.errorAddMovie);
  if (error) {
    console.log(error.response);
  }

  return (
    <div className={classes.wrapper}>
      <Card>
        <CardHeader
          title={
            <TextTranslation id="container.Admin.MovieManage.AddMovieBtn" />
          }
        />
        <CardContent>
          <Formik
            initialValues={{
              tenPhim: '',
              biDanh: '',
              trailer: '',
              hinhAnh: '',
              ngayKhoiChieu: '2020-01-01',
              moTa: '',
              // danhGia: '',
            }}
            validationSchema={MovieSchema}
            onSubmit={(values) => {
              const movie = {
                ...values,
                ngayKhoiChieu: new Date(
                  values.ngayKhoiChieu,
                ).toLocaleDateString('en-GB'),
                maNhom: 'GP05',
              };
              // Do JSON ko giữ đc file nên dùng formData. FormData sẽ bảo mật hơn
              // Sử dụng FormData để có thể gửi dữ liệu lên server
              // Bao gồm các loại dữ liệu và file
              const formdata = new FormData();
              for (let key in movie) {
                formdata.append(key, movie[key]);
              }
              dispatch(actFetchAddMovieRequest(formdata));
            }}
          >
            {(props) => (
              <MovieForm {...props} grid={{ md: 6 }}>
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
              </MovieForm>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
