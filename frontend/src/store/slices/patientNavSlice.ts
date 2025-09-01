import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "dashboard", // 'home', 'profile', 'orders',
  userInformation: "basic",
  aiSideBar: true, // true, false
  searchChat: false,  // true, false
  drugSection: "preview",
};

const patientNavSlice = createSlice({
  name: "patientNav",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setInformation(state, action) {
      state.userInformation = action.payload;
    },
    setAiSideBar(state, action){
      state.aiSideBar = action.payload
    },
    setSearchChat(state, action) {
      state.searchChat = action.payload;
    },
    setDrugSection(state, action) {
      state.drugSection = action.payload
    }
  },
});

export const { setPage, setInformation, setAiSideBar, setSearchChat, setDrugSection } = patientNavSlice.actions;
export default patientNavSlice.reducer;
