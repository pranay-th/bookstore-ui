import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import AlertBanner from '../../components/common/AlertBanner';

const OTP_LENGTH = 6;

function VerifyOTPPage() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const email     = location.state?.email || '';

  const { verifyOTP, login, loading, error, isAuthenticated, clearError } = useAuth();

  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => { clearError(); return () => clearError(); }, []); // eslint-disable-line

  // If no pending email, redirect to login
  useEffect(() => {
    if (!email) navigate('/login', { replace: true });
  }, [email, navigate]);

  // On successful auth, go home
  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  const otp = digits.join('');

  const handleDigitChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // digits only
    const next = [...digits];
    next[index] = value;
    setDigits(next);
    clearError();
    if (value && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    const next = Array(OTP_LENGTH).fill('');
    [...pasted].forEach((c, i) => { next[i] = c; });
    setDigits(next);
    inputRefs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length < OTP_LENGTH) return;
    await verifyOTP({ email, otp });
  };

  const handleResend = async () => {
    setDigits(Array(OTP_LENGTH).fill(''));
    clearError();
    await login({ email, password: '' }); // won't work — user needs to go back to login
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-3xl">🔐</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Enter your OTP</h1>
          <p className="text-sm text-gray-500 mt-2">
            We sent a {OTP_LENGTH}-digit code to<br />
            <span className="font-medium text-gray-700">{email}</span>
          </p>
        </div>

        <AlertBanner message={error} type="error" onDismiss={clearError} />

        <form onSubmit={handleSubmit} className="mt-6">
          {/* OTP digit inputs */}
          <div className="flex justify-center gap-3" onPaste={handlePaste}>
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => handleDigitChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-12 h-14 text-center text-2xl font-bold border-2 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                aria-label={`OTP digit ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading || otp.length < OTP_LENGTH}
            className="w-full mt-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Verifying…' : 'Verify OTP'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 space-y-2">
          <p>Didn&apos;t receive the code?</p>
          <button
            onClick={handleResend}
            className="text-blue-600 hover:underline font-medium"
          >
            Go back to login to resend
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTPPage;
