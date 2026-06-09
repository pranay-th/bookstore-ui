import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy-loaded pages — keeps initial bundle small
// TODO: Add a ProtectedRoute wrapper once auth is implemented in a later phase
const LandingPage  = lazy(() => import('../pages/Landing/LandingPage'));
const LoginPage    = lazy(() => import('../pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Auth/RegisterPage'));
const BooksPage    = lazy(() => import('../pages/Books/BooksPage'));
const CartPage     = lazy(() => import('../pages/Cart/CartPage'));
const OrdersPage   = lazy(() => import('../pages/Orders/OrdersPage'));
const ProfilePage  = lazy(() => import('../pages/Profile/ProfilePage'));
const AdminPage    = lazy(() => import('../pages/Admin/AdminPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index          element={<LandingPage />}  />
        <Route path="login"   element={<LoginPage />}    />
        <Route path="register" element={<RegisterPage />} />
        <Route path="books"   element={<BooksPage />}    />
        <Route path="cart"    element={<CartPage />}     />
        <Route path="orders"  element={<OrdersPage />}   />
        <Route path="profile" element={<ProfilePage />}  />
        <Route path="admin"   element={<AdminPage />}    />
        <Route path="*"       element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
