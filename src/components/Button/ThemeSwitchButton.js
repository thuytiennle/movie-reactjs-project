import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import React, { useContext } from 'react';
import { CustomThemeContext } from '../../containers/Theme/CustomThemeContext';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 5px',
  },
}));

export default function ThemeSwitch() {
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const classes = useStyles();

  const handleThemeChange = () => {
    setTheme(currentTheme === 'darkTheme' ? 'defaultTheme' : 'darkTheme');
  };

  return (
    <IconButton
      className={classes.root}
      edge="end"
      // color="inherit"
      aria-label="mode"
      onClick={handleThemeChange}
    >
      {currentTheme === 'darkTheme' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
