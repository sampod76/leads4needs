import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer({}, {


     getAllUsersRequest: (state) => {
          state.loading = true;

     },

     getAllUsersSuccesss: (state, action) => {
          state.loading = false;
          state.users = action.payload.users
     },

     getAllUsersFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     getUserRequest: (state) => {
          state.loading = true;

     },

     getUserSuccesss: (state, action) => {
          state.loading = false;
          state.specialUser = action.payload.user
     },

     getUserFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     updateUserRequest: (state) => {
          state.loading = true;

     },

     updateUserSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message
     },

     updateUserFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     EditUserRequest: (state) => {
          state.loading = true;

     },

     EditUserSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     EditUserFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     getMyProfileRequest: (state) => {
          state.loading = true;

     },

      getMyProfileSuccesss: (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.isAuthenticated=true;
     },

      getMyProfileFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
          state.isAuthenticated=false;
     },

     deleteUserRequest:(state)=>{
          state.loading=true;
     },

     deleteUserSuccesss:(state,action)=>{
          state.loading=false;
          state.message=action.payload.message;
     },
     
     deleteUserFail:(state,action)=>{
          state.loading=false;
          state.error=action.error;
     },

     updateUserProfileRequest:(state)=>{
          state.loading=true;
     },

     updateUserProfileSuccesss:(state,action)=>{
          state.loading=false;
          state.message=action.payload.message;
     },
     
     updateUserProfileFail:(state,action)=>{
          state.loading=false;
          state.error=action.error;
     },


     getMyProfileImpressionRequest:(state)=>{
          state.loading=true;
     },

     getMyProfileImpressionSuccesss:(state,action)=>{
          state.loading=false;
          state.impression=action.payload.impressionCount;
     },
     
     getMyProfileImpressionFail:(state,action)=>{
          state.loading=false;
          state.error=action.error;
     },

     logoutRequest:(state)=>{
          state.loading=true;
     },

     logoutSuccesss:(state,action)=>{
          state.loading=false;
          state.message=action.payload.message;
     },
     
     logoutFail:(state,action)=>{
          state.loading=false;
          state.error=action.error;
     },
  



})

