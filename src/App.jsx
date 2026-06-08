import { Suspense } from 'react';
import { AppRoutes } from './routes';

// TODO: Add global error boundary component
// TODO: Add global toast / notification provider
// TODO: Add theme provider if dark mode is required

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen text-gray-400">
          Loading…
        </div>
      }
    >
      <AppRoutes />
    </Suspense>
  );
}

export default App;
