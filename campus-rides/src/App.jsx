import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './features/auth/Register';
import Login from './features/auth/Login';
import Home from './pages/Home';
import Rides from './pages/Rides';
import PostRide from './pages/PostRide';
import RideDetails from './pages/RideDetails';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile'; 
import ChangePassword from './pages/ChangePassword';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rides" element={<Rides />} />            
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/post-ride" element={<PostRide />} />
            <Route path="/ride/:id" element={<RideDetails />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;