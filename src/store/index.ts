import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';
import userRedicer from './userSlice';

const store = configureStore({
  reducer: {
    passwords: passwordReducer,
    user: userRedicer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;