import { cartFetching, cartSuccess, cartErr, cartQuanIncrement,orderFailed,orderRequest,orderSuccess } from '../redux/cart.js'
import toast from "react-hot-toast";

export const getCartItems = async (dispatch) => {
  try {
    dispatch(cartFetching())
    const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/cart`, {
      method: "GET",
      headers: { Accept: 'application/json', 'Content-Type': "application/json" },
      credentials: "include"

    })
    const data = await res.json()


    if (res.status === 422 || res.status === 500) {
      toast.error(data.err)

    } else if (!data) {
      dispatch(cartErr())
    }
    else {

      dispatch(cartSuccess(data.allProducts))
      dispatch(cartQuanIncrement(data.cartQuan))
    }



  } catch (error) {
    console.log(error)
    dispatch(cartErr())
  }
}


export const myOrderDetails = async (dispatch) => {
  try {
    dispatch(orderRequest())
    const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/myOrder`, {
      method: "GET",
      headers: { Accept: 'application/json', 'Content-Type': "application/json" },
      credentials: "include"

    })
    const data = await res.json()


    if (res.status === 422 || res.status === 500) {
      toast.error(data.err)

    } else if (!data) {
      dispatch(orderFailed())
    }
    else {
      dispatch(orderSuccess(data.details))
  
    }



  } catch (error) {
    console.log(error)
    dispatch(orderFailed())
  }
}