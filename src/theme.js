import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4B8D', // Rosa WTM
      light: '#FF7BA7',
      dark: '#CC3A70',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6A1B9A', // Púrpura PionerasDev
      light: '#9C4DCC',
      dark: '#38006B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#6A1B9A',
    },
    h2: {
      fontWeight: 600,
      color: '#FF4B8D',
    },
    h3: {
      fontWeight: 600,
      color: '#6A1B9A',
    },
    h4: {
      fontWeight: 500,
      color: '#FF4B8D',
    },
    h5: {
      fontWeight: 500,
      color: '#6A1B9A',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme; 