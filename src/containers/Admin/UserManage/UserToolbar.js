import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchInput } from '../../../components/SearchInput';
import { TextTranslation } from '../../Language/TextTranslation';
import { actFetchSearchUserRequest } from './module/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
  },
  row: {
    height: '42px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
  routerButton: {
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.titleBar.main,
    },
  },
}));

const UsersToolbar = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(actFetchSearchUserRequest(value));
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder={TextTranslation({
            id: 'container.Admin.UserManage.SearchUser',
          })}
          onChange={handleChange}
        />
        <Button
          className={classes.routerButton}
          variant="contained"
          component={Link}
          to="/admin/user-manage/add-user"
        >
          <TextTranslation id="container.Admin.UserManage.AddUserBtn" />
        </Button>
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string,
};

export default UsersToolbar;
