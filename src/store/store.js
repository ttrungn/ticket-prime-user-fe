import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/categorySlice';

// Need to store:
// - Current user info
// - All Categories

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
