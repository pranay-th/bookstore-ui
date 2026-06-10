import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

/**
 * MainLayout — wraps all pages that show the navigation bar.
 */
function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Enterprise Book Store. All rights reserved.
      </footer>
    </div>
  );
}

export default MainLayout;
