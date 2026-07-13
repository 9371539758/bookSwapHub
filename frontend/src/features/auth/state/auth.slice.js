import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./auth.thunk";


const initialState = {
  user: null,
  loading: false,
  error: null,
};


const authSlice = createSlice({

  name: "auth",

  initialState,


  reducers: {},


  extraReducers: (builder) => {

    builder

    .addCase(registerUser.pending, (state)=>{

      state.loading = true;
      state.error = null;

    })


    .addCase(registerUser.fulfilled, (state, action)=>{

      state.loading = false;
      state.user = action.payload.user;

    })


    .addCase(registerUser.rejected, (state, action)=>{

      state.loading = false;
      state.error = action.payload;

    });

  }

});


export default authSlice.reducer;