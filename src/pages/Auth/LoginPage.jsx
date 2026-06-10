import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import FormInput from '../../components/common/FormInput';
import AlertBanner from '../../components/common/AlertBanner';

function LoginPage() {
  const navigate = useNavigate();
  const { login, loading, error, successMsg, pendingEmail, clearError, clearSuccessMsg } = useAuth();

  const [form, setForm] = useState({ email: '', password: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => { clearError(); return () => clearError(); }, []); // eslint-disable-line

  // When OTP is pending, redirect to OTP verification page
  useEffect(() => {
    if (pendingEmail) {
      navigate('/verify-otp', { state: { email: pendingEmail } });
    }
  }, [pendingEmail, navigate]);

  const validate = () => {
    const errs = {};
    if (!form.email.trim())    errs.email    = 'Email is required.';
    if (!form.password.trim()) errs.password = 'Password is required.';
    return errs;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setFieldErrors((f) => ({ ...f, [e.target.name]: '' }));
    clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    await login(form);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-3xl">📚</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
        </div>

        <AlertBanner message={error}      type="error"   onDismiss={clearError} />
        <AlertBanner message={successMsg} type="success" onDismiss={clearSuccessMsg} />

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <FormInput
            label="Email address" id="email" name="email"
            type="email" autoComplete="email"
            value={form.email} onChange={handleChange}
            error={fieldErrors.email} required
          />

          <FormInput
            label="Password" id="password" name="password"
            type="password" autoComplete="current-password"
            value={form.password} onChange={handleChange}
            error={fieldErrors.password} required
          />

          <button
            type="submit" disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-2"
          >
            {loading ? 'Checking credentials…' : 'Continue'}
          </button>
        </form>

        <div className="mt-4 space-y-2 text-center text-sm text-gray-500">
          <p>
            <Link to="/resend-verification" className="text-blue-600 hover:underline">
              Didn&apos;t receive a verification email?
            </Link>
          </p>
          <p>
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
