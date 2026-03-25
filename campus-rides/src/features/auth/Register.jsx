import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './authSlice';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)); // Store user in Redux 
    alert("Registration Successful! Please login.");
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition">
          Register Account
        </button>
      </form>
    </div>
  );
};
export default Register;