import React from 'react'
import Navbar from '../Components/Navbar.jsx';
import Banner from '../Components/Banner';
import FeaturedProducts from '../Components/FeaturedProducts';
import LatestProducts from '../Components/LatestProducts';
import Footer from '../Components/Footer';
import {useDispatch,useSelector}from 'react-redux'
import {newArrivals} from '../API/newArrivals.js'
import {getCartItems} from '../API/getCart.js'
import MobilesBanner from '../Components/MobilesBanner.jsx';

function Home() {
  const dispatch = useDispatch()
  const{isUser}=useSelector(state => state.user)
  const {top_products,newArrivalsProducts}=useSelector(state => state.product)
 
  React.useEffect(()=>{
  newArrivals(dispatch)
  if(isUser === true){
    getCartItems(dispatch)
  }
  },[])

  return (
    <div >
     <Navbar  />
     <Banner/>
     <FeaturedProducts newProducts = {newArrivalsProducts}/>
     <LatestProducts topProducts = {top_products}/>
     <MobilesBanner/>
     
     <Footer/>
     
    </div>
  );
}

export default Home;
