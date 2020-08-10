import { ThemeProvider } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import getTheme from '../../themes/index';
import { CustomThemeContext } from './CustomThemeContext';

export default function CustomThemeProvider({ children }) {
  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem('appTheme') || 'defaultTheme';

  // State to hold the selected theme name
  const [themeName, setThemeName] = useState(currentTheme);

  // Retrieve the theme object by theme name
  const theme = getTheme(themeName);

  const provider = {
    currentTheme: themeName,
    setTheme: (name) => {
      window.localStorage.setItem('appTheme', name);
      setThemeName(name);
    },
  };
  return (
    <CustomThemeContext.Provider value={provider}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
