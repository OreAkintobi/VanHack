import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobs';
import snackBarReducer from './snackBar';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    snackBar: snackBarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
