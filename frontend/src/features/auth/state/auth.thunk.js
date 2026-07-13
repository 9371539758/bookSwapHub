import { createAsyncThunk } from "@reduxjs/toolkit";
// import { register } from "../services/auth.api";

// import { createAsyncThunk } from "@reduxjs/toolkit";

import { register, login } from "../services/auth.api";

// Register User

export const registerUser = createAsyncThunk(
  "auth/register",

  async (formData, { rejectWithValue }) => {
    try {
      const data = await register(formData);

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Register failed",
      );
    }
  },
);

// Login User

export const loginUser = createAsyncThunk(
  "auth/login",

  async (formData, { rejectWithValue }) => {
    try {
      const data = await login(formData);

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  },
);
