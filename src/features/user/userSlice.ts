import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

interface InitialState {
  loading: boolean;
  error: string;
  users: User[];
}

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

// accepts two arguments: the action name and a callback function that creates the payload
// NB: handles error for us
// Generates pending, fulfilled, and rejected actions when the thunk is called
const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = response.data;
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state: InitialState) => {
      state.loading = true;
    });
    builder.addCase(
      getUsers.fulfilled,
      (state: InitialState, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(getUsers.rejected, (state: InitialState, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const fetchUsers = getUsers;
export default userSlice.reducer;
