import { createSlice } from '@reduxjs/toolkit';

/**
 * cartSlice — Phase 0 placeholder.
 * TODO: Add addItem, removeItem, updateQuantity, clearCart, and checkout thunk.
 */
const initialState = {
  items:   [],
  loading: false,
  error:   null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // TODO: Implement cart reducers
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
