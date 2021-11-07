import AuthContext from './components/AuthContext'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const Context = AuthContext
  const [token, setToken] = useState(null)
  if (!token) console.log("User not connected")
  else console.log("User is connected")

  return (
    <Context.Provider value={[token, setToken]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login}/>
            <Route component={Home}/>
          </Switch>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
