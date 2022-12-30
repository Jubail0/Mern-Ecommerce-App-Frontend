import {
// add product
loading_addpproduct,
success_add_product,
error_addProduct,
// get all products
loading_all_products,
success_all_products,
error_all_products,
// get single product
loading_product,
success_product,
error_product,
// update
loading_update_product,
error_update_product,
// delete
loading_delete_product,
error_delete_product
} from '../../redux/admin'

import toast  from "react-hot-toast";


const addProduct = async(dispatch,handleInputs,setOpen)=>{

const{name,price,desc,productImg,stocks,category,subCategory,sizes,storage}=handleInputs

 const formData = new FormData()

 formData.append('name',name)
 formData.append('price',price)
 formData.append('desc',desc)
 formData.append('stocks',stocks)
sizes && formData.append('size',sizes)
storage && formData.append('storage',storage)
 formData.append('category',category)
 formData.append('subCategory',subCategory)
 formData.append('productImage',productImg)


    try {

        dispatch(loading_addpproduct())
        const res = await fetch("https://my-shop-ecommerce-api.onrender.com/admin/addProduct",{
        method:'POST',
        body:formData,
        credentials:'include'
       })
       const data = await res.json()
    
       if(res.status === 422 || !data){
        toast.error(data.err)
        dispatch(error_addProduct())
        setOpen(false)
       }else{
        dispatch(success_add_product())
        toast.success(data.message)
        setOpen(false)

       }
        
    } catch (error) {
        setOpen(false)
        console.log(error)
        dispatch(error_addProduct())
    }
    
    
    }


const allProduct = async(dispatch)=>{
    try {
        dispatch(loading_all_products())
        const res2 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/products`,{
        method:'GET',
        headers:{'Content-Type':'application/json'},
        
        credentials:'include'
       })
       const data2 = await res2.json()
    
       if(data2){
        dispatch(success_all_products(data2))
       }
        
    } catch (error) {
        dispatch(error_all_products())
        console.log(error)
    }
    
    
    }

const singleProduct = async(dispatch,id,setToggleModal)=>{
    setToggleModal && setToggleModal(true)
    try {
        dispatch(loading_product())
        const res3 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/products/${id}`,{
        method:'GET',
        headers:{'Content-Type':'application/json'},
        
        credentials:'include'
       })
       const data3 = await res3.json()
    
       if(data3){
        dispatch(success_product(data3))
       }
        
    } catch (error) {
        dispatch(error_product())
        console.log(error)
    }
    
    
    }

const updateProduct = async(dispatch,id,updatedDetails,setToggleModal)=>{
const{name,price,desc,stocks,productImg}=updatedDetails
 const formData2 = new FormData()

 formData2.append('name',name)
 formData2.append('price',price)
 formData2.append('desc',desc)
 formData2.append('stocks',stocks)
 formData2.append('productImage',productImg)

    try {
        dispatch(loading_update_product())
        const res3 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/products/${id}`,{
        method:'PATCH',
        body: formData2,
        credentials:'include'
       })
       const data3 = await res3.json()
    
       if(res3.status === 422){
        toast.error(data3.err)
       }else{
        toast.success(data3.message)
        setToggleModal(false)
       }
        
    } catch (error) {
        dispatch(error_update_product())
        console.log(error)
    }
    
    }

const deleteProduct = async(dispatch,id)=>{
    try {
        dispatch(loading_delete_product())
        const res3 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/products/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        credentials:'include'
       })
       const data3 = await res3.json()
    
       if(data3){
        toast.success("Product deleted successfully")
        dispatch(success_all_products(data3.getProducts))
       }
        
    } catch (error) {
        dispatch(error_delete_product())
        console.log(error)
    }
    
    
    }

export  {
    addProduct,
    allProduct,
    singleProduct,
    updateProduct,
    deleteProduct
}
