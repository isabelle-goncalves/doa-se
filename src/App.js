import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Auth from './components/Auth';
import GuestRoute from './routes/GuestRoute';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
//import theme from './theme';
import createTheme from './theme';
import  { useSettings } from './context/SettingsContext';

import './mock';


function App() {
  const {settings} = useSettings();
  return ( 
      <ThemeProvider theme={createTheme(settings)}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <GuestRoute path="/login" element={<SignIn />} />
              <GuestRoute path="/registro" element={<SignUp />} />
              <Route path="//*" element={<Home />} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
 );
}

export default App;