import { apiClient } from './apiClient';

/**
 * ordersService — placeholder API calls for the Orders resource.
 * TODO: Implement all methods once the Django Orders API is ready.
 */
export const ordersService = {
  // TODO: GET /api/orders/
  getOrders: () => apiClient.get('/api/orders/'),

  // TODO: GET /api/orders/:id/
  getOrderById: (id) => apiClient.get(`/api/orders/${id}/`),

  // TODO: POST /api/orders/
  placeOrder: (data) => apiClient.post('/api/orders/', data),

  // TODO: POST /api/orders/:id/cancel/
  cancelOrder: (id) => apiClient.post(`/api/orders/${id}/cancel/`),
};
