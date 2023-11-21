import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedDomain: {}, 
};

const currentDomainReducer = createSlice({
  name: 'domain',
  initialState,
  reducers: {
    setCurrentDomain: (state, action) => {
       state.selectedDomain = action.payload;
    },
   
  },
});

export const { setCurrentDomain } = currentDomainReducer.actions;
export default currentDomainReducer.reducer;
