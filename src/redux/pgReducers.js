import { createReducer } from '@reduxjs/toolkit';

export const pgReducer = createReducer({}, {

     GetPGRequest: (state) => {
          state.loading = true;
     },

     GetPGSuccesss: (state, action) => {
          state.loading = false;
          state.pgs = action.payload;

     },

     GetPGFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     createPgRequest: (state) => {
          state.loading = true;

     },

     createPgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     createPgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     UpdatePgRequest: (state) => {
          state.loading = true;

     },

     UpdatePgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     UpdatePgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     deletePgRequest: (state) => {
          state.loading = true;
     },

     deletePgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     deletePgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     deleteOwnedPgRequest: (state) => {
          state.loading = true;
     },

     deleteOwnedPgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     deleteOwnedPgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     approvePgRequest: (state) => {
          state.loading = true;
     },

     approvePgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     approvePgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     impressionPgRequest: (state) => {
          state.loading = true;
     },

     impressionPgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
          state.impression = action.payload.impression
     },

     impressionPgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     likePgRequest: (state) => {
          state.loading = true;
     },

     likePgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     likePgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     getSinglePgRequest: (state) => {
          state.loading = true;
     },

     getSinglePgSuccesss: (state, action) => {

          state.loading = false;
          state.pg = action.payload;
     },

     getSinglePgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     getLikedPgRequest: (state) => {
          state.loading = true;
     },

     getLikedPgSuccesss: (state, action) => {

          state.loading = false;
          state.likedPg = action.payload;
     },

     getLikedPgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

     addRatingRequest: (state) => {
          state.loading = true;
     },

     addRatingSuccesss: (state, action) => {

          state.loading = false;
          state.message = action.payload;
     },

     addRatingFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },


     UpdateIndividualPgRequest: (state) => {
          state.loading = true;

     },

     UpdateIndividualPgSuccesss: (state, action) => {
          state.loading = false;
          state.message = action.payload.message;
     },

     UpdateIndividualPgFail: (state, action) => {
          state.loading = false;
          state.error = action.error;
     },

})

