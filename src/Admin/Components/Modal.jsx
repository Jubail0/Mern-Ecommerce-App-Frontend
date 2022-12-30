import React,{useRef} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatPrice from '../../Components/FormatPrice'
import { CircularProgress } from '@mui/material'
import '../css/Modal.css'
import {deleteSubCategory} from '../API/subCategory'
import { useDispatch,useSelector } from 'react-redux';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ScrollArea from 'react-scrollbar'
import {updateProduct}from'../API/adminProducts'

const Modal = ({

    // from Order page
    orderPage,
    data,
    setModal,
    // from category page
    categoryPage,
    loading,
    setPopUp,
    // product page
     editProduct,
     setToggleModal
}) => {

    const dispatch =useDispatch()
    const ref = useRef(null)
    const {single_product_data}=useSelector(state=>state.admin); 
    

    const [handleInputs,setHandleInputs]=React.useState({
      name:single_product_data?.name,
      desc:single_product_data?.desc,
      price:single_product_data?.price,
      stocks:single_product_data?.stocks,
      productImg:'',
   })

    const handleOutsideClick = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
           setModal && setModal(false)
           setPopUp && setPopUp(false)
           setToggleModal && setToggleModal(false)
          }
          
    }

    React.useEffect(()=>{
        window.addEventListener('click',handleOutsideClick)
        return ()=>{
            window.removeEventListener('click',handleOutsideClick)
        }
        
    },[])

 
      

    
     const handleChange = (e)=>{
      const{name,value,files,type}=e.target
      setHandleInputs(prevState => ({
         ...prevState,
         [name]:type==="file" ? files[0] : value
      }))
     
      }
  

if(orderPage){

  const{userId,orderItems,orderStatus,totalPrice,userAddress,isPaid,paymentMethod,razorpay,codId,paidAt,createdAt}=data
  return (
    <div className='singleOrder_popupModal' ref={ref} >
                <div style={{textAlign:'right'}} >
                <CloseIcon fontSize='10' sx={{cursor:'pointer'}} onClick={()=>{setModal(false)}}/>
                </div>
                <div className='single_order_heading' >
                    <h2>Order Details</h2>
                    <hr/>

                </div>
               {!loading ?<div className='single_order_body' >
               
                    <ul className='single_order_lists_container' >
                   
                        <li className='single_order_list'><span>Order ID:</span>{(razorpay && razorpay.razorpayOrderId )||(codId && codId )}</li>
                        <li className='single_order_list'><span>User ID:</span>{userId && userId}</li>
                        <li className='single_order_list'><span>User Name:</span>{userAddress && userAddress.fullName.toUpperCase()}</li>
                        <li className='single_order_list ' >
                        <span>Products:</span><div className='prdcts-con'>{orderItems && orderItems?.products?.map((product,index) =>
                        <div className='single_order_Product_details' key={index}> 
                        <span>Id-{index +1}: {product.productId}</span>
                        <span> quantity: {product.quantity}</span>
                        <span>{(product.storage && `Storage:  ${product.storage}`) || (product.size && `Size: ${product.size} `)}</span>
                        </div>)}</div></li>
                        <li className='single_order_list'><span>Payment Mode:</span>{paymentMethod.toUpperCase()}</li>
                        <li className='single_order_list'><span>isPaid:</span>{isPaid ? "PAID":"NOT PAID YET"}</li>
                       {isPaid && <li className='single_order_list'><span>Paid on:</span>{paidAt.slice(0,10)}</li>}
                        <li className='single_order_list'><span>Status:</span>{orderStatus.toUpperCase()}</li>
                        <li className='single_order_list'><span>Amount:</span>{<FormatPrice price={totalPrice}/>}</li>
                        <li className='single_order_list'><span>User Address:</span>
                        <div className='user_address'>
                            <span>Address 1: {userAddress.address1}</span>
                            <span>Address 2: {userAddress.address2}</span>
                            <span>City: {userAddress.city}</span>
                            <span>Pincode: {userAddress.pincode}</span>
                            <span>State: {userAddress.state}</span>
                        </div>
                        </li>
                        <li className='single_order_list'><span>Order created on:</span>{createdAt.slice(0,10)}</li>
                       
                       
                    </ul>
                    
                </div>:
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
                    <CircularProgress/>

                </div>
                }
                </div>
  )}
if(categoryPage)
  return (

    <div className="category_container2" ref={ref} >
    { !loading ?
     <div>
      <div className='close_btn' onClick={()=>{setPopUp(false)}}><CloseIcon fontSize='10' sx={{cursor:'pointer'}}/></div>
      <h2 className='category_container2_heaading'>{data?.mainCategory?.toUpperCase()} Category</h2>
      
      <ol className='subCategories_container'>
        <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        smoothScrolling= {true}
        horizontal={false}>
            
        {data?.subCategory?.length > 0 ? data?.subCategory?.map((cat,index)=>

         <li className='subCategories' key={index}><div style={{letterSpacing:2,fontSize:'20px'}} >
         <span style={{marginRight:'10px'}}>{index + 1}</span>  {cat.toUpperCase()}</div>
         <span className='delete_btn' onClick={()=>deleteSubCategory(dispatch,data?.mainCategory,cat)}><DeleteIcon fontSize='20'/></span>
         </li>

        ):<p>"No sub-categories are found!"</p>
      
      }
      </ScrollArea>
      </ol>
    
    
     </div> : 
     
     <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
      <CircularProgress />
      
     </div>
     }
     
    
    </div>
  )
if(editProduct){
 

return(
  <div className='singleOrder_popupModal2' ref={ref}>
  <div className="addProductForm  modalPageForm">
  <div className='addProductTitle'>
  <h2>Add Product</h2>
  
  <div>
  <button onClick={()=>updateProduct(dispatch,single_product_data?._id  ,handleInputs,setToggleModal)} style={{marginRight:"10px"}} className='button-3'>Update</button>
  <button className='button-3' onClick={()=>setToggleModal(false)}>Cancel</button>
  </div>
  </div>
 
  <form className='productForm productForm2'>
      <div className='productFormLeft'>
      <div className='productFields'>
          <label htmlFor='productName'>Product Name</label>
          <input type="text" name='name' value={handleInputs.name} onChange={handleChange} id='productName'/>
      </div>

      <div className='productFields'>
          <label htmlFor="ProductDescription">Product Description</label>
          <input type="text" name='desc' value={handleInputs.desc} onChange={handleChange} id='ProductDescription' />
          
      </div>
     
      <div className='productFields'>
          <label htmlFor='productStocks'>Stocks</label>
          <input type="number" name='stocks' id='productStocks' value={handleInputs.stocks} onChange={handleChange}/>
      </div>

      <div className='productFields'>
          <label htmlFor='productPrice'>Product Price (<CurrencyRupeeIcon sx={{fontSize:15}}/>)</label>
          <input type="number" name='price' value={handleInputs.price} onChange={handleChange} id='productPrice'/>
      </div>

      <div className='productFields'>
          <label htmlFor='productImg'>Product Image</label>
          <input type='file' id='productImg' name='productImg' value={handleInputs.img} onChange={handleChange}/>
      </div>
     
      

      </div>
  </form>
</div>
</div>

)}



}

export default Modal
