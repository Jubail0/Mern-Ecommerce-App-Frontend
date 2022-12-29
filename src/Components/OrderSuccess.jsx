import React from 'react'
import '../Components/CSS/OrderSuccess.css'
import {NavLink} from 'react-router-dom'
import Loading from '../Components/Loading'
import {useSelector}from 'react-redux'

function OrderSuccess() {
  const{orderLoading} = useSelector((state)=> state.cart)
  return (
  <> {orderLoading ? <Loading type="rise"/> :
    <div className='orderSuccess_container'>
      <div className='orderSucess_box'>
        <h1>Order Placed Successfully</h1>
        <p>check your order details <NavLink className='orderDetails_link' to='/myOrder'>here</NavLink></p>
      </div>
    </div>
  }</> 
  )
}

export default OrderSuccess