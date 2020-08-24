import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actSignInCheckAfterReload } from '../../containers/Auth/module/actions';
import { ThemeSwitchButton } from '../Button';
import { CustomRouterLink } from '../CustomLink';
import { LanguageSelector } from '../Select';
import { NavbarUserInfo } from './NavbarUserInfo';

const useStyles = makeStyles(() => ({
  appbar: {
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1250,
    padding: '0 10px',
  },
}));

export default function DashBoardNavBar(props) {
  const { onSidebarOpen } = props;
  // eslint-disable-next-line global-require
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  const classes = useStyles();
  const dispatch = useDispatch();
  // Get state from store
  const isSignIn = useSelector((state) => state.AuthReducer.isSignIn);

  // DidMount
  useEffect(() => {
    // Check if user sign in after reload
    if (localStorage.getItem('UserSignIn')) {
      dispatch(actSignInCheckAfterReload());
    }
  }, [dispatch]);

  return (
    <AppBar color="default" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <CustomRouterLink to="/admin" onClick={scroll.scrollToTop}>
          <Typography variant="h3" color="secondary">
            unix
          </Typography>
          <Typography variant="caption" color="secondary">
            dashboard
          </Typography>
        </CustomRouterLink>
        {/* THEME, LANGUAGE MODE */}
        <Box display={{ xs: 'none', lg: 'flex' }} alignItems="center">
          <LanguageSelector />
          <ThemeSwitchButton />
          {/* Check if user login then show sign in or sign out button */}
          {isSignIn && (
            <NavbarUserInfo
              name={JSON.parse(localStorage.getItem('UserSignIn')).taiKhoan}
            />
          )}
        </Box>
        {/* Toggle Menu */}
        <Hidden lgUp>
          <Box textAlign="right">
            <IconButton onClick={onSidebarOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

DashBoardNavBar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
