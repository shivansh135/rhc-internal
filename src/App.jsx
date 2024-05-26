import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MsalAuthenticationTemplate, useMsal } from '@azure/msal-react';
import Home from './pages/home';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login'; // Create a simple login page if necessary
import { loginRequest } from './authConfig';

const App = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MsalAuthenticationTemplate interactionType="popup" authenticationRequest={loginRequest}>
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            </MsalAuthenticationTemplate>
          }
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
