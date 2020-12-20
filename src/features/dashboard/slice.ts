import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import request from 'common/utils/request';
import { adaptCount, adaptResults } from './utils/adapters';

export const searchRequest = createAsyncThunk('search', async (values: { q: string }, { rejectWithValue }) => {
  const { q } = values;

  const response = await request({ q }).then((response) => response);

  if (response.status === 200) {
    return response.data;
  }
  // @ts-ignore
  return rejectWithValue(response.message);
});

const initialState = {
  count: 0,
  results: [],
};

const slice = createSlice({
  name: 'dashboard',
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
