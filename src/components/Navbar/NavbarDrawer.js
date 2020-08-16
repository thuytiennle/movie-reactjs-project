import {
  Box,
  Divider,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeSwitchButton } from '../Button';
import LanguageSelector from '../Select/LanguageSelector';
import NavbarScrollLink from './NavbarScrollLink';
import { NavbarSignInLink, NavbarUserInfoLink } from './NavbarUserInfo';
import { TextTranslation } from '../../containers/Language/TextTranslation';
import { actSignOut } from '../../containers/Auth/module/actions';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 240,
  },
}));

export default function NavbarDrawer() {
  // Get state from store
  const isSignIn = useSelector((state) => state.AuthReducer.isSignIn);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleToggleDrawer = useCallback(
    (isOpenDrawer) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(isOpenDrawer);
    },
    [],
  );

  return (
    <>
      <Box textAlign="right">
        <IconButton onClick={handleToggleDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </Box>
      {/* Drawer */}
      <SwipeableDrawer
        className={classes.drawer}
        open={openDrawer}
        anchor="right"
        onOpen={handleToggleDrawer(true)}
        onClose={handleToggleDrawer(false)}
      >
        <Box width="240px">
          {/* Sign in Button */}
          {isSignIn ? (
            <NavbarUserInfoLink
              name={JSON.parse(localStorage.getItem('UserSignIn')).taiKhoan}
            />
          ) : (
            <NavbarSignInLink />
          )}
          <Divider />
          {/* Navbar scroll link */}
          <NavbarScrollLink />
          <Divider />
          {/* Sign out Button */}
          <Box display="flex" justifyContent="center">
            <LanguageSelector />
            <ThemeSwitchButton />
          </Box>
          {isSignIn && (
            <Box display="flex" justifyContent="center">
              <Button onClick={() => dispatch(actSignOut())}>
                <TextTranslation id="components.Navbar.SignOut" />
              </Button>
            </Box>
          )}
        </Box>
      </SwipeableDrawer>
    </>
  );
}
