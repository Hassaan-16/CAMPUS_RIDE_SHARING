import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Pre-populated rides for the "View list of available rides" requirement
  availableRides: [
    {
      id: 1,
      driver: "Ali Ahmad",
      pickup: "Gate 3",
      destination: "Muslim Town",
      time: "10:00 AM",
      seats: 1,
      vehicle: "Honda 125",
      contact: "0300-1112223",
      notes: ""
    },
    {
      id: 2,
      driver: "Ali Ahmed",
      pickup: "Gate 2",
      destination: "DHA Phase 5",
      time: "11:30 AM",
      seats: 3,
      vehicle: "Honda Civic",
      contact: "0321-4445556",
      notes: ""
    }
  ],
  myBookings: [],
};

const rideSlice = createSlice({
  name: 'rides',
  initialState,
  reducers: {
    addRide: (state, action) => {
      state.availableRides.push(action.payload);
    },
    // Requirement: Book a ride and update seat availability
    bookRide: (state, action) => {
      const rideId = action.payload;
      const ride = state.availableRides.find((r) => r.id === rideId);

      if (ride && ride.seats > 0) {
        ride.seats -= 1; // Decrease seats 
        state.myBookings.push({ ...ride, status: "Confirmed" }); // Store in bookings [cite: 59]
      }
    },
  },
});

export const { addRide, bookRide } = rideSlice.actions;
export default rideSlice.reducer;