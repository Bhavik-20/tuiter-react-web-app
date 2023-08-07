import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../services/auth-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
   },
   [logoutThunk.fulfilled]: (state) => {
     state.currentUser = null;
   },
   [profileThunk.fulfilled]: (state, { payload }) => {
    console.log("profile fulfilled: ", payload)
     state.currentUser = payload;
   },
   [profileThunk.rejected]: (state, { payload }) => {
     state.currentUser = null;
   },
   [profileThunk.pending]: (state, action) => {
     state.currentUser = null;
   },
   [updateUserThunk.pending]: (state, action) => {
      console.log("update reducer pending")
   },
   [updateUserThunk.fulfilled]: (state, { payload }) => {
    console.log("update reducer: ", payload)
     state.currentUser = payload;
   },
   [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
   },

 },
});
export default authSlice.reducer;