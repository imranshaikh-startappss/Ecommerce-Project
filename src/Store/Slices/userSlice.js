import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../common/customInstance";


export const addUser = createAsyncThunk("Adding User", async(data, {rejectWithValue})=>{
  const response = await instance.post("/users",data)
    try {
      console.log(`Success: ${response.status}:`,response)
      return response.data

    } catch (error) {
      console.log(error.response)
      return rejectWithValue(error.response)
    }
})

const UserSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: null
  },
  reducers: {
  },
  extraReducers: {
    [addUser.pending]:(state)=> {
      console.log("Loading Data",state)
      state.loading = true
    },
    [addUser.fulfilled]: (state, action)=>{
      console.log("Success:",action.payload)
      state.loading = false
      state.users.push(action.payload)
    },
    [addUser.rejected]: (state,action)=>{
      console.log("Error:",action.payload)
      state.loading = false
      state.error = action.payload
    }
  }
});
// Action creators are generated for each case reducer function
export default UserSlice.reducer;
// export const {addUser} = UserSlice.actions