import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * Navbar — Navigation header with logo, links, and auth buttons
 */
function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">📚</span>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all">
              BookStore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <button
              onClick={() => handleNavClick('/books')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Books
            </button>
            <button
              onClick={() => handleNavClick('/cart')}
              className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              🛒 Cart
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/login')}
              className="hidden sm:inline-flex px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 font-medium transition-all"
            >
              Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t space-y-3">
            <button
              onClick={() => handleNavClick('/')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/books')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              Books
            </button>
            <button
              onClick={() => handleNavClick('/cart')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              🛒 Cart
            </button>
            <button
              onClick={() => navigate('/login')}
              className="block w-full text-left px-4 py-2 text-blue-600 border-t border-gray-200 hover:bg-gray-100 rounded transition-colors"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
