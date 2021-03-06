import {
  Box,
  Button,
  Dialog,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/LoadingIndicator';
import { SimpleTabs } from '../../../components/Tabs';
import { actSignOut } from '../../Auth/module/actions';
import { TextTranslation } from '../../Language/TextTranslation';
import {
  actFetchUserProfileRequest,
  actFetchUserProfileUpdateReset,
} from './module/actions';
import ProfileBookingHistory from './ProfileBookingHistory';
import ProfileDetail from './ProfileDetail';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '68px',
    backgroundColor: theme.palette.background.dark,
    padding: '32px 0 100px',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));
export default function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Get state from store
  const userProfile = useSelector((state) => state.profileReducer.userProfile);
  const userProfileUpdated = useSelector(
    (state) => state.profileReducer.userProfileUpdated,
  );
  const loadingUserProfile = useSelector(
    (state) => state.profileReducer.loadingUserProfile,
  );
  const errorUserProfileUpdated = useSelector(
    (state) => state.profileReducer.errorUserProfileUpdated,
  );

  // State
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogMess, setOpenDialogMess] = React.useState('');

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

  React.useEffect(() => {
    // Check if object is empty
    if (Object.keys(userProfileUpdated).length > 0) {
      setOpenDialog(true);
      setOpenDialogMess(
        <TextTranslation id="container.Profile.UpdateSuccess" />,
      );
    }
    if (Object.keys(errorUserProfileUpdated).length > 0) {
      setOpenDialog(true);
      setOpenDialogMess(errorUserProfileUpdated.response.data);
    }
  }, [userProfileUpdated, errorUserProfileUpdated]);

  const handleDialog = () => {
    if (Object.keys(userProfileUpdated).length > 0) {
      dispatch(actSignOut());
      // Reset previous update data
      dispatch(actFetchUserProfileUpdateReset());
      // Close Dialog
      setOpenDialog(false);
    }
    if (Object.keys(errorUserProfileUpdated).length > 0) {
      // Off dialog
      setOpenDialog(false);
    }
  };

  if (loadingUserProfile) {
    return <Loader />;
  }

  return (
    <div className={classes.wrapper}>
      {/* Check if object is empty */}
      {Object.keys(userProfile).length > 0 && (
        <Grid container style={{ padding: 20 }}>
          <Grid item md={4} xs={12}>
            <Paper style={{ margin: 10, padding: 10 }}>
              <Box display="flex" alignItems="center">
                <AccountCircle
                  style={{ fontSize: '80px', marginRight: '5px' }}
                />
                <div>
                  <Typography color="secondary" variant="h6">
                    {userProfile.taiKhoan}
                  </Typography>
                  <Typography variant="body1">{userProfile.email}</Typography>
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={8} xs={12}>
            <Paper style={{ margin: 10, padding: 10 }}>
              <SimpleTabs
                tabs={[
                  {
                    tabName: (
                      <TextTranslation id="container.Profile.ProfileTitle" />
                    ),
                    // If renderHTML null then tabContent gets ''
                    tabContent: (
                      <ProfileDetail
                        user={{
                          taiKhoan: userProfile.taiKhoan,
                          hoTen: userProfile.hoTen,
                          email: userProfile.email,
                          matKhau: userProfile.matKhau,
                          soDt: userProfile.soDT,
                        }}
                      />
                    ),
                  },
                  {
                    tabName: (
                      <TextTranslation id="container.Profile.BookingHistory" />
                    ),
                    tabContent: (
                      <ProfileBookingHistory
                        booking={userProfile.thongTinDatVe}
                      />
                    ),
                  },
                ]}
              />
            </Paper>
          </Grid>
        </Grid>
      )}
      {/* Display dialog when user update is successful and sign out */}
      <Dialog disableBackdropClick open={openDialog}>
        <Box padding="10px" alignItems="center">
          <Typography>{dialogMess}</Typography>
          <Box className={classes.buttonContainer}>
            <Button variant="outlined" color="secondary" onClick={handleDialog}>
              OK
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
