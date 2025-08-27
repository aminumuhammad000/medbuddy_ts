import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";


export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/register", payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("/auth/login", { email, password });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/forgot", { email });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/forgot", { email });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to resend OTP"
      );
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (
    { otp, email }: { otp: string; email: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("/auth/verify-otp", { otp, email });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "OTP verification failed"
      );
    }
  }
);

export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("/auth/update-password", {
        email,
        password,
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Password update failed"
      );
    }
  }
);

export const updatePersonalInfo = createAsyncThunk(
  "auth/updatePersonalInfo",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axios.patch("/user/personal-info", payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Update failed");
    }
  }
);

export const updateAccount = createAsyncThunk(
  "auth/updateAccount",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await axios.patch("/user/account", payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Account update failed"
      );
    }
  }
);

export const updateMedicalInfo = createAsyncThunk(
  "auth/updateMedicalInfo",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await axios.patch("/user/medical-info", payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Medical info update failed"
      );
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue, getState }: any) => {
    try {
      const { token } = getState().auth;
      const res = await axios.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch profile"
      );
    }
  }
);

// --- Google One Tap ---
export const googleOnetab = createAsyncThunk(
  "auth/googleOnetab",
  async (
    { credential, usertype }: { credential: string; usertype: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("/auth/google-onetab", {
        credential,
        usertype,
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Google login failed"
      );
    }
  }
);

// --- Google OAuth (code-based login) ---
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (
    { code, usertype }: { code: string; usertype: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("/auth/google-login", {
        code,
        usertype,
      });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Google OAuth login failed"
      );
    }
  }
);
