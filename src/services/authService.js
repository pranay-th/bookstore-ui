/**
 * authService — calls the Django auth endpoints.
 *
 * All methods return the full parsed JSON body.
 * Errors throw with a human-readable message extracted from the envelope.
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

async function post(endpoint, body) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(body),
  });

  const json = await res.json().catch(() => null);

  if (!res.ok) {
    // Extract the message from our standard envelope
    const message =
      json?.status?.message ||
      json?.detail ||
      `Request failed (${res.status})`;
    throw new Error(message);
  }

  return json;
}

export const authService = {
  /**
   * Register a new user.
   * POST /user/signup/
   */
  signup: (data) =>
    post('/user/signup/', data),

  /**
   * Login step 1 — validate credentials, triggers OTP email.
   * POST /user/login/
   */
  login: (data) =>
    post('/user/login/', data),

  /**
   * Login step 2 — submit OTP, receive JWT tokens.
   * POST /user/verify-otp/
   */
  verifyOTP: (data) =>
    post('/user/verify-otp/', data),

  /**
   * Verify email address from the link in the verification email.
   * POST /user/verify-email/
   */
  verifyEmail: (data) =>
    post('/user/verify-email/', data),

  /**
   * Resend the email verification link.
   * POST /user/resend-verification/
   */
  resendVerification: (email) =>
    post('/user/resend-verification/', { email }),

  /**
   * Refresh the JWT access token using the stored refresh token.
   * POST /user/token/refresh/
   */
  refreshToken: (refresh) =>
    post('/user/token/refresh/', { refresh }),
};
