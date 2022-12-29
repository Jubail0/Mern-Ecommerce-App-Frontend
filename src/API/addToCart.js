import {cartQuanIncrement}from'../redux/cart'
import toast  from "react-hot-toast";

export const addToCart = async(id,dispatch,size,storage,category)=>{
   
    try {
            const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/addToCart`,{
                method:"POST",
                headers:{Accept:'application/json','Content-Type':"application/json"},
                body:JSON.stringify({id,size,storage,category}),
                credentials:"include"
            })
            const data = await res.json()
            console.log(data)
            if(res.status === 442 ){
                toast.error("please login")  
            }else if(res.staus===422 || res.staus===500 || data.err){
                toast.error(data.err)
            }
            else{
            toast.success(data.message)
            dispatch(cartQuanIncrement(data.addCartQuantity))
         }
        
        
     
    } catch (error) {
        console.log(error)
    }
  
    }