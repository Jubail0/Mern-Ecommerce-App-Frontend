import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: "Products",
    initialState: {
        isFetching: false,
        product1: null,
        newArrivalsProducts:null,
        singleProductSuccess: null,
        isError: false,
        pageNumber: 1,
        totalPages: 0,
        results: null,
        sortedPrice: null,
        sub_categories_loading:false,
        sub_categories:null,
        sub_categories_error:false,
        top_products:null

    },
    reducers: {
        productFetching: (state) => {
            state.isFetching = true
        },
        productSucceess: (state, actions) => {
            state.isFetching = false
            state.product1 = actions.payload

        },
        newArrivalsSuccess:(state,actions)=>{
            state.newArrivalsProducts = actions.payload
        },
        singleProduct: (state, actions) => {
            state.isFetching = false
            state.singleProductSuccess = actions.payload
        },
        productErr: (state) => {
            state.isFetching = false
            state.isError = true
        },
        pagination: (state, actions) => {
            state.pageNumber = actions.payload
        },
        totalPage: (state, actions) => {
            state.totalPages = actions.payload
        },
        allProducts: (state, actions) => {
            state.results = actions.payload

        },
        priceSorted: (state, actions) => {
            state.sortedPrice = actions.payload
        },
        loading_subCategories:(state)=>{
            state.sub_categories_loading = true
        },
        success_sub_categories:(state,actions)=>{
            state.sub_categories = actions.payload
            state.sub_categories_loading = false
        },
        error_sub_categories:(state)=>{
            state.sub_categories_error = true
            state.sub_categories_loading = false
        }
        ,
       topProducts : (state,actions)=>{
        state.top_products = actions.payload
       }
        
    }
})

export const {
    productFetching,
    productSucceess,
    productErr,
    singleProduct,
    pagination,
    allProducts,
    totalPage,
    priceSorted,
    newArrivalsSuccess,
    loading_subCategories,
    success_sub_categories,
    error_sub_categories,
    topProducts
} = productSlice.actions

export default productSlice.reducer
