import React from 'react'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import '../css/mainLayout.css'
import '../css/AllProducts.css'
import AdminTable from '../Components/Table'
import Loading from '../../Components/Loading'
import {allProduct,singleProduct} from '../API/adminProducts'
import { useDispatch,useSelector } from 'react-redux'
import Modal from '../Components/Modal'


function AllProducts() {
  const dispatch = useDispatch()
  const [toggleModal,setToggleModal]=React.useState(false)
  const {all_prodcuts_data,all_prodcuts_loading}=useSelector(state => state.admin)
  const headers =[
    "Id",
    "Product Image",
    "Product Name",
    "Category",
    "Stocks",
    "Price",
    "Actions"
  ]
  React.useEffect(()=>{
  allProduct(dispatch)
  },[])
  return (
    <div id='main'>
            <Topbar/>
            <div className='main_body'>
                <div className='main_left'>
                    <Sidebar/>
                </div>
            { all_prodcuts_loading ? <Loading type="rise"/>:
            <div className='main_right' >
             {all_prodcuts_data?.length>0?
             <><div className='allProducts'>
                <h2>Products Info</h2>
                <div className='products_table'>
                 <AdminTable headers={headers} products ={true} setToggleModal={setToggleModal} productsData ={all_prodcuts_data} />
                </div>
              </div>
             { toggleModal && <Modal editProduct={true}  setToggleModal={setToggleModal}/>}
              </> 
              
              :<h1>Add Products to get the data here...</h1>}
            </div>}
                
            </div>
    </div>
  )
}

export default AllProducts