import toast from 'react-hot-toast';
import {cartSuccess, cartQuanIncrement,cartTotalPrice} from '../redux/cart'

const handleRemove = async (id,dispatch,setOpen) => {
   
    try {
        
        const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/cart/${id}`, {
            method: "DELETE",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            credentials: 'include'
        })

        const data = await res.json()
        if (res.status !== 200 || ! data) {
            console.log("remove-cart-backend-err")

        } else {
            dispatch(cartSuccess(data.existCart))
            dispatch(cartQuanIncrement(data.existCart.length))
            dispatch(cartTotalPrice(data.totalPrice))
            setOpen(false)
            toast.success(data.message)
        }
    } catch (error) {
        console.log(error)
    }
}

export default handleRemove