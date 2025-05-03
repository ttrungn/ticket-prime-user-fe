import api from '../configs/axios';

export const signInUser = (email, password, role) =>
  api.post(`/auth/users/login/${role}`, {
    email,
    password,
  });

export const signInUserWithGoogle = (role, code) =>
  api.post(`/auth/users/login/${role}/google`, {
    code,
    redirectUri: `${window.location.origin}/auth/google/${role}/callback`,
  });
