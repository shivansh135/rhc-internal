import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  );
};

export default Login;
