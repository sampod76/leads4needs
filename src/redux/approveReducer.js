import { createReducer } from '@reduxjs/toolkit';

export const appproveReducer = createReducer({}, {


     getUserRequest: (state) => {
          state.loading = true;

     },

     getUserSuccesss: (state, action) => {
          state.loading = false;
          state.newUser= action.payload.user
     },

     getUserFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },





})

