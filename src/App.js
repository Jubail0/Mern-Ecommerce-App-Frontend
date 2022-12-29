import React,{lazy,Suspense} from 'react'
import './App.css'
import Loading from './Components/Loading';

// All PAGES AND COMPONENTS
import Product from './Pages/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import OrderSuccess from './Components/OrderSuccess';
import Men from './Pages/Men.js';
import Women from './Pages/Women.js';
import Games from './Pages/Games.js';
import Mobiles from './Pages/Mobile.js';
import Cart from './Pages/Cart.js';
import  MyOrder  from './Pages/MyOrder';
import Profile from './Pages/Profile'
// Admin 
import Dashboard from './Admin/Pages/Dashboard';
import AddProduct from './Admin/Pages/AddProduct';
import Orders from './Admin/Pages/Orders';
import AllProducts from './Admin/Pages/AllProducts';
import Category from './Admin/Pages/Category';
import ProductSinglePage from './Admin/Components/ProductSinglePage';
import AdminProfile from './Admin/Pages/AdminProfile';

import{useSelector} from 'react-redux';
import {BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import {Toaster} from "react-hot-toast";



const Home = lazy(()=> import('./Pages/Home.js'))
const OrderPage = lazy(()=> import('./Components/OrderPage'))



function App() {
    const[authenticate,setAuthenticate] = React.useState(false)
    
    const{isUser,userData}=useSelector(state=>state.user)
  
  

    return (
        <Router>
            <div>
                <Toaster position="top-center"/>
                <Routes>
                   
                    <Route path='/'
                        element={
                        <Suspense fallback={<Loading type="rise"/>}>
                        <Home/>
                        </Suspense>
                        }/>
                    
                    <Route path='/products/men'
                        element={<Men/>}/>
                
                    <Route path='/products/women'
                        element={
                         <Women/>
                       }/>
                    <Route path='/products/mobile'
                        element={
                       <Mobiles/>
                        }/>
                    <Route path='/products/games'
                        element={
                         <Games/>
                       }/>
                    <Route path='/cart'
                        element={
                            <Cart setAuthenticate={setAuthenticate}/>}/>
                       
                    <Route path='/:category/product/:id'
                        element={<Product setAuthenticate={setAuthenticate}/>}/>

                  { !isUser ? <Route path='/login'
                        element={<Login/>}/>: 
                        <Route path="*" element={<Navigate to='/' replace />} />
                     
                        }
                         {/* <Route path='/login'
                        element={<Login/>}/> */}
                    
                    <Route path='/register'
                        element={<Register/>}/>

                    <Route path='/myOrder'
                        element={<MyOrder/>}/>

                    <Route path='/profile'
                        element={<Profile/>}/>


    
                     {authenticate ?<Route path='/cart/order'
                        element={
                            <Suspense fallback={<Loading/>}>
                            <OrderPage/>
                            </Suspense>
                    }/>:
                        <Route path="*" element={<Navigate to='/' replace />}/>}

                     {authenticate ?<Route path='/orderSuccess' element={<OrderSuccess/>}/>:
                        <Route path="*" element={<Navigate to='/' replace />}/>}


                       

                        {/*FOR ADMIN  */}
                      {userData?.user.role === 'admin'? <> <Route path='/admin/dashboard' element={<Dashboard/>}/>
                      
                        <Route path='/admin/addProduct' element={<AddProduct/>}/>
                        <Route path='/admin/orders' element={<Orders/>}/>
                        <Route path='/admin/allProducts' element={<AllProducts/>}/>
                        <Route path="/admin/allProducts/:id" element={<ProductSinglePage/>}/>
                        <Route path='/admin/category' element={<Category/>}/></>:
                        <Route path="*" element={<Navigate to='/' replace />}/>}
                        <Route path='/admin/profile' element={<AdminProfile/>}/>
                       

                      

                </Routes>
            </div>
        </Router>
    );
}

export default App;
