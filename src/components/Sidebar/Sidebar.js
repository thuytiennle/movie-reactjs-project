import { Drawer } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TextTranslation } from '../../containers/Language/TextTranslation';
import SidebarNav from './SidebarNav';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 68,
      height: 'calc(100% - 68px)',
    },
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      id: 'userManage',
      title: <TextTranslation id="container.Admin.UserManage.Sidebar" />,
      href: '/admin/user-manage',
      icon: <PeopleIcon />,
    },
    {
      id: 'movieManage',
      title: <TextTranslation id="container.Admin.MovieManage.Sidebar" />,
      href: '/admin/movie-manage',
      icon: <MovieFilterIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest}>
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
