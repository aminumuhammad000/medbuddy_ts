import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "dashboard", // 'dashboard', 'patients', 'appointments', 'profile', 'updates', 'prescriptions', 'reports', 'messages', 'settings'
  userInformation: "basic",
};

const doctorNavSlice = createSlice({
  name: "doctorNav",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setInformation(state, action) {
      state.userInformation = action.payload;
    },
  },
});

export const { setPage, setInformation } = doctorNavSlice.actions;
export default doctorNavSlice.reducer;
