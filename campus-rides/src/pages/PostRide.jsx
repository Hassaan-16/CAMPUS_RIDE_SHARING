import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRide } from '../features/rides/rideSlice';

// Your requested FAST and Lahore locations 
const CAMPUS_LOCATIONS = [
  "FAST Gate 2", "FAST Gate 3", "FAST Gate 5",
  "DHA Phase 1", "DHA Phase 2", "DHA Phase 3", "DHA Phase 4", 
  "DHA Phase 5", "DHA Phase 6", "DHA Phase 7",
  "Askari X", "Askari XI", "Bahria Town", 
  "Johar Town", "Wapda Town", "Muslim Town"
];

const PostRide = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    time: '',
    seats: 1,
    vehicle: '',
    contact: '',
    notes: ''
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRide = {
      ...formData,
      id: Date.now(),
      driver: user.name,
    };
    dispatch(addRide(newRide));
    navigate('/rides');
  };

  // Reusable sleek input component with datalist
  const LocationInput = ({ label, value, onChange, placeholder, id }) => (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
        {label}
      </label>
      <input
        list={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-gray-50 border border-gray-200 text-gray-800 py-3 px-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all duration-200 placeholder:text-gray-300 shadow-sm"
      />
      <datalist id={id}>
        {CAMPUS_LOCATIONS.map((loc) => (
          <option key={loc} value={loc} />
        ))}
      </datalist>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white">
          <h2 className="text-4xl font-extrabold tracking-tight">Post a Ride</h2>
          <p className="text-blue-100 mt-2 opacity-80">Help your fellow students get to campus safely.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          {/* Section 1: Route */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
              Route Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <LocationInput 
                label="Pickup Point" 
                id="pickup-list"
                value={formData.pickup}
                onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                placeholder="Type or select pickup..."
              />
              <LocationInput 
                label="Destination" 
                id="dest-list"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                placeholder="Type or select destination..."
              />
            </div>
          </div>

          {/* Section 2: Timing & Capacity */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
              Schedule & Seats
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Departure Time</label>
                <input type="time" required className="bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setFormData({...formData, time: e.target.value})} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Seats Offered</label>
                <input type="number" min="1" max="6" required placeholder="Number of students"
                  className="bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setFormData({...formData, seats: Number(e.target.value)})} />
              </div>
            </div>
          </div>

          {/* Section 3: Vehicle & Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">3</span>
              Vehicle & Contact
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Vehicle (e.g. Honda City)" required 
                className="bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFormData({...formData, vehicle: e.target.value})} />
              <input type="text" placeholder="Contact Number" required 
                className="bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFormData({...formData, contact: e.target.value})} />
            </div>
            <textarea placeholder="Notes (AC, luggage, music preferences...)" rows="3"
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({...formData, notes: e.target.value})} />
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition transform active:scale-[0.98] shadow-xl shadow-blue-200">
              Confirm & Post Ride
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostRide;