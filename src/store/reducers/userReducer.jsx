// src/reducers/userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 1,
  email: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUsername, setEmail } = userReducer.actions;
export default userReducer.reducer;
