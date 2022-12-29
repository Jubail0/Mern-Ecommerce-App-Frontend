import React from 'react'
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import './CSS/OrderPage.css';
import {buyNow} from '../API/payment'
import{useSelector,useDispatch} from'react-redux'
import {useNavigate}from 'react-router-dom'


function OrderPage() {
const dispatch = useDispatch()
const navigate =useNavigate()
const{totalPrice} = useSelector((state)=> state.cart)
const[address,setAddress]=React.useState({
   fullName:'',
   address1:'',
   address2:'',
   city:"",
   state:'',
   pincode:0,
   payment:''

})

const handleChange =(e)=>{
const{name,value} = e.target
setAddress(prevState=> ({
  ...prevState,
  [name]:value !=="Select" ? value :''
}))
}

  return (
    <div style={
      {
        backgroundColor: '#f1f3f6',
        // height: '100vh'
      }
    }> 
      <Navbar />
      <Container maxWidth="sm"
        sx={
          {
            bgcolor: '#fff',
            padding: '30px',
            marginTop: '40px',
            overflow: "hidden"
          }
        }>


        <form >
          <div className='shipping_container'>
          <div style={{flex:'2'}}>
          <h3 style={
            {
              padding: '15px 0px',
              textAlign: 'left',
              lineHeight:'1rem',
              letterSpacing:"1.5px"
            }
          }>SHIPPING INFO</h3>
          <div style={
            {
              display: 'flex',
              flexDirection: "column",
              gap: "25px",
             
            }
          }
            className="OrderFormContainer">
            <input className='orderForm' type="text" name="fullName" value={address.fullName} onChange={handleChange} placeholder='Full name' required />
            <input className='orderForm' type="text" name="address1" value={address.address1} onChange={handleChange} placeholder='Address Line 1' required />
            <input className='orderForm' type="text" name="address2" value={address.address2} onChange={handleChange} placeholder='Address Line 2' required />
            <input className='orderForm' type="text" name="city" value={address.city} onChange={handleChange} placeholder='City' required />
            <input className='orderForm' type="text" name="state" value={address.state} onChange={handleChange} placeholder='State/Province/Region' required />
            <input className='orderForm' type="number" name="pincode" value={address.pincode} onChange={handleChange} placeholder='Zip/Pincode' required />
          </div>
          </div>

          <div style={{flex:'1'}}>
          <h3 style={
            {
              padding: '15px 0px',
              textAlign: 'left',
              lineHeight:'1rem',
              letterSpacing:"1.5px"
            }
          }>PAYMENT</h3>
          <div style={
            {
              display:"flex",
              flexDirection:"column",
              gap: "20px"
            }
          }
            >
           <select style={{padding:"5px",fontSize:"15px"}} name={"payment"}  onChange={handleChange} required>
            <option>
              Select
            </option>
            <option>
              Cash on delivery
            </option>
            <option>
              Razorpay
            </option>
           </select>
      
          </div>
          </div>
          </div>
          <div style={{width:"100%"}}>
        <button type='submit' onClick={(e)=> buyNow(e,totalPrice,dispatch,navigate,address)} style={
              {
                padding: '8px',
                cursor: 'pointer',
                marginTop: '20px',
                width:"100%",
                border:'none',
                height:'50px',
                backgroundColor:"green",
                color:"white",
                fontSize:"15px",
                lineHeight:'1rem',
                letterSpacing:"1.5px"
              }
            }
              > "Proceed To Checkout"</button>
              </div>
              
      
        </form>
        

      </Container>

    </div>
  )
}

export default OrderPage
