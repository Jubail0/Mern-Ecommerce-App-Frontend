import React from 'react'
import "./CSS/singleProduct.css"
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {productFetching, productErr, singleProduct} from '../redux/product.js'
import {addToCart} from '../API/addToCart.js'
// import CircularProgress from '@mui/material/CircularProgress'
import FormatPrice from './FormatPrice'
import Loading from './Loading'
// import {NavLink}from "react-router-dom"


function SingleProduct({setAuthenticate}) {
   
    const[size ,setSize]=React.useState("")
    const[storage,setStorage]=React.useState(null)
    const[changeColor,setChangeColor]=React.useState(false)
    const {id} = useParams()
    const dispatch = useDispatch()
    const {singleProductSuccess, isFetching} = useSelector(state => state.product)



    const category = singleProductSuccess?.category
    const getSingleProduct = async () => {
        try {
            dispatch(productFetching())
            const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/product/${id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (res.status !== 200 || ! data) {
                dispatch(productErr())
                console.log(data)

            } else {
                dispatch(singleProduct(data))

            }
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleChange = (e)=>{
        const{value}= e.target
        if(value !== "Select Size"){
            setSize(value)
        }
       
        
       
    }
   const handleClickStorage =(e)=>  {
    setStorage(e.target.value)
    setChangeColor(prevState => !prevState)

   }
   



    React.useEffect(() => {
        getSingleProduct()

    }, [])

    return (
        <>{isFetching ? <Loading type="rise"/> :
        <div className='singleProduct'>
            <div className='product_Wrapper'>

                <>
                    <div className='product-img-container'>

                        <div className='product-img-wrapper'>
                            {
                            singleProductSuccess && <img className='product_img'
                                src={
                                    singleProductSuccess?.img.imgeUrl
                                }
                                alt='ks'/>
                            }                    
       
                        </div>
                        <div className='btn-container'>
                                <button id='addCart' className='addToCart'
                                    onClick={()=>addToCart(id, dispatch,size,storage ,category)}>ADD TO CART</button>
                                {/* <button id='buyNow' className='buyNow'>BUY NOW</button> */}
                            </div>

                    </div>
                    <div className='product-details-container'>
                        <div className='product-details-wrapper'>

                            {
                            singleProductSuccess && singleProductSuccess?.category === "mobile" ? <>
                                <div className='for-mobile-cat'>
                                    <h2>
                                        <span>{
                                            singleProductSuccess?.name
                                        }</span>
                                    </h2>
                                    <div className='rating-reviews'>
                                        <span className='rate'>4.4</span>
                                        <span>84,549 Ratings & 5,406 Reviews</span>
                                    </div>
                                    <div className='price'>
                                        <b>{
                                            < FormatPrice price = {
                                                singleProductSuccess?.price
                                            } />
                                        }</b>
                                    </div>
                                    <div className='offer'>
                                        <b>Bank Offer</b>
                                        <span>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account</span>
                                    </div>
                                    <div className='specification'>
                                        <div>
                                            <b>Storage</b>
                    
                                            {
                                            singleProductSuccess?.storage?.map(i => <button style={changeColor && i===storage?{backgroundColor:"green",color:"white"}:null} onClick={handleClickStorage} value={i}>{i} GB</button>)
                                        }</div>
                                        {/* <div>
                                            <b>Color</b>
                                            {
                                              singleProductSuccess.color?.map(i=> <span>{i}</span>)
                                            }
                                        </div> */}
                                      
                                    </div>
                                </div>
                            </> : <>
                                <div className='for-clothes-cat'>
                                    <h2>
                                        <span>{
                                            singleProductSuccess?.name
                                        }</span>
                                    </h2>
                                    <div className='rating-reviews'>
                                        <span className='rate'>3.4</span>
                                        <span>753 ratings and 49 reviews</span>
                                    </div>
                                    <div className='price'>
                                        <b>{
                                            < FormatPrice price = {
                                                singleProductSuccess?.price
                                            } />
                                        }</b>
                                    </div>
                                    <div className='offer'>
                                        <b>Bank Offer</b>
                                        <span>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account</span>
                                    </div>
                                    <div className='specification'>
                                  {   singleProductSuccess?.category !=="games" &&  <div>
                                            <label htmlFor="size"
                                         style={{fontSize:"20px"}}>Size</label>
                                            <select className='size' id='size' onChange={handleChange} required style={{height:'40px',fontSize:'15px',width:'120px'}}>
                                            <option >Select Size</option>
                                               {
                                                 singleProductSuccess?.size?.map(i =>
                                                  <option>{i.toUpperCase()}</option>)
                                               }
                                            </select>
                                        </div>}
                                        {/* <div>
                                            <b>Color</b>
                                            <select onChange={handleChange} name="color">
                                            {
                                              singleProductSuccess.color?.map(i => 
                                                <option>{i.toUpperCase()}</option>)
                                            }</select>
                                        </div> */}

                                    </div>
                                </div>
                            </>
                        } </div>
                    </div>
                </>
            </div>
        </div>}</>
    )   
}


export default SingleProduct
