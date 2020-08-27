import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/LoadingIndicator';
import {
  actFetchListUserRequest,
  actFetchSearchUserRequest,
} from './module/actions';
import UserEditDialog from './UserEditDialog';
import UserTable from './UserTable';
import UsersToolbar from './UserToolbar';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 68px)',
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  loaderDiv: {
    marginLeft: 0,
    backgroundColor: theme.palette.titleBar.main,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
  },
}));

export default function UserManage() {
  const classes = useStyle();
  const dispatch = useDispatch();
  // Get state from store
  const listUser = useSelector((state) => state.userManageReducer.listUser);
  const loadingListUser = useSelector(
    (state) => state.userManageReducer.loadingListUser,
  );
  const openEditDialog = useSelector(
    (state) => state.userManageReducer.openEditDialog,
  );
  const keyword = useSelector((state) => state.userManageReducer.keyword);
  const searchUser = useSelector((state) => state.userManageReducer.searchUser);

  // Did Mount
  React.useEffect(() => {
    dispatch(actFetchListUserRequest());
    dispatch(actFetchSearchUserRequest(keyword));
  }, []);

  if (loadingListUser) {
    return (
      <div className={classes.loaderDiv}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      {listUser && listUser.length > 0 && (
        <>
          <UsersToolbar />
          <UserTable rows={keyword ? searchUser : listUser} />
          <UserEditDialog open={openEditDialog} />
        </>
      )}
    </div>
  );
}
