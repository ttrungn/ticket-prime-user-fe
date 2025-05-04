import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/categories');
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || 'Failed to fetch categories');
  }
});

const initialState = {
  categories: [
    {
      name: 'Concerts',
      subcategories: ['Pop', 'Rock', 'Jazz'],
    },
    {
      name: 'Sports',
      subcategories: ['Football', 'Basketball', 'Tennis'],
    },
    {
      name: 'Arts, Theater & Comedy',
      subcategories: ['Stand-up', 'Drama', 'Musical'],
    },
    {
      name: 'Family',
      subcategories: ['Magic Show', 'Puppet', 'Fairy Tales'],
    },
    {
      name: 'Festivals',
      subcategories: ['Food', 'Music', 'Cultural'],
    },
    {
      name: 'Film',
      subcategories: ['Action', 'Drama', 'Documentary'],
    },
    {
      name: 'Dance',
      subcategories: ['Ballet', 'Hip Hop', 'Folk'],
    },
    {
      name: 'Gaming',
      subcategories: ['eSports', 'LAN Party', 'VR Gaming'],
    },
  ],
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
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const { setCategories, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
