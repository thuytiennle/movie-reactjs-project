import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actFetchUserProfileRequest } from './module/actions';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '68px',
    backgroundColor: theme.palette.background.dark,
    height: 'calc(100vh - 68px)',
  },
}));
export default function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Did Mount
  React.useEffect(() => {
    if (localStorage.getItem('UserSignIn')) {
      dispatch(
        actFetchUserProfileRequest({
          taiKhoan: JSON.parse(localStorage.getItem('UserSignIn')).taiKhoan,
        }),
      );
    }
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <Grid container style={{ padding: 20 }}>
        <Grid item sm={5}>
          <Paper style={{ padding: 10 }}>
            <Typography variant="h6">Thông tin cá nhân</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
