import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';

const store = configureStore({
  reducer: {
    passwords: passwordReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;