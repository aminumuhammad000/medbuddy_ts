import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "../../api/axios";

// Async thunk to fetch drugs from API
export const fetchDrugs = createAsyncThunk("drugs/fetchDrugs", async () => {
  const response = await axios.get("/drugs");
  return response.data;
});

// Define types for state
interface DrugState {
  list: any[];          // Replace `any` with your actual drug type if available
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: DrugState = {
  list: [],
  loading: false,
  error: null,
  success: null,
};

const drugSlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugs.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(fetchDrugs.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.list = action.payload;
        state.success = "Drugs fetched successfully!";
      })
      .addCase(fetchDrugs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
        state.success = null;
      });
  },
});

export const { clearStatus } = drugSlice.actions;
export default drugSlice.reducer;
