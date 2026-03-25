import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Platform</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rides">Find a Ride</Link></li>
            <li><Link to="/rides">Post a Ride</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">User</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><Link to="/profile">Profile History</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-500 text-xs">
        &copy; 2026 CampusRide. FAST-NUCES Student Project.
      </div>
    </footer>
  );
};

export default Footer;