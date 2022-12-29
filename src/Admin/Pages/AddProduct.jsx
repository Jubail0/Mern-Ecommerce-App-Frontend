import React from 'react'
import '../css/mainLayout.css'
import '../css/AddProduct.css'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Dialog from '../../Components/Dialog.jsx'
import {getALLSubCategory} from '../API/subCategory'
import { useDispatch,useSelector } from 'react-redux'


function AddProduct() {
 const dispatch = useDispatch()


 const {get_subcategory_data}=useSelector(state=>state.admin);
 const [handleInputs,setHandleInputs]=React.useState({
    name:"",
    desc:'',
    price:0,
    stocks:0,
    category:"",
    subCategory:'',
    sizes:'',
    storage:"",
    productImg:''
 })

 const handleChange = (e)=>{
 const{name,value,files,type}=e.target
 setHandleInputs(prevState => ({
    ...prevState,
    [name]:type==="file" ? files[0] : value
 }))

 }

React.useEffect(()=>{
const {category}=handleInputs

getALLSubCategory(dispatch,category,null)
},[handleInputs.category])


 
  return (
    <div id='main'>
            <Topbar/>
            <div className='main_body'>
                <div className='main_left'>
                    <Sidebar/>
                </div>
                <div className='main_right'>
                <div className="addProductForm">
                    <div className='addProductTitle'>
                    <h2>Add Product</h2>
                    <Dialog admin ={true} handleInputs={handleInputs}/>
                    {/* <button className='button-3'>Create</button> */}
                    </div>
                   
                    <form className='productForm'>
                        <div className='productFormLeft'>
                        <div className='productFields'>
                            <label htmlFor='productName'>Product Name</label>
                            <input type="text" name='name' value={handleInputs.name} onChange={handleChange} id='productName'/>
                        </div>
                        <div className='productFields'>
                            <label htmlFor='productCat' >Category</label>
                            <select id='productCat' name="category" value={handleInputs.category} onChange={handleChange}>
                                <option>
                                select
                                </option>
                                <option>
                                    Men
                                </option>
                                <option>
                                    Women
                                </option>
                                <option>
                                    Mobile
                                </option>
                                <option>
                                    Games
                                </option>
                            </select>
                        </div>

                        <div className='productFields'>
                            <label  htmlFor='productSubCat'>Sub-Category</label>
                            <select id='productSubCat' name="subCategory" value={handleInputs.subCategory} onChange={handleChange}>
                                <option >
                                    select
                                </option>
                               {
                                get_subcategory_data?.subCategory.length>0? get_subcategory_data.subCategory.map((cat,index)=>
                                <option key={index}>{cat}</option>):
                                <option>No sub-category found</option>
                            }
                            </select>
                        </div>
                      
                        <div className='productFields'>
                            <label htmlFor='productStocks'>Stocks</label>
                            <input type="number" name='stocks' id='productStocks' value={handleInputs.stocks} onChange={handleChange}/>
                        </div>

                        <div className='productFields'>
                            <label htmlFor='productSize'>Sizes</label>
                            <input disabled={handleInputs.category === "Mobile"||handleInputs.category === "Games"} type="text" name='sizes' id='productSize' value={handleInputs.sizes} onChange={handleChange}/>
                        </div>
                        </div>

                        <div className='productFormRight'>
                        <div className='productFields'>
                            <label htmlFor='productImg'>Product Image</label>
                            <input type='file' id='productImg' name='productImg' value={handleInputs.img} onChange={handleChange}/>
                        </div>
                        <div className='productFields'>
                            <label htmlFor="ProductDescription">Product Description</label>
                            <input type="text" name='desc' value={handleInputs.desc} onChange={handleChange} id='ProductDescription' />
                            
                        </div>
                        <div className='productFields'>
                            <label htmlFor='productPrice'>Product Price (<CurrencyRupeeIcon sx={{fontSize:15}}/>)</label>
                            <input type="number" name='price' value={handleInputs.price} onChange={handleChange} id='productPrice'/>
                        </div>

                        <div className='productFields'>
                            <label  htmlFor='storage'>Storage (GB)</label>
                            <p>add multipe storage separated by commas (ex: 64,128,256)</p>
                            <input disabled={handleInputs.category === "Men" ||handleInputs.category === "Women" ||handleInputs.category === "Games"} type='text' name="storage" value={handleInputs.storage} onChange={handleChange} id="storage"/>
                           
                        </div>

                        </div>
                    </form>
                </div>
                </div>
                </div>
                </div>
  )
}

export default AddProduct