import { createContext } from 'react';

// Create Theme Context, set default values for params
export const CustomThemeContext = createContext({
  currentTheme: 'defaultTheme',
  setTheme: null,
});
