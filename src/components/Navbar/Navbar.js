import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TextTranslation } from '../../containers/Language/TextTranslation';
import { ThemeSwitchButton } from '../Button';
import { CustomRouterLink, CustomScrollLink } from '../CustomLink';
import { LanguageSelector } from '../Select';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1250,
    padding: '0 10px',
  },
  container: {},
}));

export default function NavBar() {
  // eslint-disable-next-line global-require
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  const handleToggleDrawer = useCallback(
    (isOpenDrawer) => (event) => {
      if (pathname !== '/') {
        history.push('/');
      }
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(isOpenDrawer);
    },
    [pathname, history],
  );

  const renderList = useCallback(
    (drawer) => {
      return (
        <>
          <Box
            display={drawer ? '' : { xs: 'none', md: 'flex' }}
            alignItems="center"
          >
            {[
              {
                name: <TextTranslation id="components.Navbar.ShowTime" />,
                link: 'movie-show',
              },
              {
                name: <TextTranslation id="components.Navbar.Cinema" />,
                link: 'cinema',
              },
              {
                name: <TextTranslation id="components.Navbar.News" />,
                link: 'news',
              },
              {
                name: <TextTranslation id="components.Navbar.Discounts" />,
                link: 'discounts',
              },
            ].map((item, index) => (
              <CustomScrollLink
                display="block"
                key={`scroll-link-${index}`}
                offset={-50}
                to={item.link}
                delay={pathname !== '/' ? 5000 : 0}
                onClick={handleToggleDrawer(false)}
                onKeyDown={handleToggleDrawer(false)}
              >
                {item.name}
              </CustomScrollLink>
            ))}
          </Box>
          {/* LOGIN */}
          <Box
            display={drawer ? 'flex' : { xs: 'none', md: 'flex' }}
            justifyContent={drawer ? 'center' : ''}
            alignItems="center"
          >
            {/* THEME MODE */}
            <LanguageSelector />
            <ThemeSwitchButton />
            <CustomRouterLink variant="outlined" to="/login-in">
              <TextTranslation id="components.Navbar.SignIn" />
            </CustomRouterLink>
          </Box>
        </>
      );
    },
    [handleToggleDrawer, pathname],
  );

  return (
    <AppBar color="default">
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <CustomRouterLink to="/" onClick={scroll.scrollToTop}>
          <Typography variant="h3" color="secondary" noWrap>
            unix
          </Typography>
        </CustomRouterLink>
        {renderList()}
        {/* Toggle Menu */}
        <Hidden mdUp>
          <Box textAlign="right">
            <IconButton onClick={handleToggleDrawer(!openDrawer)}>
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Drawer */}
          <SwipeableDrawer
            open={openDrawer}
            width={200}
            anchor="top"
            onOpen={handleToggleDrawer(true)}
            onClose={handleToggleDrawer(false)}
          >
            {renderList('drawer')}
          </SwipeableDrawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
