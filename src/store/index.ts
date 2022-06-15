import { configureStore, combineReducers } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';
import userRedicer from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userRedicer,
  passwords: passwordReducer,
});

const persistConfig = {
  key: 'user',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);  


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persister = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;