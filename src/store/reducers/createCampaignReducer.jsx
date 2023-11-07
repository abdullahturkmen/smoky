// src/reducers/createCampaignReducer.js
import { createSlice } from '@reduxjs/toolkit';


//campaignSchedule
const today = new Date();
const tenYearsLater = new Date(today.getFullYear() + 10, today.getMonth(), today.getDate());
const defaultCampaignSchedule = {
  startDate: today,
  endDate: tenYearsLater,
  isStartDateDisabled: false,
  timeList: [
    {
      day: { value: "Everyday", label: "Everyday" },
      startHour: { value: "00:00", label: "00:00" },
      endHour: { value: "23:59", label: "23:59" },
    },
  ]
}

//discountRange
const defaultDiscountRange = {
  minPercentage: 0,
  maxPercentage: 0,
  selectedGoal: null,
}

//campaignLimit
const defaultCampaignLimit = {
  singleValue: 5,
  minValue: 3,
  maxValue: 5,
  selectedOption: "None",
  selectedOptionDetail: "radioButtonOne"
}

const initialState = {
  pageNum: 1,
  collapseNum: 1,
  campaignName: {
    title: "Untitled campaign"
  },
  campaignSchedule: defaultCampaignSchedule,
  selectedTimeZone: null,
  discountRange: defaultDiscountRange,
  campaignLimit: defaultCampaignLimit
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
    setCampaignName: (state, action) => {
      state.campaignName = action.payload;
    },
    setCampaignSchedule: (state, action) => {
      state.campaignSchedule = action.payload;
    },
    setSelectedTimeZone: (state, action) => {
      state.selectedTimeZone = action.payload;
    },
    setDiscountRange: (state, action) => {
      state.discountRange = action.payload;
    },
    setCampaignLimit: (state, action) => {
      state.campaignLimit = action.payload;
    },
  },
});

export const { setPageNum, setCollapseNum, setCampaignName, setCampaignSchedule, setSelectedTimeZone, setDiscountRange,setCampaignLimit } = createCampaignReducer.actions;
export default createCampaignReducer.reducer;
