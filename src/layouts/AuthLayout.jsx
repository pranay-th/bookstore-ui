import { Outlet } from 'react-router-dom';

/**
 * AuthLayout — minimal wrapper for login/signup/verify pages.
 * No navbar — just a clean full-screen canvas.
 */
function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
