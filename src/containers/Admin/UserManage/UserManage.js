import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from './UserTable';
import { actFetchListUserRequest, actCloseEditDialog } from './module/actions';
import UsersToolbar from './UserToolbar';
import UserEditDialog from './UserEditDialog';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: '20px 20px 38px',
    backgroundColor: theme.palette.background.light,
  },
}));

export default function UserManage() {
  const classes = useStyle();
  const dispatch = useDispatch();
  // Get state from store
  const listUser = useSelector((state) => state.userManageReducer.listUser);
  const openEditDialog = useSelector(
    (state) => state.userManageReducer.openEditDialog,
  );
  const searchUser = useSelector((state) => state.userManageReducer.searchUser);

  // Did Mount
  React.useEffect(() => {
    dispatch(actFetchListUserRequest());
  }, [dispatch]);

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
