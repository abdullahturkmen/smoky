import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import currentDomainReducer from './reducers/currentDomainReducer';
const store = configureStore({
    reducer: {
      user: userReducer,
      domain: currentDomainReducer
      // Diğer reducer'ları burada ekleyin
    },
  });
  
  export default store;