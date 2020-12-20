import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import request from 'common/utils/request';

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
});

export const { resetResults } = slice.actions;

export default slice.reducer;
