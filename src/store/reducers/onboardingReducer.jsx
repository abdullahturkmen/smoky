import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: "",
  companyName: "",
  website: ""
};

const onboardingReducer = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
  },
});

export const { setFullName, setCompanyName, setWebsite } = onboardingReducer.actions;
export default onboardingReducer.reducer;
