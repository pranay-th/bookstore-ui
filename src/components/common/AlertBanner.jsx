/**
 * AlertBanner — inline success/error message strip.
 *
 * type: 'success' | 'error' | 'info'
 */
function AlertBanner({ message, type = 'error', onDismiss }) {
  if (!message) return null;

  const styles = {
    success: 'bg-green-50 border-green-400 text-green-800',
    error:   'bg-red-50   border-red-400   text-red-800',
    info:    'bg-blue-50  border-blue-400  text-blue-800',
  };

  return (
    <div className={`flex items-start justify-between gap-3 px-4 py-3 border rounded-lg text-sm ${styles[type]}`}>
      <span>{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="shrink-0 font-bold opacity-60 hover:opacity-100"
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default AlertBanner;
