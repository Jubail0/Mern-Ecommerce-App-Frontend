import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { myOrderDetails } from '../API/getCart';
import { useDispatch,useSelector } from 'react-redux';
import Loading from '../Components/Loading';
import "./MyOrder.css"
import FormatPrice from '../Components/FormatPrice'

 const MyOrder = () => {
const dispatch = useDispatch()
const {orderLoading,orderDetails}=useSelector((state)=>state.cart)

    const myOrderHeadings = [
        "Order ID",
        "Items Qty",
        "Status",
        "Amount",
        "Placed on"
    ]

    React.useEffect(()=>{
        myOrderDetails(dispatch)
    },[])


  return (
    <div>
        <Navbar/>
       {orderLoading ? <Loading type='rise'/> :
        <div className='myOrder'>
            <div className='myOrder_container'>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {myOrderHeadings.map((details,index)=> <TableCell key={index}>{details}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           { orderDetails?.map((order)=> <TableRow key={order.id}>
                                <TableCell>
                                    {order.orderId}
                                </TableCell>
                                <TableCell>
                                {order.qty}
                                </TableCell>
                                <TableCell>
                                   {order.status}
                                </TableCell>
                                <TableCell>
                                  <FormatPrice price={order.amount}/> 
                                </TableCell>
                                <TableCell>
                                   {order.created.slice(0,10)}
                                </TableCell>
                            </TableRow>)}
                        </TableBody>
                        
                      
                    </Table>
                </TableContainer>
            </div>
        </div>}
        <Footer/>

    </div>
  )

}

export default MyOrder;