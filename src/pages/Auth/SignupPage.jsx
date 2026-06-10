import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import FormInput from '../../components/common/FormInput';
import AlertBanner from '../../components/common/AlertBanner';

function SignupPage() {
  const navigate = useNavigate();
  const { signup, loading, error, successMsg, clearError, clearSuccessMsg } = useAuth();

  const [form, setForm] = useState({
    first_name: '',
    last_name:  '',
    email:      '',
    phone:      '',
    password:   '',
    confirm:    '',
    role:       'CUSTOMER',
  });
  const [fieldErrors, setFieldErrors] = useState({});

  // Clear global auth error when component mounts / unmounts
  useEffect(() => { clearError(); return () => clearError(); }, []); // eslint-disable-line

  const validate = () => {
    const errs = {};
    if (!form.first_name.trim()) errs.first_name = 'First name is required.';
    if (!form.last_name.trim())  errs.last_name  = 'Last name is required.';
    if (!form.email.trim())      errs.email      = 'Email is required.';
    if (form.password.length < 8) errs.password  = 'Password must be at least 8 characters.';
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match.';
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

    const { confirm, ...payload } = form;
    const result = await signup(payload);

    if (signup.fulfilled?.match?.(result) || result?.type?.endsWith('/fulfilled')) {
      // Navigate to a confirmation screen
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-3xl">📚</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Create your account</h1>
          <p className="text-sm text-gray-500 mt-1">Join the Enterprise Book Store</p>
        </div>

        <AlertBanner message={error}      type="error"   onDismiss={clearError} />
        <AlertBanner message={successMsg} type="success" onDismiss={clearSuccessMsg} />

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="First name" id="first_name" name="first_name"
              type="text" autoComplete="given-name"
              value={form.first_name} onChange={handleChange}
              error={fieldErrors.first_name} required
            />
            <FormInput
              label="Last name" id="last_name" name="last_name"
              type="text" autoComplete="family-name"
              value={form.last_name} onChange={handleChange}
              error={fieldErrors.last_name} required
            />
          </div>

          <FormInput
            label="Email address" id="email" name="email"
            type="email" autoComplete="email"
            value={form.email} onChange={handleChange}
            error={fieldErrors.email} required
          />

          <FormInput
            label="Phone (optional)" id="phone" name="phone"
            type="tel" autoComplete="tel"
            value={form.phone} onChange={handleChange}
            error={fieldErrors.phone}
            placeholder="+919876543210"
          />

          <FormInput
            label="Password" id="password" name="password"
            type="password" autoComplete="new-password"
            value={form.password} onChange={handleChange}
            error={fieldErrors.password} required
          />

          <FormInput
            label="Confirm password" id="confirm" name="confirm"
            type="password" autoComplete="new-password"
            value={form.confirm} onChange={handleChange}
            error={fieldErrors.confirm} required
          />

          {/* Role selector */}
          <div className="flex flex-col gap-1">
            <label htmlFor="role" className="text-sm font-medium text-gray-700">
              I am a
            </label>
            <select
              id="role" name="role"
              value={form.role} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="AUTHOR">Author</option>
            </select>
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-2"
          >
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
