import { createSlice} from "@reduxjs/toolkit";


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
