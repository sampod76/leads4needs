import { configureStore } from '@reduxjs/toolkit'
import {pgReducer} from "./pgReducers"
import {userReducer} from "./userReducer"
import {appproveReducer} from "./approveReducer"

 const store = configureStore({
  reducer: {
    pg:pgReducer,
    user:userReducer,
    appprove:appproveReducer
  },
})

export default store;