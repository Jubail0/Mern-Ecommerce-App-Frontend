import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:null,
        isLoading:false,
        err:false,

        cart_quan_loading:false,
        cartQuantity:0,
        cart_quan_error:false,
        totalPrice:0,

        orderLoading:false,
        orderDetails:null,
        orderFail:false
        
    },
    reducers:{
        cartFetching:(state)=>{
            state.isLoading=true
            state.err=false
        },
        cartSuccess:(state,actions)=>{
            state.isLoading=false
            state.products=actions.payload
            state.cart_quan_loading=false
           
        },
        cart_quan_fetcing:(state)=>{
            state.cart_quan_loading = true
        },
        cartQuanIncrement:(state,actions)=>{
            state.cartQuantity = actions.payload
           
        },
        cart_quan_err:(state)=>{
            state.cart_quan_error = true
            state.cart_quan_loading=false
        },
        cartTotalPrice:(state,actions)=>{
         state.totalPrice = actions.payload
        },
       
        cartErr:(state)=>{
            state.err=true
            state.isLoading=false
        },

        orderRequest:(state)=>{
            state.orderLoading = true
        },
        orderSuccess:(state,action)=>{
            state.orderLoading = false
            state.orderDetails = action.payload
        },
        orderFailed:(state)=>{
            state.orderFail = true
            state.orderLoading=false
        }
    }
})

export const{cartFetching,cartSuccess,cartErr,cartQuanIncrement,cartTotalPrice,orderRequest,orderFailed,orderSuccess,cart_quan_err,cart_quan_fetcing}=cartSlice.actions
export default cartSlice.reducer