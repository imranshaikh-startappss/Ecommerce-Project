import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import Slice from "./Slices/Slice"

 const store = configureStore({
  
  reducer: {
    user:Slice,
    users: userSlice,

  },
})
export default store