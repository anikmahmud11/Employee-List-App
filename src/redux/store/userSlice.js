import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk action to fetch the data
export const fetchUserProfiles = createAsyncThunk(
  "user/fetchUserProfiles",
  async () => {
    try {
      const response = await axios.get("./fakedata.json");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  userProfiles: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfiles = action.payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const selectUserProfiles = (state) => state.user.userProfiles;

export default userSlice.reducer;
