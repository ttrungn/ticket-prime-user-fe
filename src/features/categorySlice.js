import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    'Concerts',
    'Sports',
    'Arts, Theater & Comedy',
    'Family',
    'Festivals',
    'Film',
    'Dance',
    'Gaming',
    'Esports',
    'Food & Drink',
    'Comedy',
    'Theater',
    'Classical',
    'Jazz',
    'Rock',
    'Pop',
    'Hip-Hop/Rap',
    'Electronic',
    'Country',
    'Folk',
    'R&B',
  ],
  selectedCategory: null,
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
});

export const { setCategories, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
