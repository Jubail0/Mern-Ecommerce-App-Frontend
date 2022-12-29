import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import '../css/mainLayout.css'
import '../css/ProductSinglePage.css'
import {singleProduct} from '../API/adminProducts'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import ScrollArea from 'react-scrollbar'
const ProductSinglePage = () => {
    const dispatch = useDispatch()
    const {id}=useParams()
    const {single_product_loading,single_product_data,single_prodcut_error}=useSelector(state => state.admin)
    const{_id,name,price,desc,img, stocks,size,storage,category,subCategory,createdAt }= single_product_data

    React.useEffect(()=>{
        singleProduct(dispatch,id,null)
    },[])

    return (
        <div id='main'>
            <Topbar/>
            <div className='main_body'>
            <div className='main_left'>
                <Sidebar/>
            </div>
            <div className='main_right'>
           
            <div className='singlePage'>
           
                <div className='singlePage_container'>
                <NavLink to='/admin/allProducts' className='back'>Back</NavLink>
                    <div className='image_box'>
                        <img src={img?.imgeUrl} alt='Not found'/>
                    </div>

                    <div className='info_box'>

                        <div className='side1'>

                        <div className='id'>ID - <span>#{_id && _id}</span></div>
                        <div className='name'>Name - <span>{name && name}</span></div>
                        <div className='price_'>Price - <span>{price && price}</span></div>
                        <div className='desc'>Description
                        <ScrollArea
                         speed={0.8}
                         className="area"
                         contentClassName="content"
                         smoothScrolling= {true}
                         horizontal={false}
                         
                         >
                        <span>
                        {desc}
                        </span>
                        </ScrollArea>
                        </div>

                        </div>

                        <div className='side2'>
                        <div className='stocks'>stocks - <span>{stocks && stocks}</span></div>

                        {size?.length > 0  && <div className='side2_sizes'>Sizes:

                       {
                        size.map((size,index)=> <option key={index}>{size?.toUpperCase()}</option>)
                       }
                        
                        </div>}

                       { storage?.length > 0 &&<div className='side2_storage'>Storages:

                       {
                        storage.map((storage,index)=> <option key={index}>{storage?.toUpperCase()} GB</option>)
                       }

                        </div>}

                        <div className='category_side2'>
                            Category - <span>{category && category}</span>
                        </div>
                        <div className='subCategory_side2'>
                           Sub-Category - <span>{subCategory && subCategory}</span>
                        </div>
                        <div className='time'>
                            Created on - <span>{createdAt && createdAt.slice(0,10) }</span>
                        </div>

                        </div>

                       
                        

                    </div>
                </div>
            </div>

            </div>
            </div>

          
        </div>
    )
}

export default ProductSinglePage
