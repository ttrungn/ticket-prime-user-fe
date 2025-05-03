import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './styles.css';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';
import { loginWithGoogle } from '../../features/authSlice';
import { useDispatch } from 'react-redux';

const AuthGoogleCallback = ({ role }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get('code');
    const state = params.get('state');

    // CSRF check
    if (state !== sessionStorage.getItem('oauth_state')) {
      return;
    }

    // Prevent duplicate execution
    if (sessionStorage.getItem('google_signin_handled')) return;

    sessionStorage.setItem('google_signin_handled', 'true');
    console.log('trying to sign in...');
    dispatch(loginWithGoogle({ role, code }))
      .unwrap()
      .then(() => navigate('/', { replace: true }))
      .catch(err => {
        navigate('/error', {
          replace: true,
          state: {
            statusCode: 401,
            message: err || 'Google login failed.',
          },
        });
      })
      .finally(() => {
        sessionStorage.removeItem('oauth_state');
        sessionStorage.removeItem('google_signin_handled');
      });
  }, [search, navigate]);

  return <LoadingContainer content={'Signing you in...'} />;
};

export default AuthGoogleCallback;
