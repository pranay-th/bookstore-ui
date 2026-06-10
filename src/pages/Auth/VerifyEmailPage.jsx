import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AlertBanner from '../../components/common/AlertBanner';

/**
 * VerifyEmailPage
 *
 * Landed on when the user clicks the verification link in their email.
 * URL shape: /verify-email?uid=<b64>&token=<token>
 *
 * Automatically calls the backend on mount and shows the result.
 */
function VerifyEmailPage() {
  const [searchParams]  = useSearchParams();
  const navigate        = useNavigate();
  const { verifyEmail, loading, error, successMsg, clearError } = useAuth();

  const [status, setStatus] = useState('verifying'); // 'verifying' | 'success' | 'error'

  useEffect(() => {
    clearError();

    const uid   = searchParams.get('uid');
    const token = searchParams.get('token');

    if (!uid || !token) {
      setStatus('error');
      return;
    }

    verifyEmail({ uid, token }).then((result) => {
      if (result?.type?.endsWith('/fulfilled')) {
        setStatus('success');
        setTimeout(() => navigate('/login'), 3000);
      } else {
        setStatus('error');
      }
    });
  }, []); // eslint-disable-line

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-10 text-center">

        {status === 'verifying' && (
          <>
            <div className="text-4xl mb-4">⏳</div>
            <h1 className="text-xl font-bold text-gray-800">Verifying your email…</h1>
            <p className="text-gray-500 mt-2 text-sm">Please wait a moment.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="text-4xl mb-4">✅</div>
            <h1 className="text-xl font-bold text-gray-800">Email verified!</h1>
            <p className="text-gray-500 mt-2 text-sm">
              {successMsg || 'Your email has been verified. Redirecting to login…'}
            </p>
            <Link to="/login" className="btn-primary inline-block mt-6">
              Go to login
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="text-4xl mb-4">❌</div>
            <h1 className="text-xl font-bold text-gray-800">Verification failed</h1>
            <AlertBanner
              message={error || 'This link is invalid or has expired.'}
              type="error"
              onDismiss={clearError}
            />
            <div className="mt-6 space-y-3">
              <Link
                to="/resend-verification"
                className="btn-primary block w-full text-center py-2.5"
              >
                Request a new link
              </Link>
              <Link to="/login" className="text-sm text-blue-600 hover:underline">
                Back to login
              </Link>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default VerifyEmailPage;
