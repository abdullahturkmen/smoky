import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

const store = configureStore({
    reducer: {
      user: userReducer,
      // Diğer reducer'ları burada ekleyin
    },
  });
  
  export default store;