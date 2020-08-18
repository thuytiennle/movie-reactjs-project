import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from './UserTable';
import { actFetchListUserRequest } from './module/actions';
import UsersToolbar from './UserToolbar';

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

  // Did Mount
  React.useEffect(() => {
    dispatch(actFetchListUserRequest());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      {listUser && listUser.length > 0 && (
        <>
          <UsersToolbar />
          <UserTable rows={listUser} />
        </>
      )}
    </div>
  );
}
