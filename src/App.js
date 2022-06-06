import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth';
import Auth from './context/Auth';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Panel from './pages/Panel';
import Portfolio from './pages/Portfolio';
import PortfolioProject from './pages/PortfolioProject';
import {hasAuthenticated} from './services/AuthAPI';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())

  return (
    <Auth.Provider value={{isAuthenticated,setIsAuthenticated}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<RequireAuth needLog={false}><Login/></RequireAuth>}/>
          <Route path='/home' element={
            <RequireAuth>
              <Panel/>
            </RequireAuth>
          }/>
          <Route path='/portfolio' element={
            <RequireAuth>
              <Portfolio/>
            </RequireAuth>
          }/>
          <Route path='/portfolio/:id' element={
            <RequireAuth>
              <PortfolioProject/>
            </RequireAuth>
          }/>
          <Route path='/changePassword' element={
            <RequireAuth>
              <ChangePassword/>
            </RequireAuth>
          }/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>          
      </BrowserRouter>
    </Auth.Provider>
  );
};

export default App;