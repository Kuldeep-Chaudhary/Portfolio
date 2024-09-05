// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    lineHeight: 1.7,
  },
  palette: {
    text: {
      primary: '#999999',
    },
    background: {
      default: '#1f1f1f',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
      `,
    },
  },
});

export default theme;
