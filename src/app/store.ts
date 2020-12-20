import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from 'features/dashboard/slice';
import resultReducer from 'features/result/slice';

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
