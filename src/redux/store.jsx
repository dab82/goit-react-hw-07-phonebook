import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedReducer } from './reducers';

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
