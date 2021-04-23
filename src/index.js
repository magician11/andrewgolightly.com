import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[50],
      secondary: blue[900]
    },
    secondary: {
      main: blue[500]
    },
    text: {
      primary: blue[50],
      secondary: blue[900]
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
