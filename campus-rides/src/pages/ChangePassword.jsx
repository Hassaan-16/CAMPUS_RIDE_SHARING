import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../features/auth/authSlice';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get current user to ensure they are logged in
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Update the password in Redux state 
    dispatch(changePassword(newPassword));
    alert("Password updated successfully!");
    navigate('/profile'); // Redirect back to profile [cite: 17]
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Change Password</h2>
        <p className="text-sm text-center text-gray-500">
          Updating password for: <span className="font-semibold text-blue-600">{user.email}</span>
        </p>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Enter new password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Confirm New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Confirm new password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate('/profile')}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;