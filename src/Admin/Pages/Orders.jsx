import React from 'react'
import Sidebar from '../Components/Sidebar'
import AdminTable from '../Components/Table'
import Topbar from '../Components/Topbar'
import '../css/Order.css'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../../Components/Loading'
import {getAdminOrdersData} from '../API/getAdminOrdersData'
import Modal from '../Components/Modal'



function Orders() {
    const dispatch = useDispatch()
    const [modal,setModal]=React.useState(false);
    const [updateStatus,setUpdateStatus]=React.useState(false);
    const {all_orders_loading,all_orders_data,single_order_data,single_order_loading}= useSelector(state => state.admin)
    const ordersHeaders = ["ID","Order ID","Quantity", "Amount","isPaid", "Status","Actions"]
    const [updateOrder,setUpdateOrder]=React.useState('')
  
    React.useEffect(()=>{
        getAdminOrdersData(dispatch)
    },[])

    
    


    
  return (
    <div id='main'>
            <Topbar/>
            <div className='main_body'>
                <div className='main_left'>
                    <Sidebar/>
                </div>
           {all_orders_loading? <Loading type="rise"/>:     
            <div className='main_right'>
                <div className='order_container'>
                <h2>Orders Info</h2>
                    <div className='order_table'>
                        
                 { all_orders_data?.length > 0 ?  <AdminTable
                     headers ={ordersHeaders}
                      orders={true} 
                      ordersData = {all_orders_data}
                       setModal={setModal}
                        updateStatus={updateStatus} 
                        setUpdateStatus={setUpdateStatus}
                        setUpdateOrder={setUpdateOrder}
                        updateOrder= {updateOrder}
                        />:<h3 style={{width:'100%',textAlign:'center'}}>No orders yet...</h3> }
                    </div>
                </div>

               {modal && <Modal orderPage={true} data={single_order_data} loading={single_order_loading} setModal={setModal} />}
            </div>
            
            }
                
            </div>
    </div>
  )
}
export default Orders