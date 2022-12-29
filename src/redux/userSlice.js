import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"Users",
    initialState:{
        userData :null,
        isFetching:false,
        isError:false,
        isUser:false
    },
    reducers:{
        loginStart : (state)=>{
            state.isFetching = true
        },
        loginSuccess : (state,actions)=>{
            state.isFetching =false
            state.userData = actions.payload
            state.isUser = true

        },
        loginError:(state)=>{
            state.isFetching =false
            state.isUser=false
            state.isError = true
        },

        updateRequest : (state)=>{
            state.isFetching = true
        },
        upDateSuccess : (state,actions)=>{
            state.isFetching =false
            state.userData = actions.payload
            

        },
        updateError:(state)=>{
            state.isFetching =false
            state.isError = true
        },

        logout:(state)=>{
            state.isFetching =false
            state.isUser=false
            state.isError = false
            state.userData = null
        }
    }
})


export const{loginStart,loginSuccess,loginError,logout,updateRequest, upDateSuccess, updateError} = userSlice.actions
export default userSlice.reducer