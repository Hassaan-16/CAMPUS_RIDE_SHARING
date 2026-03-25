import { useSelector } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';

const Rides = () => {
  const [searchParams] = useSearchParams();
  
  // 1. Get filter values from URL (e.g., /rides?destination=Library)
  const destQuery = searchParams.get('destination')?.toLowerCase() || "";
  const pickupQuery = searchParams.get('pickup')?.toLowerCase() || "";

  const allRides = useSelector((state) => state.rides.availableRides);

  // 2. Filter logic based on URL parameters
  const filteredRides = allRides.filter((ride) => {
    const matchDest = ride.destination.toLowerCase().includes(destQuery);
    const matchPickup = ride.pickup.toLowerCase().includes(pickupQuery);
    return matchDest && matchPickup;
  });

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Available Rides</h2>
        <Link to="/post-ride" className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">
          Offer a Ride
        </Link>
      </div>

      {/* Simple Search Bar to update URL without refreshing */}
      <div className="flex gap-4 mb-8">
        <input 
          type="text" 
          placeholder="Filter by Destination..." 
          className="border p-2 rounded w-full"
          onChange={(e) => window.history.pushState({}, '', `?destination=${e.target.value}`)}
        />
      </div>

      <div className="grid gap-6">
        {filteredRides.length > 0 ? filteredRides.map((ride) => (
          <div key={ride.id} className="bg-white p-6 rounded-xl shadow border border-gray-100 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-xl">{ride.pickup} → {ride.destination}</h4>
              <p className="text-gray-500">{ride.time} | {ride.vehicle}</p>
              <p className="text-sm text-blue-600 font-medium">Driver: {ride.driver}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-green-600">{ride.seats} Seats Left</p>
              <Link to={`/ride/${ride.id}`} className="mt-2 inline-block bg-gray-800 text-white px-4 py-1 rounded text-sm">
                View Details
              </Link>
            </div>
          </div>
        )) : <p className="text-gray-500">No rides matching your search.</p>}
      </div>
    </div>
  );
};

export default Rides;