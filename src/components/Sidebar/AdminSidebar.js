import { useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { DashBoardNavBar } from '../Navbar';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 68,
    },
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
  },
}));

const AdminSidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <DashBoardNavBar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
    </div>
  );
};

export default AdminSidebar;
