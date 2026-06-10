import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import FormInput from '../../components/common/FormInput';
import AlertBanner from '../../components/common/AlertBanner';

function ResendVerificationPage() {
  const { resendVerification, loading, error, successMsg, clearError, clearSuccessMsg } = useAuth();
  const [email, setEmail]   = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => { clearError(); return () => clearError(); }, []); // eslint-disable-line

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!email.trim()) return;
    await resendVerification(email.trim());
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">

        <div className="text-center mb-8">
          <span className="text-3xl">📧</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Resend verification email</h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your email and we&apos;ll send a new verification link.
          </p>
        </div>

        <AlertBanner message={error}      type="error"   onDismiss={clearError} />
        <AlertBanner message={successMsg} type="success" onDismiss={clearSuccessMsg} />

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <FormInput
            label="Email address" id="email"
            type="email" autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); clearError(); }}
            error={touched && !email.trim() ? 'Email is required.' : ''}
            required
          />

          <button
            type="submit" disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Sending…' : 'Send verification email'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default ResendVerificationPage;
