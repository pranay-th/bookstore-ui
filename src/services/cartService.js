import { apiClient } from './apiClient';

/**
 * cartService — placeholder API calls for the Cart resource.
 * TODO: Implement all methods once the Django Cart API is ready.
 */
export const cartService = {
  // TODO: GET /api/cart/
  getCart: () => apiClient.get('/api/cart/'),

  // TODO: POST /api/cart/items/
  addItem: (item) => apiClient.post('/api/cart/items/', item),

  // TODO: DELETE /api/cart/items/:id/
  removeItem: (itemId) => apiClient.delete(`/api/cart/items/${itemId}/`),

  // TODO: DELETE /api/cart/clear/
  clearCart: () => apiClient.delete('/api/cart/clear/'),
};
