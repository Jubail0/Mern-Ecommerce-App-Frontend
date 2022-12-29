import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({

    name: 'admin',
    initialState: {
        // for dashboard
        dashboard_loading: false,
        dasboard_data: null,
        dasboard_error: false,

        // for get_all_Orders
        all_orders_loading: false,
        all_orders_data: null,
        all_orders_error: false,
        
        // get single order
        single_order_loading: false,
        single_order_data: null,
        single_order_error: false,

        // update order
        update_order_loading: false,
        update_order_error: false,

        // delete order
        delete_order_loading: false,
        delete_order_error: false,

        // for add Product
        addProduct_loading: false,
        addProduct_error: false,

        // for get_all products
        all_prodcuts_loading: false,
        all_prodcuts_data: null,
        all_prodcuts_error: false,

        // single product
        single_product_loading: false,
        single_product_data: null,
        single_prodcut_error: false,

        // update product
        update_product_loading: false,
        update_prodcut_error: false,

        // delete product
        delete_product_loading: false,
        delete_prodcut_error: false,

        // for add sub-category
        add_sub_category_loading: false,
        add_sub_category_error: false,

        // for get_all_sub-category
        get_subcategory_loading: false,
        get_subcategory_data: null,
        get_subcategory_error: false,

        // delete subCategory
        delete_subCat_loading: false,
        delete_subCat_error: false

    },
    reducers: {
        // for dashboard
        loading_dashboard: (state) => {
            state.dashboard_loading = true
        },
        success_dashboard: (state, actions) => {
            state.dashboard_loading = false
            state.dasboard_data = actions.payload
            state.dasboard_error = false
        },
        error_dashboard: (state) => {
            state.dasboard_error = true
            state.dashboard_loading = false
        },

        // for get_all_Orders
        loading_all_orders: (state) => {
            state.all_orders_loading = true
        },
        success_all_orders: (state, actions) => {
            state.all_orders_loading = false
            state.all_orders_error = false
            state.all_orders_data = actions.payload
        },
        error_all_orders: (state) => {
            state.all_orders_error = true
            state.all_orders_loading = false
        },

        // view single order 
        loading_single_order: (state) => {
            state.single_order_loading = true
        },
        success_single_order: (state, actions) => {
            state.single_order_loading = false
            state.all_orders_error = false
            state.single_order_data = actions.payload
        },
        error_single_order: (state) => {
            state.all_orders_error = true
            state.all_orders_loading = false
        },

        // update single order 
        update_single_order_loading: (state) => {
            state.update_order_loading = true
        },
        update_single_order_error: (state) => {
            state.update_order_error = true
            state.update_order_loading = false
        },

        // delete single order 
        delete_single_order_loading: (state) => {
            state.delete_order_loading = true

        },
        delete_single_order_error: (state) => {
            state.delete_order_error = true
            state.delete_order_loading = false
        },

        // for add Product
        loading_addpproduct: (state) => {
            state.addProduct_loading = true
            

        },
        success_add_product: (state) => {
            state.addProduct_loading = false
            state.addProduct_error = false
        },
        error_addProduct: (state) => {
            state.addProduct_loading = false
            state.addProduct_error = true

        },

        // get all Products

        loading_all_products: (state) => {
            state.all_prodcuts_loading = true
        },
        success_all_products: (state, actions) => {
            state.all_prodcuts_data = actions.payload
            state.all_prodcuts_loading = false
        },
        error_all_products: (state) => {
            state.all_prodcuts_loading = false
            state.all_prodcuts_error = true
        },

        // single Product
        loading_product: (state) => {
            state.single_product_loading = true
        },
        success_product: (state, actions) => {
            state.single_product_data = actions.payload
            state.single_product_loading = false
        },
        error_product: (state) => {
            state.single_product_loading = false
            state.single_prodcut_error = true
        },

        // update Product
        loading_update_product: (state) => {
            state.update_product_loading = true
        },
        error_update_product: (state) => {
            state.update_product_loading = false
            state.update_prodcut_error = true
        },

        // delete Product
        loading_delete_product: (state) => {
            state.delete_product_loading = true
        },
        error_delete_product: (state) => {
            state.delete_product_loading = false
            state.delete_prodcut_error = true
        },

        // for add sub-category
        loading_add_subCategory: (state) => {
            state.add_sub_category_loading = true
            
        },
        success_add_subCategory: (state) => {
            state.add_sub_category_loading = false
            state.add_sub_category_error = false
        },
        error_add_subCategory: (state) => {
            state.add_sub_category_loading = false
            state.add_sub_category_error = true
        },
        // get sub Category
        loading_get_subCategory: (state) => {
            state.get_subcategory_loading = true
        },
        success_get_subCategory: (state, actions) => {
            state.get_subcategory_data = actions.payload
            state.get_subcategory_loading = false
        },
        error_get_subCategory: (state) => {
            state.get_subcategory_loading = false
            state.get_subcategory_error = true
        },

        // delete sub Category
        loading_delete_subCategory: (state) => {
            state.delete_subCat_loading = true
        },
        success_deleted_subCategory: (state, actions) => {
            state.get_subcategory_data = actions.payload
            state.delete_subCat_loading = false
        },
        error_delete_subCategory: (state) => {
            state.delete_subCat_loading = false
            state.delete_subCat_error = true
        }


    }
})

export const {
    // for dashboard
    loading_dashboard,
    success_dashboard,
    error_dashboard,

    // for get_all_Orders
    loading_all_orders,
    success_all_orders,
    error_all_orders,

    // single Order 
    loading_single_order,
    success_single_order,
    error_single_order,

    // update single order
    update_single_order_loading,
    update_single_order_error,

    // delete single order
    delete_single_order_loading,
    delete_single_order_error,

    // for add Product
    loading_addpproduct,
    success_add_product,
    error_addProduct,

    // get all Products
    loading_all_products,
    success_all_products,
    error_all_products,

    // single product
    loading_product,
    success_product,
    error_product,

    // update product
    loading_update_product,
    error_update_product,

    // delete product
    loading_delete_product,
    error_delete_product,

    // for add sub-category
    loading_add_subCategory,
    success_add_subCategory,
    error_add_subCategory,

    // get sub Category
    loading_get_subCategory,
    success_get_subCategory,
    error_get_subCategory,

    // delete subCateory
    loading_delete_subCategory,
    success_deleted_subCategory,
    error_delete_subCategory

} = adminSlice.actions

export default adminSlice.reducer