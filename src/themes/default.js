import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#cc4444',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
      dark: '#e5e5e5',
      light: '#fefefe',
    },
    titleBar: {
      main: '#eeeeee',
      contrastText: '#222222',
    },
  },
});

export default theme;
