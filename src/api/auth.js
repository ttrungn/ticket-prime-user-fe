import axios from 'axios';

export const signInUser = (email, password, role) =>
  axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/users/login/${role}`, {
    email,
    password,
  });

export const signInUserWithGoogle = (role, code) =>
  axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/users/login/${role}/google`, {
    code,
    redirectUri: `${window.location.origin}/auth/google/${role}/callback`,
  });
