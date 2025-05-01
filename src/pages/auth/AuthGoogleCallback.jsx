import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInUserWithGoogle } from '../../api/auth';

import './styles.css';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

const AuthGoogleCallback = ({ role }) => {
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

    signInUserWithGoogle(role, code)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('AT', res.data.accessToken);
          localStorage.setItem('AT_EX', res.data.expiresIn);
          navigate('/', { replace: true });
        }
      })
      .catch(err => {
        navigate('/error', {
          replace: true,
          state: {
            statusCode: err.response?.status,
            message: 'Cannot using Google to sign you in right now',
          },
        });
      });
  }, [search, navigate]);

  return <LoadingContainer content={'Signing you in...'} />;
};

export default AuthGoogleCallback;
