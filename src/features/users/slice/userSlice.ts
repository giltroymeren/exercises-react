import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import { RootState } from "../../../store";
import { getUsers } from "../api/getUsers";

interface UserState {
  users: User[];
  loading: boolean;
  error?: string;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: "",
};

export const getAllUsers = createAsyncThunk(
  "users/getAll",
  async () => await getUsers()
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
