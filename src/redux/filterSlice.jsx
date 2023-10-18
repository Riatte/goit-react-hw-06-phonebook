import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    SelectFilter(state, { payload }) {
      return payload;
    },
  },
});

export const { SelectFilter } = filterSlice.actions;
