import { createTheme, ThemeProvider } from '@mui/material';
import AuthContext from './components/AuthContext'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

const theme = createTheme({
  palette: {
    primary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6a52b3',
      main: '#4527a0',
      dark: '#301b70',
      contrastText: '#fff',
    },
  },
})

function App() {
  const Context = AuthContext
  const [token, setToken] = useState(null)
  if (!token) console.log("User not connected")
  else console.log("User is connected")

  return (
    <Context.Provider value={[token, setToken]}>
      <div className="App">
        <ThemeProvider theme= {theme}>
          <Router>
            <Switch>
              <Route path="/login" exact component={Login}/>
              <Route component={Home}/>
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    </Context.Provider>
  );
}

export default App;
