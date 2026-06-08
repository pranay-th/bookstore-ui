import { Link } from 'react-router-dom';

/**
 * NotFoundPage — 404 fallback.
 */
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-8xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
