import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // Stores the currently logged-in student [cite: 54]
    isAuthenticated: false,
    registeredUsers: [], // Mock database to store all registered accounts 
  },
  reducers: {
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload); // Add new user to "database" 
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      // Find user in our registered array [cite: 51]
      const user = state.registeredUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      } else {
        alert("Invalid credentials!");
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false; 
    },
    changePassword: (state, action) => {
      if (state.user) {
        state.user.password = action.payload; // Update password for current user [cite: 53]
      }
    }
  },
});

export const { registerUser, login, logout, changePassword } = authSlice.actions;
export default authSlice.reducer;