import { apiClient } from './apiClient';

/**
 * booksService — placeholder API calls for the Books resource.
 * TODO: Implement all methods once the Django Books API is ready.
 */
export const booksService = {
  // TODO: GET /api/books/ with filter & pagination params
  getBooks: (params) => apiClient.get('/api/books/'),

  // TODO: GET /api/books/:id/
  getBookById: (id) => apiClient.get(`/api/books/${id}/`),

  // TODO: GET /api/books/search/?q=
  searchBooks: (query) => apiClient.get(`/api/books/?search=${query}`),
};
