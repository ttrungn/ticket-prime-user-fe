import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/categorySlice';
import authReducer from '../features/authSlice';

// Need to store:
// - Current user info
// - All Categories

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    auth: authReducer,
  },
});
