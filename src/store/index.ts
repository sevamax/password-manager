import { configureStore, combineReducers } from '@reduxjs/toolkit';
import passwordReducer from './passwordSlice';
import userRedicer from './userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userRedicer,
  passwords: passwordReducer,
});

const persistConfig = {
  key: 'user',
  storage,
  blacklist: ['passwords']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);  


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persister = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from '@reduxjs/toolkit';
// import passwordReducer from './passwordSlice';
// import userRedicer from './userSlice';

// const store = configureStore({
//   reducer: {
//     passwords: passwordReducer,
//     user: userRedicer,
//   },
// });

// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;