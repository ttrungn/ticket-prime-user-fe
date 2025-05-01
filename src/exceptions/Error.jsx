import React from 'react';
import { useLocation } from 'react-router-dom';

const Error = ({ statusCode, message }) => {
  const location = useLocation();
  const state = location.state || {};
  const code = statusCode ?? state.statusCode ?? 500;
  const msg = message ?? state.message ?? 'Something went wrong.';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      <h1>Error {code}</h1>
      <p>{msg}</p>
    </div>
  );
};

export default Error;
