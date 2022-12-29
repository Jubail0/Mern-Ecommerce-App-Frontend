import {
    // all order
    loading_all_orders,
    success_all_orders,
    error_all_orders,

    // single order
    loading_single_order,
    success_single_order,
    error_single_order,
    
    // update single order
    update_single_order_loading,
    update_single_order_error,
    
    // delete single order
    delete_single_order_loading,
    delete_single_order_error,
} from '../../redux/admin'

import toast  from "react-hot-toast";


const getAdminOrdersData = async(dispatch)=>{
    try {
        dispatch(loading_all_orders())
        const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/orders`,{
        method:'GET',
        headers:{'Content-Type':'application/json'},
        credentials:'include'
       })
       const data = await res.json()
    
       if(data){
        dispatch(success_all_orders(data))
       }
        
    } catch (error) {
        dispatch(error_all_orders())
        console.log(error)
    }
    
}

const getSingleOrder = async(dispatch,id,setModal)=>{
    if(setModal){
        setModal(true);
    }
    try {
        dispatch(loading_single_order())
        const res2 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/orders/${id}`,{
        method:'GET',
        headers:{'Content-Type':'application/json'},
        credentials:'include'
       })
       const data2 = await res2.json()
    
       if(data2){
        dispatch(success_single_order(data2))
       }
        
    } catch (error) {
        dispatch(error_single_order())
        console.log(error)
    }
}

const updatingOrder = async(dispatch,id,status)=>{
    
    try {
        dispatch(update_single_order_loading())
        const res3 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/orders/${id}`,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({status}),
        credentials:'include'
       })
       const data3 = await res3.json()
    
       if(res3.status === 422 ){
        toast.error(data3.err)
       }else{
        toast.success(data3.message)
       }
        
    } catch (error) {
        dispatch(update_single_order_error())
        console.log(error)
    }
}
const deleteOrder = async(dispatch,id)=>{
    try {
        dispatch(delete_single_order_loading())
        const res4 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/orders/${id}`,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        credentials:'include'
       })
       const data4 = await res4.json()
    
       if(res4.status === 200 || data4){
        dispatch(success_all_orders(data4.ordersInfo))
        toast.success("deleted successfully")
       }else{
        dispatch(delete_single_order_error())
        toast.error(data4.err)
       }
        
    } catch (error) {
        dispatch(delete_single_order_error())
        console.log(error)
    }
}

export {
    getAdminOrdersData,
    getSingleOrder,
    updatingOrder,
    deleteOrder,
};