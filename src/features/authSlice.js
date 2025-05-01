import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInUser } from '../../api/auth'; // your axios POST login function

export const login = createAsyncThunk('auth/login', async ({ email, password, role }, thunkAPI) => {
  try {
    const res = await signInUser(email, password, role);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

const initialState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem('AT');
      localStorage.removeItem('AT_EX');
      state.user = null;
      state.accessToken = null;
    },
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
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
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem('AT', action.payload.accessToken);
        localStorage.setItem('AT_EX', action.payload.expiresIn);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
