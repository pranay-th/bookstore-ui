import { useNavigate } from 'react-router-dom';

/**
 * LandingPage — Beautiful hero section with featured content
 */
function LandingPage() {
  const navigate = useNavigate();

  const categories = [
    { icon: '📖', name: 'Fiction', desc: 'Explore captivating stories' },
    { icon: '🔬', name: 'Science', desc: 'Discover scientific breakthroughs' },
    { icon: '💼', name: 'Business', desc: 'Master business strategies' },
    { icon: '🎓', name: 'Education', desc: 'Advance your knowledge' },
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      desc: 'Browse thousands of books with instant search and filters',
    },
    {
      icon: '🚀',
      title: 'Easy Publishing',
      desc: 'Authors can publish and manage their books effortlessly',
    },
    {
      icon: '🏆',
      title: 'Quality Curated',
      desc: 'Handpicked selection of the finest books across genres',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      desc: 'Access books from authors around the world',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Great Read
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of readers exploring a vast collection of books. Whether you're a reader or an author, find everything you need in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={() => navigate('/books')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-lg"
              >
                Browse Books
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 text-lg"
              >
                Join as Author
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">10K+</div>
                <p className="text-gray-600 mt-2">Books</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600">50K+</div>
                <p className="text-gray-600 mt-2">Readers</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-pink-600">1K+</div>
                <p className="text-gray-600 mt-2">Authors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Find books across all your favorite genres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => navigate('/books')}
                className="p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg hover:bg-blue-50 transition-all cursor-pointer transform hover:scale-105 text-center"
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cat.name}
                </h3>
                <p className="text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the best book shopping platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-500 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sign up now to get access to our exclusive collection of books and join our growing community of readers and authors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/register')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/books')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 text-lg"
            >
              Browse Books
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Get weekly recommendations and exclusive offers delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
