import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
 "user/login", async (credentials) => {
   const user = await authService.login(credentials);
   console.log("loginThunk: ", user);
   return user;
 }
);

export const registerThunk = createAsyncThunk(
 "user/signup", async (credentials) => {
   const user = await authService.register(credentials);
   return user;
 }
);

export const profileThunk = createAsyncThunk(
 "auth/profile", async () => {
  console.log("profileThunk");
 const response = await authService.profile();
 console.log("profileThunk response: ", response.data);
 return response.data;
});

export const logoutThunk = createAsyncThunk(
 "auth/logout", async () => {
 return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
 "user/updateUser", async (user) => {
  console.log("updateUserThunk: ", user);
   await authService.updateUser(user);
   return user;
});
