import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MsalAuthenticationTemplate, MsalProvider, useIsAuthenticated } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import Home from './pages/home';
import { msalConfig, loginRequest } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return (
      <MsalAuthenticationTemplate interactionType="redirect" authenticationRequest={loginRequest}>
        {children}
      </MsalAuthenticationTemplate>
    );
  }

  return children;
};

const App = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;
