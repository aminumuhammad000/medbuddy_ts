import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import patientNavReducer from "./slices/patientNavSlice";
import doctorNavReducer from "./slices/doctorNavSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    patientNav: patientNavReducer,
    doctorNav: doctorNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
