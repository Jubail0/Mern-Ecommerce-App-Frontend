import {
    productFetching,
    allProducts,
    productSucceess,
    productErr,
    totalPage,
    priceSorted
} from '../redux/product.js'

import { 
    success_sub_categories,
} from '../redux/product'




export const fetchProducts = async (categoryName, dispatch, page,category, priceRangeValue, priceSort, search) => {

    try {
        dispatch(productFetching())
        let url 

        if(category|| priceRangeValue|| priceSort ||search){
            url = `${process.env.REACT_APP_FETCH_URL}/products/${categoryName}?page=${page}&pricerange=${priceRangeValue}&subcat=${category}&pricesort=${priceSort}&search=${search}`

        }else{
            url = `${process.env.REACT_APP_FETCH_URL }/products/${categoryName}?page=${page}`
        }

        const res = await fetch( url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json()
        if (res.status !== 200 || ! data) {
            dispatch(productErr())
            console.log(data.err)
        } else {
            dispatch(totalPage(data.totalPages))
            dispatch(productSucceess(data.productPerPage))
            dispatch(priceSorted(data.sortedPrice))
            dispatch(allProducts({perPage: data.totalProductsPerPage, categoryLength: data.categoryLength, allproductLength: data.totalProducts}))
            dispatch(success_sub_categories(data.getSubCat))
        }
    } catch (error) {
        console.log(error)
    }
}
