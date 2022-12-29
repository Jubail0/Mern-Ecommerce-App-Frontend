import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink } from 'react-router-dom';
import { deleteProduct, singleProduct } from '../API/adminProducts';
import {getSingleOrder, updatingOrder} from '../API/getAdminOrdersData'
import { useDispatch } from 'react-redux'
import {deleteOrder} from '../API/getAdminOrdersData'
function AdminTable({headers,dashboard,orders,products,transitions,ordersData,productsData,setModal,setToggleModal,updateStatus,
  setUpdateStatus,updateOrder,setUpdateOrder}) {
  const dispatch = useDispatch()
const [ID,setID]=React.useState('')

 let count = 1;

const updateStatusBtn =(orderID)=>{
if(orderID) setID(orderID)
setUpdateStatus(true)

}
const handleChange = (e)=>{
setUpdateOrder(e.target.value)
}


  
  return (
    <>
    
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((headerss,index) => <TableCell key={index}>{headerss}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
         {
          dashboard && 
          transitions.map((i,index) => 
            <TableRow key={index}>
              <TableCell>{count++}</TableCell>
              <TableCell>{
               <div>
                <span>{i.date?.day}/</span>
                <span>{i.date?.month}/</span>
                <span>{i.date?.year}</span>      
                </div> 
                
                }</TableCell>
              <TableCell>{i.payment_mode}</TableCell>
              <TableCell>₹{i.amount}</TableCell>
              <TableCell>{i.status}</TableCell>
            </TableRow>
            )}
            { orders &&
              ordersData?.map((orders)=>
             <TableRow key={orders._id}>
              <TableCell>{count++}</TableCell>
              <TableCell>{orders.orderId.razorpayId || orders.orderId.codId}</TableCell>
              <TableCell>{orders.quantity}</TableCell>
              <TableCell>{orders.amount}</TableCell>
              <TableCell>{orders.isPaid ? "Paid" :"Not Paid"}</TableCell>
              <TableCell>{(updateStatus && ID === orders._id) ? 
              <>
              <select onChange={handleChange}>
               {orders.status ==="processing" &&<> <option value="processing" selected disabled hidden>processing</option> <option value='shipped'>shipped</option> </>}
               {orders.status === 'shipped' && <> <option value="shipped" selected disabled hidden>shipped</option> <option value="delivered">delivered</option> </>}
               
               </select>
              <span style={{marginLeft:'10px'}} onClick={()=>updatingOrder(dispatch,orders._id,updateOrder)}><i style={{fontSize:"20px",cursor:'pointer'}} className='fa fa-check'/></span> 
               <span onClick={()=>setUpdateStatus(false)}> <i style={{fontSize:"20px",cursor:'pointer'}}  className='fa fa-close'/></span>
               </>
               : orders.status }
               </TableCell>
              <TableCell>
              <div style={{width:"120px",display:"flex",flexDirection:"row",gap:'10px'}}>
                <button style={{background:'transparent',border:'none',cursor:'pointer'}} onClick={()=>updateStatusBtn(orders._id)}><i style={{fontSize:"20px"}} className='fa fa-edit'/></button>
                <button style={{background:'transparent',border:'none',cursor:'pointer'}}onClick={()=>{getSingleOrder(dispatch,orders._id,setModal)}}><VisibilityIcon  sx={{color:'gray'}}/></button>
                <button style={{background:'transparent',border:'none',cursor:'pointer'}} onClick={()=>deleteOrder(dispatch,orders._id)}><DeleteIcon  sx={{color:'gray'}}/></button>
                </div>
              </TableCell>
             </TableRow>   
                )
            }
            { products &&
              productsData?.map((product)=>
             <TableRow key={product._id} >
              <TableCell>#{product._id}</TableCell>
              <TableCell>
                <div><img style={{width:"60px",height:'60px',objectFit:'cover'}} src={product.img.imgeUrl} alt='productImg'/></div>
                </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stocks}</TableCell>
              <TableCell>{product.price}</TableCell>
              
              <TableCell>
                <div style={{width:"120px",display:"flex",flexDirection:"row",justifyContent:'space-between'}}>
                <button onClick={()=>singleProduct(dispatch,product._id,setToggleModal)} style={{background:'transparent',border:'none',cursor:'pointer'}}><EditIcon  sx={{color:'gray'}}/></button>
               <NavLink to={`/admin/allProducts/${product._id}`} > <button style={{background:'transparent',border:'none',cursor:'pointer'}}><VisibilityIcon sx={{color:'gray'}}/></button></NavLink>
                <button onClick={()=>deleteProduct(dispatch,product._id)} style={{background:'transparent',border:'none',cursor:'pointer'}}><DeleteIcon  sx={{color:'gray'}}/></button>
               
                </div>
              </TableCell>
             </TableRow>   
                )
            }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default AdminTable

 