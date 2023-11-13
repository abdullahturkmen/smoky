import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userProfile:null,
  selectedUserDetail : {}
};

const acountSettingsReducer = createSlice({
  name: 'accountSettings',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
       state.userProfile = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUserDetail = action.payload;
   },
   
  },
});

export const { setUserProfile, setSelectedUser } = acountSettingsReducer.actions;
export default acountSettingsReducer.reducer;
