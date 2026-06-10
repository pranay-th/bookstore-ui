import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

      {user && (
        <div className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
          {/* Avatar placeholder */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
              {user.full_name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">{user.full_name || '—'}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full font-medium">
                {user.role}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="border-t pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide">User ID</p>
              <p className="text-gray-700 font-mono text-xs mt-1 break-all">{user.id}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide">Role</p>
              <p className="text-gray-700 mt-1">{user.role}</p>
            </div>
          </div>

          {/* TODO: Add edit profile form, address book, preferences */}
          <p className="text-xs text-gray-400 mt-2">
            Profile editing coming in a future update.
          </p>
        </div>
      )}

      <button
        onClick={handleLogout}
        className="mt-6 px-6 py-2.5 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
      >
        Log out
      </button>
    </div>
  );
}

export default ProfilePage;
