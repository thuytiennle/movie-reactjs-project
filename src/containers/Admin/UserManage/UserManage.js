import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from './UserTable';
import { actFetchListUserRequest, actCloseEditDialog } from './module/actions';
import UsersToolbar from './UserToolbar';
import UserEditDialog from './UserEditDialog';
import { Loader } from '../../../components/LoadingIndicator';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 68px)',
    backgroundColor: theme.palette.background.light,
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
  const searchUser = useSelector((state) => state.userManageReducer.searchUser);

  // Did Mount
  React.useEffect(() => {
    dispatch(actFetchListUserRequest());
  }, [dispatch]);

  if (loadingListUser) {
    return <Loader />;
  }

  return (
    <div className={classes.wrapper}>
      {listUser && listUser.length > 0 && (
        <>
          <UsersToolbar />
          <UserTable
            rows={searchUser && searchUser.length > 0 ? searchUser : listUser}
          />
          <UserEditDialog
            open={openEditDialog}
            onClose={() => dispatch(actCloseEditDialog())}
          />
        </>
      )}
    </div>
  );
}
