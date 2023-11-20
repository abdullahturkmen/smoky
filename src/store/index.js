import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import currentDomainReducer from './reducers/currentDomainReducer';
import createCampaignReducer from './reducers/createCampaignReducer';
import accountSettingsReducer from './reducers/accountSettingsReducer';
import onboardingReducer from './reducers/onboardingReducer';

const store = configureStore({
    reducer: {
      user: userReducer,
      domain: currentDomainReducer,
      createCampaign: createCampaignReducer,
      accountSettings: accountSettingsReducer,
      onboarding: onboardingReducer
      // Diğer reducer'ları burada ekleyin
    },
  });
  
  export default store;