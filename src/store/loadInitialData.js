import { logout, setCredentials } from '../features/authSlice';

export const loadInitialData = () => async dispatch => {
  const token = localStorage.getItem('AT');
  if (token) {
    try {
      dispatch(setCredentials({ accessToken: token }));
    } catch (err) {
      dispatch(logout());
    }
  }

  try {
    await Promise.all([
      // dispatch(fetchCategories())
    ]);
  } catch (err) {
    console.error('Error loading initial data:', err);
  }
};
