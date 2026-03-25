import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bookRide } from '../features/rides/rideSlice'; // 1. Ensure this is imported!

const RideDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.auth.user);
  const rides = useSelector((state) => state.rides.availableRides);

  // Use Number() to ensure the ID comparison works
  const ride = rides.find((r) => Number(r.id) === Number(id));

  const handleBooking = () => {
    if (!user) {
      alert("Please login to book a ride.");
      navigate('/login');
      return;
    }

    if (ride && ride.seats > 0) {
      dispatch(bookRide(ride.id)); // 2. This triggers the seat update
      alert("Ride booked successfully!");
      navigate('/bookings');
    }
  };

  if (!ride) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">Ride Not Found</h2>
        <p>The ride ID {id} does not exist in the system.</p>
        <button onClick={() => navigate('/rides')} className="mt-4 text-blue-600 underline">
          Back to all rides
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Requirement: View full details  */}
        <div className="bg-blue-600 p-8 text-white">
          <h2 className="text-3xl font-bold">{ride.pickup} to {ride.destination}</h2>
          <p className="opacity-90">Departure: {ride.time}</p>
        </div>
        
        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Ride Information</h3>
            {/* Displaying mandatory fields [cite: 34-41] */}
            <p className="text-gray-600"><strong>Driver:</strong> {ride.driver}</p>
            <p className="text-gray-600"><strong>Vehicle:</strong> {ride.vehicle}</p>
            <p className="text-gray-600"><strong>Contact:</strong> {ride.contact}</p>
            <p className="text-gray-600"><strong>Notes:</strong> {ride.notes || "No extra notes"}</p>
          </div>
          
          <div className="flex flex-col justify-center items-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-sm text-gray-500 mb-2 uppercase font-bold tracking-widest">Seats Available</p>
            <p className="text-5xl font-black text-blue-600 mb-6">{ride.seats}</p>
            
            {/* Requirement: Book a seat [cite: 12] */}
            <button 
              onClick={handleBooking}
              disabled={ride.seats === 0}
              className={`w-full py-4 rounded-xl font-bold transition shadow-lg ${
                ride.seats > 0 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {ride.seats > 0 ? 'Book a Seat Now' : 'Fully Booked'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;