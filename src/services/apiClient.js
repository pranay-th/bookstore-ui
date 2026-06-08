/**
 * apiClient — centralised Fetch wrapper.
 * TODO: Add request interceptors, auth header injection, and retry logic.
 */
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

async function request(method, endpoint, body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // TODO: Attach Authorization header once auth is implemented
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    // TODO: Normalise error shapes across the API
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }

  return response.json();
}

export const apiClient = {
  get:    (endpoint)        => request('GET',    endpoint),
  post:   (endpoint, body)  => request('POST',   endpoint, body),
  put:    (endpoint, body)  => request('PUT',    endpoint, body),
  patch:  (endpoint, body)  => request('PATCH',  endpoint, body),
  delete: (endpoint)        => request('DELETE', endpoint),
};
