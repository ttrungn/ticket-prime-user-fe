import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

import { signInUser, signInUserWithGoogle } from '../api/auth';

export const login = createAsyncThunk('auth/login', async ({ email, password, role }, thunkAPI) => {
  try {
    const res = await signInUser(email, password, role);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to sign you in.');
  }
});

export const loginWithGoogle = createAsyncThunk('auth/loginWithGoogle', async ({ role, code }, thunkAPI) => {
  try {
    const res = await signInUserWithGoogle(role, code);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Google sign-in failed');
  }
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('AT');
      state.user = null;
    },
    setCredentials: (state, action) => {
      state.user = jwtDecode(action.payload.accessToken);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = jwtDecode(action.payload.accessToken);
        localStorage.setItem('AT', action.payload.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginWithGoogle.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = jwtDecode(action.payload.accessToken);
        localStorage.setItem('AT', action.payload.accessToken);
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
