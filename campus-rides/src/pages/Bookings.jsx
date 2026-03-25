import { useSelector } from 'react-redux';

const Bookings = () => {
  const bookedRides = useSelector((state) => state.rides.myBookings);

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8">My Booked Rides</h2>
      {bookedRides.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed">
          <p className="text-gray-500">You haven't booked any rides yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookedRides.map((ride, index) => (
            <div key={index} className="flex justify-between items-center p-6 bg-white border rounded-xl shadow-sm">
              <div>
                <h4 className="font-bold text-lg">{ride.pickup} → {ride.destination}</h4>
                <p className="text-sm text-gray-500">With {ride.driver} at {ride.time}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">Confirmed</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;