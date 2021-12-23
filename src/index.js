import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    mode:"dark",
    primary: {
      light: '#c158dc',
      main: '#8e24aa',
      dark: '#5c007a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff1ff',
      main: '#e1bee7',
      dark: '#af8eb5',
      contrastText: '#fff',
    },
    background:{
      default:"#222222"
    }
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
