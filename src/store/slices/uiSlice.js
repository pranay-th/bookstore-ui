import { createSlice } from '@reduxjs/toolkit';

/**
 * uiSlice — global UI state (modals, toasts, sidebar, etc.)
 * TODO: Expand as UI components are built.
 */
const initialState = {
  sidebarOpen:   false,
  activeModal:   null,
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openModal(state, action) {
      state.activeModal = action.payload;
    },
    closeModal(state) {
      state.activeModal = null;
    },
    addNotification(state, action) {
      state.notifications.push(action.payload);
    },
    removeNotification(state, action) {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload);
    },
  },
});

export const { toggleSidebar, openModal, closeModal, addNotification, removeNotification } = uiSlice.actions;
export default uiSlice.reducer;
