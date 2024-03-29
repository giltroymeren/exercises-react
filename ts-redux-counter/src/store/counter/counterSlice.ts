import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, value: state.value + 1 };
    },
    decrement: (state) => {
      return { ...state, value: state.value - 1 };
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      return { ...state, value: state.value + action.payload };
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      return { ...state, value: state.value - action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      )
      .addCase(incrementAsync.rejected, () => {
        console.log("incrementAsync.rejected");
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
