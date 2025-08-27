import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import patientNavReducer from "./slices/patientNavSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    patientNav: patientNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
