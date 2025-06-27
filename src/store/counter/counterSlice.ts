import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

const counterSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true
    },

    addOne(state) {
      state.count++;
    },

    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
  }
});

export const { addOne, substractOne, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;

