import { createSlice } from '@reduxjs/toolkit';
import { result } from './enums/result';
import { RootState } from 'app/store';
import { Rest, Result } from 'common/types';
import asyncRequest from 'common/utils/asyncRequest';
import { adaptResultDetails } from './utils/adapters';

export const resultRequest = asyncRequest({
  state: `${result.name}/${result.repos}`,
});

const initialState: Result & Rest = {
  id: 0,
  repo: '',
  owner: '',
  stargazers: 0,
  language: '',
  description: '',
  subscribers: 0,
  updated: '',
};

const slice = createSlice({
  name: result.name,
  initialState,
  reducers: {
    resetResult: () => initialState,
  },
  extraReducers: (builder) => {
    //@ts-ignore
    builder.addCase(resultRequest.fulfilled, (state, { payload }) => ({
      ...adaptResultDetails(payload),
    }));
  },
});

export const selectResult = (state: RootState) => state.result;

export const { resetResult } = slice.actions;

export default slice.reducer;
