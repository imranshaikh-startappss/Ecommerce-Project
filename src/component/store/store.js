import { configureStore } from '@reduxjs/toolkit'
import Slice from './slices/Slice'


 const store = configureStore({
  
  reducer: {
    user:Slice,

  },
})
export default store