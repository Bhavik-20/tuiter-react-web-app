import { createSlice } from "@reduxjs/toolkit";
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../services/tuits-thunks";

const currentUser = {
 "username": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
}

const tuitDetailsSlice = createSlice({
 name: 'tuitDetailsArray',
 initialState: {tuitDetailsArray: [], loading: false},
 extraReducers: {
     [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuitDetailsArray.push(payload)
    },
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuitDetailsArray.findIndex((t) => t._id === payload._id)
        state.tuitDetailsArray[tuitNdx] = { ...state.tuitDetailsArray[tuitNdx], ...payload }
    },
    [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuitDetailsArray = state.tuitDetailsArray .filter(t => t._id !== payload)
    },

   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuitDetailsArray = [] },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuitDetailsArray = payload },
   [findTuitsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   }
 },

 reducers: {
  // deleteTuit(state, action) {
  //    const index = state.tuitDetailsArray.findIndex(tuitDetails =>
  //          tuitDetails._id === action.payload);
  //    state.tuitDetailsArray.splice(index, 1);
  //  },
  //  createTuit(state, action) {
  //    state.tuitDetailsArray.unshift({
  //      ...action.payload,
  //      ...templateTuit,
  //      _id: (new Date()).getTime(),
  //    })
  //  }
 }
});

// export const {createTuit, deleteTuit} = tuitDetailsSlice.actions;
export default tuitDetailsSlice.reducer;