import {
  AppBar,
  Box,
  Hidden,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextTranslation } from '../../containers/Language/TextTranslation';
import { ThemeSwitchButton } from '../Button';
import { CustomRouterLink } from '../CustomLink';
import { LanguageSelector } from '../Select';
import NavbarScrollLink from './NavbarScrollLink';
import { NavbarUserInfo } from './NavbarUserInfo';
import NavbarDrawer from './HomeNavbarDrawer';
import { actSignInCheckAfterReload } from '../../containers/Auth/module/actions';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1250,
    padding: '0 10px',
  },
}));

export default function NavBar() {
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
    <AppBar color="default">
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <CustomRouterLink to="/" onClick={scroll.scrollToTop}>
          <Typography variant="h3" color="secondary" noWrap>
            unix
          </Typography>
        </CustomRouterLink>
        {/* NavbarScrollLink */}
        <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
          <NavbarScrollLink />
        </Box>
        {/* THEME, LANGUAGE MODE */}
        <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
          <LanguageSelector />
          <ThemeSwitchButton />
          {/* Check if user login then show sign in or sign out button */}
          {isSignIn ? (
            <NavbarUserInfo
              name={JSON.parse(localStorage.getItem('UserSignIn')).taiKhoan}
            />
          ) : (
            <CustomRouterLink variant="outlined" to="/sign-in">
              <TextTranslation id="components.Navbar.SignIn" />
            </CustomRouterLink>
          )}
        </Box>
        {/* Toggle Menu */}
        <Hidden mdUp>
          <NavbarDrawer anchor="right" />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
