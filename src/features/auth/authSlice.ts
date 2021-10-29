import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  userId: string | null;
}

const initialState = {
  userId: null,
  sessionExpiresIn: null,
  userData: {},
} as CounterState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// export const {} = authSlice.actions;

// selectors
export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
