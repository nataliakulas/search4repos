import { createAsyncThunk } from '@reduxjs/toolkit';
import request, { Options } from './request';

const asyncRequest = ({ state, route }: { state: string; route: string }) =>
  createAsyncThunk(`${state}`, async (options: Options, { rejectWithValue }) => {
    const response = await request({ route, ...options }).then((response) => response);

    if (response.status === 200) {
      return response.data;
    }
    // @ts-ignore
    return rejectWithValue(response.message);
  });

export default asyncRequest;
