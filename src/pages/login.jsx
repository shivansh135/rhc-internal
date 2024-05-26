import React from 'react';

const Login = ({ handleLogin }) => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Microsoft</button>
    </div>
  );
};

export default Login;
