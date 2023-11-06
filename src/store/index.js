import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import currentDomainReducer from './reducers/currentDomainReducer';
import createCampaignReducer from './reducers/createCampaignReducer';
const store = configureStore({
    reducer: {
      user: userReducer,
      domain: currentDomainReducer,
      createCampaign: createCampaignReducer,
      // Diğer reducer'ları burada ekleyin
    },
  });
  
  export default store;