import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from '../components/common/ProtectedRoute';

// ── Public pages ──────────────────────────────────────────────────────────────
const LandingPage            = lazy(() => import('../pages/Landing/LandingPage'));
const NotFoundPage           = lazy(() => import('../pages/NotFound/NotFoundPage'));

// ── Auth pages (no navbar) ────────────────────────────────────────────────────
const LoginPage              = lazy(() => import('../pages/Auth/LoginPage'));
const SignupPage              = lazy(() => import('../pages/Auth/SignupPage'));
const VerifyOTPPage          = lazy(() => import('../pages/Auth/VerifyOTPPage'));
const VerifyEmailPage        = lazy(() => import('../pages/Auth/VerifyEmailPage'));
const ResendVerificationPage = lazy(() => import('../pages/Auth/ResendVerificationPage'));

// ── Protected pages ───────────────────────────────────────────────────────────
const BooksPage   = lazy(() => import('../pages/Books/BooksPage'));
const CartPage    = lazy(() => import('../pages/Cart/CartPage'));
const OrdersPage  = lazy(() => import('../pages/Orders/OrdersPage'));
const ProfilePage = lazy(() => import('../pages/Profile/ProfilePage'));
const AdminPage   = lazy(() => import('../pages/Admin/AdminPage'));

export function AppRoutes() {
  return (
    <Routes>

      {/* ── Auth routes (no navbar) ─────────────────────────────────────────── */}
      <Route element={<AuthLayout />}>
        <Route path="login"               element={<LoginPage />} />
        <Route path="signup"              element={<SignupPage />} />
        {/* /register is an alias — teammate links point here */}
        <Route path="register"            element={<SignupPage />} />
        <Route path="verify-otp"          element={<VerifyOTPPage />} />
        <Route path="verify-email"        element={<VerifyEmailPage />} />
        <Route path="resend-verification" element={<ResendVerificationPage />} />
      </Route>

      {/* ── App routes (with navbar + footer) ──────────────────────────────── */}
      <Route element={<MainLayout />}>
        {/* Public */}
        <Route index element={<LandingPage />} />

        {/* Protected */}
        <Route path="books"   element={<ProtectedRoute><BooksPage /></ProtectedRoute>} />
        <Route path="cart"    element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="orders"  element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="admin"   element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />

        {/* Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    </Routes>
  );
}
