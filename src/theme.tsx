import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'black',
    },
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    htmlFontSize: 10,
    fontSize: 14,
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1rem',
      },
    },
  },
});

export default theme;
