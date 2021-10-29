import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Header {
  title: string | null;
}

const initialState = {
  title: '',
} as Header;
export const headerSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { changeTitle } = headerSlice.actions;

// selectors
export const selectTitle = (state: RootState) => state.header.title;

export default headerSlice.reducer;
