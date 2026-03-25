import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // Access auth state from Redux
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">CampusRide</Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/rides" className="hover:text-blue-600 transition">Rides</Link>
            {/* Show Bookings and Profile only if logged in */}
            {isAuthenticated && (
              <>
                <Link to="/bookings" className="hover:text-blue-600 transition">Bookings</Link>
                <Link to="/profile" className="hover:text-blue-600 transition">Profile</Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Conditional Rendering: Hide Login/Signup if Authenticated */}
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Login</Link>
                <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                  Sign Up
                </Link>
              </>
            ) : (
              <Link to="/profile" className="text-blue-600 font-bold border border-blue-600 px-4 py-1 rounded-full text-sm">
                My Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;