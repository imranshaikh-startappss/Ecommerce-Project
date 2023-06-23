import { createSlice} from "@reduxjs/toolkit";

// export const getUser = createAsyncThunk("Adding User", async(data, {rejectWithValue})=>{
//     const response = await instance.post("/users",data)
//       try {
//         console.log(response)
//         return response.data
  
//       } catch (error) {
//         console.log(error)
//         return rejectWithValue(error.response)
//       }
//   })





const initialState={
    email: "",
    password: "",
    isLogin: false
}

const Slice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login(state,action){
            // console.log(action)
            state.email = action.payload.email
            state.password = action.payload.password
            if(state.email && state.password){
                state.isLogin = true
            }
            return state
        }

    }, 
   
})

export default Slice.reducer;
export const {login} = Slice.actions
