import { configureStore } from '@reduxjs/toolkit';
import booksReducer     from './slices/booksSlice';
import cartReducer      from './slices/cartSlice';
import ordersReducer    from './slices/ordersSlice';
import uiReducer        from './slices/uiSlice';

// TODO: Add more slices as features are implemented (wishlist, notifications, etc.)
export const store = configureStore({
  reducer: {
    books:  booksReducer,
    cart:   cartReducer,
    orders: ordersReducer,
    ui:     uiReducer,
  },
});
