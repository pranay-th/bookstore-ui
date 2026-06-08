import { Outlet } from 'react-router-dom';

/**
 * MainLayout — wraps all public-facing pages.
 * TODO: Replace placeholders with real Navbar and Footer components.
 */
function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TODO: <Navbar /> */}
      <header className="bg-white shadow-sm px-6 py-4 border-b flex items-center justify-between">
        <span className="font-bold text-lg text-blue-600">📚 Enterprise Book Store</span>
        <p className="text-sm text-gray-400">[ Navbar placeholder ]</p>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* TODO: <Footer /> */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4 text-sm">
        [ Footer placeholder ] &copy; {new Date().getFullYear()} Enterprise Book Store
      </footer>
    </div>
  );
}

export default MainLayout;
