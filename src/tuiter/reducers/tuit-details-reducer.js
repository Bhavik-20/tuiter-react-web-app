import { createSlice } from "@reduxjs/toolkit";
import tuitDetails from './tuit-details.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "/images/nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitDetailsSlice = createSlice({
 name: 'tuitDetails',
 initialState: {tuitDetails: tuitDetails},
 reducers: {
  deleteTuit(state, action) {
     const index = state.tuitDetails
        .findIndex(tuitDetails =>
           tuitDetails._id === action.payload);
     state.tuitDetails.splice(index, 1);
   },
   createTuit(state, action) {
     state.tuitDetails.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   }
 }
});

export const {createTuit, deleteTuit} = tuitDetailsSlice.actions;
export default tuitDetailsSlice.reducer;