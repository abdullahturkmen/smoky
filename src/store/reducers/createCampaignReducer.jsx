// src/reducers/createCampaignReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNum: 1,
  collapseNum: 1
};

const createCampaignReducer = createSlice({
  name: 'createCampaign',
  initialState,
  reducers: {
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    setCollapseNum: (state, action) => {
      state.collapseNum = action.payload;
    },
  },
});

export const { setPageNum,setCollapseNum } = createCampaignReducer.actions;
export default createCampaignReducer.reducer;
