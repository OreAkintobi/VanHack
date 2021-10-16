import {configureStore} from '@reduxjs/toolkit';
import jobsReducer from './jobs';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
