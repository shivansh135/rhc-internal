import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MsalAuthenticationTemplate, MsalProvider, useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import Home from './pages/home';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login'; // Create a simple login page if necessary
import { msalConfig, loginRequest } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

const App = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MsalAuthenticationTemplate interactionType="redirect" authenticationRequest={loginRequest}>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </MsalAuthenticationTemplate>
            }
          />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;
