import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import App from './App';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
