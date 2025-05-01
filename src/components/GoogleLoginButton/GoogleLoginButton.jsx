import React from 'react';

const GoogleLoginButton = ({ buttonType, role }) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirectUri = `${window.location.origin}/auth/google/${role}/callback`;
  const scope = encodeURIComponent('openid profile email');
  const state = Math.random().toString(36).substring(2); // store in sessionStorage for CSRF check

  const handleLogin = () => {
    sessionStorage.setItem('oauth_state', state);
    const url =
      `https://accounts.google.com/o/oauth2/v2/auth` +
      `?response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=${scope}` +
      `&state=${state}`;
    window.location.href = url;
  };

  return (
    <button
      type={buttonType}
      onClick={handleLogin}
      className="flex justify-center items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-50 transition"
    >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
      Google
    </button>
  );
};
export default GoogleLoginButton;
