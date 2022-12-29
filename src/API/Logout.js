import { logout } from "../redux/userSlice";
import { cartQuanIncrement, cartSuccess, cartTotalPrice  } from "../redux/cart";
import toast  from "react-hot-toast";

const loggedout = (dispatch,navigate)=>{
    fetch(`${process.env.REACT_APP_FETCH_URL}/logout`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
     }).then((res)=>{
    navigate("/",{replace:true})
    if(res.status === 422){
        const error = new Error(res.error)
        throw error
    }else{
      dispatch(logout())
      dispatch(cartQuanIncrement(0))
      dispatch(cartSuccess(null))
      dispatch(cartTotalPrice(0))
      toast.success("Logout Successfull")
    }
     }).catch((error)=> console.log(error))
}

export default loggedout