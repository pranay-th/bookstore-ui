import { createSlice } from '@reduxjs/toolkit';

/**
 * ordersSlice — Phase 0 placeholder.
 * TODO: Add async thunks for fetchOrders, placeOrder, cancelOrder.
 */
const initialState = {
  items:   [],
  loading: false,
  error:   null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // TODO: Implement order reducers
    setOrders(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
