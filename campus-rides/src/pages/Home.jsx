import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 px-6 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-6">Campus Ride Sharing</h1>
        <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
          The smart way for students to commute. Connect with peers, save on travel costs, and reduce the campus carbon footprint.
        </p>
        
        {/* Active User Count */}
        <div className="inline-flex items-center space-x-4 bg-white/10 p-4 rounded-full border border-white/20">
          <span className="flex h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
          <span className="font-medium">1,248 students active on the board</span>
        </div>
      </section>

      {/* 2. Feature Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Safe & Verified</h3>
            <p className="text-gray-600">Strictly for university students. Every driver and passenger is verified via campus credentials.</p>
          </div>
          <div className="text-center p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Community Engagement</h3>
            <p className="text-gray-600">Turn your commute into a networking opportunity. Share ideas while you share the road.</p>
          </div>
          <div className="text-center p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Travel</h3>
            <p className="text-gray-600">Schedule rides in advance or find a last-minute seat. Your schedule, your choice.</p>
          </div>
        </div>
      </section>

      {/* 3. Register Now Panel */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-blue-50 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Join the Ride Sharing Board</h2>
          <p className="text-gray-600 text-lg mb-8">
            Stop waiting for buses. Start traveling with friends. Register your account to post or request rides today.
          </p>
          <Link to="/register" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;