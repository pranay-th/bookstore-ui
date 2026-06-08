import { createSlice } from '@reduxjs/toolkit';

/**
 * booksSlice — Phase 0 placeholder.
 * TODO: Add async thunks for fetchBooks, fetchBookById, searchBooks.
 */
const initialState = {
  items:    [],
  selected: null,
  loading:  false,
  error:    null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // TODO: Implement reducers when API integration begins
    setBooks(state, action) {
      state.items = action.payload;
    },
    setSelectedBook(state, action) {
      state.selected = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setBooks, setSelectedBook, setLoading, setError } = booksSlice.actions;
export default booksSlice.reducer;
