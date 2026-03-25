import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // If no user is logged in, redirect to login page
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    dispatch(logout()); // Clears Redux state [cite: 52]
    navigate('/login'); // Redirect after logout [cite: 17]
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6">
          {user.name.charAt(0)}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-gray-500 mb-8">{user.email}</p>
        
        {/* Profile Statistics */}
        <div className="grid grid-cols-2 gap-4 border-t pt-8 mb-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">0</p>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Rides Offered</p>
          </div>
          <div className="text-center border-l">
            <p className="text-2xl font-bold text-blue-600">1</p>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Rides Taken</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Change Password Link [cite: 30] */}
          <button 
            onClick={() => navigate('/change-password')}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            Change Password
          </button>
          
          {/* Logout Button  */}
          <button 
            onClick={handleLogout}
            className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-bold hover:bg-red-100 transition border border-red-100"
          >
            Logout from System
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;