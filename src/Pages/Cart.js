import React from 'react'
import './Cart.css'

// COMPONENTS
import Navbar from '../Components/Navbar'
import Formatprice from '../Components/FormatPrice.js'
import Dialog from '../Components/Dialog'

// REACT-ROUTER-DOM
import { NavLink } from 'react-router-dom'

// MATERIAL UI
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CircularProgress from '@mui/material/CircularProgress'



// REACT-REDUX
import { useSelector, useDispatch } from 'react-redux'


// API CALLS
import handleQuantity from '../API/productQuantityCart';
import { getCartItems } from '../API/getCart';
import handleRemove from '../API/ItemRemoveCart'
import Loading from '../Components/Loading'



export default function Cart({ setAuthenticate }) {
    const dispatch = useDispatch()


    // USE SELECTOR
    const { products, totalPrice, cart_quan_loading, isLoading } = useSelector(state => state.cart)
    const { isUser } = useSelector(state => state.user)

    // USE STATE HOOKS
    const [productQuantity, setProductQuantity] = React.useState(1)
    const [ID, setId] = React.useState(null)


    React.useEffect(() => {
        getCartItems(dispatch)

    }, [])

    const isAuth = () => {
        setAuthenticate(true)

    }

    const changeQuantity = (id, change, qty) => {

        setId(id)

        if (change === "add") {
            setProductQuantity(qty + 1)

        } else if (change === "remove") {
            setProductQuantity(qty - 1)

        } else {
            return null

        }

    }
    React.useEffect(() => {
        handleQuantity(ID, productQuantity, dispatch)

    }, [productQuantity])


    return (
        <div>
            <Navbar />
            {isLoading ? <Loading type="circle" /> :
                <div className='cartPage'> {
                    (isUser && products) && products.length > 0 ? <div className='cart-wrapper'>
                        <div className='top'>
                            <h1>Shopping Cart
                            </h1>
                            <h2>Total Items {
                                products && products.length
                            } </h2>
                
                        </div>
                        <div className='details_container'>
                         <div className='left'>
                            <div className='heading'>
                                <span className='head_1'>Details</span>
                                <span className='head_2'>Quantity</span>
                                <span className='head_3'>Price</span>
                                
                            </div>

                            {
                                products && products.length > 0 && products.map((p, index) => <div className='product-details'
                                    key={index}>
                                    <div className='p1'>
                                        <div className="product-details-container-cart">
                                            <NavLink to={
                                                `/${p.productDetails.category
                                                }/product/${p.productId
                                                }`
                                            }>
                                                <div className='products-details'>
                                                    <img src={
                                                        p.productDetails.img.imgeUrl
                                                    }
                                                        alt='No Img' />
                                                </div>
                                            </NavLink>
                                            <div className='product-info'>
                                                <span> {
                                                    p.productDetails.name
                                                }</span>
                                                <span> {
                                                    <b> Category: {p.productDetails.category?.toUpperCase()}</b>
                                                }</span>
                                                <span > {
                                                    p.productDetails.category === 'mobile' ?
                                                        <b>storage: {p.storage} GB</b> :
                                                        <b>size: {p.size?.toUpperCase()}</b>
                                                }</span>

                                                <span className='remove_icon_container1'>
                                                    <Dialog handleRemove={handleRemove} productID={p.productId} dispatch={dispatch} />
                                                </span>

                                            </div>

                                        </div>

                                    </div>
                                    <div className='p2'>
                                        <div className='quantity'>

                                            <div>
                                                <button style={
                                                    { cursor: "pointer" }
                                                }
                                                    onClick={
                                                        () => changeQuantity(p.productId, "add", p.quantity)
                                                    }><AddIcon /></button>
                                                <span className='count'> {
                                                    cart_quan_loading && p.productId === ID ? <CircularProgress size={20} /> : p.quantity
                                                }</span>
                                                <button disabled={p.quantity < 2} style={
                                                    { cursor: "pointer" }
                                                }
                                                    onClick={
                                                        () => changeQuantity(p.productId, "remove", p.quantity)
                                                    }><RemoveIcon /></button>
                                            </div>
                                        </div>
                                      
                                        <div className='total'>
                                            <div style={{ position: 'relative' }}>
                                                <span> {
                                                    p.subTotal && <Formatprice price={
                                                        p.subTotal
                                                    } />
                                                }</span>

                                                <span className='remove_icon_container'
                                                    style={
                                                        { cursor: 'pointer', color: 'gray', position: "absolute", right: "0", top: "0" }
                                                    }><Dialog handleRemove={handleRemove} productID={p.productId} dispatch={dispatch} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                            } 
                            </div>

                        <div className='right' >
                            <h1>Price Details</h1>
                            <hr />
                            <div className='price-details' >
                                <div>
                                    <span>Price: </span>
                                    {<Formatprice price={
                                        totalPrice
                                    } />}  </div>
                                {/* <div>
                                <span>Discount:</span>
                                - ₹300</div> */}
                                <div>
                                    <span>Delivery Charge:</span>
                                    FREE</div>
                                <hr />
                                <div>
                                    <span>Total Amount</span>
                                    {<Formatprice price={totalPrice} />}
                                </div>
                                <div >
                                    <NavLink className="btn_container" to='/cart/order' onClick={isAuth}><button className='buyNow_btn'>BUY NOW</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> : <div className="emptyCart">
                <ProductionQuantityLimitsIcon sx={
                    { fontSize: 80 }
                } />
                <div style={
                    { marginLeft: "10px" }
                }>
                    <h1>Your Cart is Empty!</h1>
                    <p style={
                        {
                            paddingLeft: "5px",
                            color: "blue"
                        }
                    }>Pick up where you left off</p>

                </div>

            </div>
                } </div>}
        </div >)
}
