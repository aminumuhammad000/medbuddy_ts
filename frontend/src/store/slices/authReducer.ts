import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  forgotPassword,
  resendOtp,
  verifyOtp,
  updatePassword,
  updatePersonalInfo,
  updateAccount,
  updateMedicalInfo,
  googleOnetab,
  googleLogin,
  getProfile,
  // updateUser,
} from "./authActions";

interface AuthState {
  user: any | null;
  token: string | null;
  isLogged: boolean;
  loading: boolean;
  error: string;
  success: string;
  authMode: "login" | "register" | "forgot" | "otp" | "setPassword";
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLogged: false,
  loading: false,
  error: "",
  success: "",
  authMode: "login",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      if (!state.user) state.user = {};
      state.user.usertype = action.payload;
    },
    setAuthMode: (
      state,
      action: PayloadAction<"login" | "register" | "forgot" | "otp" | "setPassword">
    ) => {
      state.authMode = action.payload;
      state.error = "";
      state.success = "";
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = null;
      state.token = null;
      state.error = "";
      state.success = "";
    },
    clearStatus: (state) => {
      state.error = "";
      state.success = "";
      state.loading = false;
    },
    tokenFromStorage: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLogged = true;
    },
  },

 extraReducers: (builder) => {
  // --- Login ---
  builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.success = "Login successful!";
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Register ---
  builder
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.success = "Registered successfully!";
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Forgot Password ---
  builder
    .addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload.message || "OTP sent successfully";
    })
    .addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Resend OTP ---
  builder
    .addCase(resendOtp.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(resendOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload.message || "OTP resent successfully";
    })
    .addCase(resendOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Verify OTP ---
  builder
    .addCase(verifyOtp.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(verifyOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload.message || "OTP verified successfully";
    })
    .addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Update Password ---
  builder
    .addCase(updatePassword.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(updatePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload.message || "Password updated successfully";
    })
    .addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Update Personal Info ---
  builder
    .addCase(updatePersonalInfo.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(updatePersonalInfo.fulfilled, (state, action) => {
      state.loading = false;
      if (state.user) {
        state.user = { ...state.user, ...action.payload.user };
      }
      state.success = action.payload.message || "Personal info updated";
    })
    .addCase(updatePersonalInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Update Account ---
  builder
    .addCase(updateAccount.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(updateAccount.fulfilled, (state, action) => {
      state.loading = false;
      if (state.user) {
        state.user = { ...state.user, ...action.payload.user };
      }
      state.success = action.payload.message || "Account updated";
    })
    .addCase(updateAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Update Medical Info ---
  builder
    .addCase(updateMedicalInfo.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(updateMedicalInfo.fulfilled, (state, action) => {
      state.loading = false;
      if (state.user) {
        state.user = { ...state.user, ...action.payload.user };
      }
      state.success = action.payload.message || "Medical info updated";
    })
    .addCase(updateMedicalInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Google One Tap ---
  builder
    .addCase(googleOnetab.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(googleOnetab.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.success = "Login successful (Google One Tap)!";
    })
    .addCase(googleOnetab.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Google OAuth Login ---
  builder
    .addCase(googleLogin.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(googleLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogged = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.success = "Login successful (Google OAuth)!";
    })
    .addCase(googleLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });

  // --- Get Profile ---
  builder
    .addCase(getProfile.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.success = "";
    })
    .addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.success = "Profile fetched successfully";
    })
    .addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = "";
    });
}


});

export const { setRole, setAuthMode, logout, clearStatus, tokenFromStorage } =
  authSlice.actions;

export * from "./authActions";

export default authSlice.reducer;
