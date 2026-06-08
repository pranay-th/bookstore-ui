/**
 * LandingPage — Phase 0 placeholder.
 *
 * TODO: Replace with real hero section, featured books carousel,
 *       category highlights, and promotional banners.
 */
function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Enterprise Book Store
      </h1>
      <p className="text-xl text-gray-500 mb-8 max-w-xl">
        Your one-stop platform for discovering, purchasing, and managing books at enterprise scale.
      </p>

      <div className="flex gap-4">
        {/* TODO: Wire up to /books route with useNavigate */}
        <button className="btn-primary text-base">Browse Books</button>
        <button className="btn-secondary text-base">Learn More</button>
      </div>

      {/* Placeholder feature highlights */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {[
          { title: 'Vast Catalogue',   desc: 'TODO: Show live book count from API'  },
          { title: 'Fast Delivery',    desc: 'TODO: Show delivery SLA details'      },
          { title: 'Enterprise Ready', desc: 'TODO: Highlight B2B features'         },
        ].map((feature) => (
          <div key={feature.title} className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
