import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/**
 * Navbar — top bar with auth-aware links.
 *
 * Unauthenticated: Login | Sign up
 * Authenticated:   Books | Orders | Profile | Logout
 */
function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-blue-600">
          📚 <span>Enterprise Book Store</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {isAuthenticated ? (
            <>
              <Link to="/books"   className="text-gray-600 hover:text-blue-600 transition-colors">Books</Link>
              <Link to="/cart"    className="text-gray-600 hover:text-blue-600 transition-colors">Cart</Link>
              <Link to="/orders"  className="text-gray-600 hover:text-blue-600 transition-colors">Orders</Link>
              <Link to="/profile" className="text-gray-600 hover:text-blue-600 transition-colors">
                {user?.full_name || user?.email || 'Profile'}
              </Link>
              {user?.role === 'ADMIN' && (
                <Link to="/admin" className="text-gray-600 hover:text-blue-600 transition-colors">Admin</Link>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
