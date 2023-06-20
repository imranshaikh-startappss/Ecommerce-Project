import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const addUser = createAsyncThunk("Adding User", {
    
})

const UserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log("addUserSlice");
    },
  },
});
// Action creators are generated for each case reducer function

export default UserSlice.reducers
