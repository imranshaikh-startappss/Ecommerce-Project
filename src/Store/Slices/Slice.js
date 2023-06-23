import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { intansce } from "../../common/customIntsan";

export const login = createAsyncThunk("Login", async (data, { rejectWithValue }) => {
    
   if (data.email && data.password) { 
                data = {...data,isLogin:true}
            }
    const result = await intansce.post("/Authentication", data)

    try {
        console.log("getting response:",result)
        return result.data

    } catch (error) {
        return rejectWithValue(error)
    }
})

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





const initialState = {
    email: "",
    password: "",
    isLogin: false
}
    

const Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    },
    extraReducers:{
        [login.pending]: () => {

            console.log("pending data")
        },
        [login.fulfilled]: (state, {payload}) => {
            // console.log(action)
            console.log("storing in state:", payload)
            // state.email = payload.email
            // state.password = payload.password
            // if (state.email && state.password) {
            //     state.isLogin = true
            // }
            const {email,password,id, isLogin} = payload
            state={...state,email,password,id,isLogin}
            return state
        },
        [login.rejected]: (state, action) => {
            console.log(action.payload)

        }

    },

})

export default Slice.reducer;
// export const { login } = Slice.actions
