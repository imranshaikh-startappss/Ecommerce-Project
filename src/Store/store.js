import { configureStore } from '@reduxjs/toolkit'
import Slice from "./Slices/Slice"


 const store = configureStore({
  
  reducer: {
    user:Slice,

  },
})
export default store