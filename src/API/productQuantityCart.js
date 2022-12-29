import {cartSuccess,cartTotalPrice,cart_quan_fetcing,cart_quan_err}from '../redux/cart.js'
import toast  from "react-hot-toast";
const handleQuantity = async (id,productQuantity,dispatch)=>{
    
try {
    dispatch(cart_quan_fetcing())
    const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/cart_product_quan`,{
    method:"POST",
    headers:{Accept:"application/json",'Content-Type':"application/json"},
    body:JSON.stringify({quantity:Number(productQuantity),productId:id}),
    credentials:'include'
    })
    const data = await res.json()
    if(res.status === 422 ){
         toast.error(data.err)
        
    }else{
         dispatch(cartSuccess(data.updateProducts))
         dispatch(cartTotalPrice(data.totalPrice))
        // console.log(data.updateProducts)
    }
} catch (error) {
    console.log(error)
    dispatch(cart_quan_err())
}
}
export default handleQuantity