import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../api/core';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async (_, thunkAPI) => {
  try {
    const res = await getCategories();
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.res?.data || 'Failed to fetch categories');
  }
});

const initialState = {
  categories: [],
  selectedCategory: null,
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.results;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const { setCategories, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
