import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../store/slices/authSlice';

/**
 * ProtectedRoute — redirects to /login if the user is not authenticated.
 * Preserves the intended URL so the user is sent back after login.
 *
 * Usage:
 *   <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
 */
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
