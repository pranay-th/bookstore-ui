import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">

      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Enterprise Book Store
      </h1>
      <p className="text-xl text-gray-500 mb-10 max-w-xl">
        Your one-stop platform for discovering, purchasing, and managing books at enterprise scale.
      </p>

      <div className="flex gap-4">
        {isAuthenticated ? (
          <button
            onClick={() => navigate('/books')}
            className="btn-primary text-base px-8 py-3"
          >
            Browse Books
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate('/signup')}
              className="btn-primary text-base px-8 py-3"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/login')}
              className="btn-secondary text-base px-8 py-3"
            >
              Sign in
            </button>
          </>
        )}
      </div>

      {/* Feature highlights */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {[
          { icon: '📖', title: 'Vast Catalogue',   desc: 'Thousands of titles across every category.' },
          { icon: '🚀', title: 'Fast Delivery',     desc: 'Quick shipping to your door, every time.'   },
          { icon: '🏢', title: 'Enterprise Ready',  desc: 'Bulk orders, invoicing, and team accounts.' },
        ].map((f) => (
          <div key={f.title} className="p-6 bg-white rounded-xl shadow-sm border text-left">
            <span className="text-3xl">{f.icon}</span>
            <h3 className="text-lg font-semibold text-gray-800 mt-3 mb-1">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default LandingPage;
