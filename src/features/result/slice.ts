import { createSlice } from '@reduxjs/toolkit';
import { result } from './enums/result';
import asyncRequest from 'common/utils/asyncRequest';

export const resultRequest = asyncRequest({
  state: `${result.name}/${result.repos}`,
});

const initialState = {};

const slice = createSlice({
  name: result.name,
  initialState,
  reducers: {
    resetResult: () => initialState,
  },
});

export const { resetResult } = slice.actions;

export default slice.reducer;
