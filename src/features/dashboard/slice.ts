import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { methods } from 'common/methods';
import { dashboard } from './enums/dashboard';
import asyncRequest from 'common/utils/asyncRequest';
import { adaptCount, adaptResults } from './utils/adapters';

export const searchRequest = asyncRequest({
  state: `${dashboard.name}/${dashboard.search}`,
  route: `${methods.get} /${dashboard.search}/${dashboard.repositories}`,
});

const initialState = {
  count: 0,
  results: [],
};

const slice = createSlice({
  name: dashboard.name,
  initialState,
  reducers: {
    resetResults: () => initialState,
  },
  extraReducers: (builder) => {
    //@ts-ignore
    builder.addCase(searchRequest.fulfilled, (state, { payload }) => ({
      count: adaptCount(payload),
      results: adaptResults(payload),
    }));
  },
});

export const selectCount = (state: RootState) => state.dashboard.count;
export const selectResults = (state: RootState) => state.dashboard.results;

export const { resetResults } = slice.actions;

export default slice.reducer;
