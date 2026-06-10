/**
 * FormInput — reusable labelled text/email/password input.
 */
function FormInput({ label, id, error, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
          error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
        }`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default FormInput;
