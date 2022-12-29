import React from 'react'
import Navbar from '../Components/Navbar'
import SingleProduct from '../Components/singleProduct'
import Footer from '../Components/Footer'
function Product({setAuthenticate}) {
  return (
    <div>
        <Navbar/>
        <SingleProduct setAuthenticate={setAuthenticate}/>
        <Footer/>
    </div>
  )
}

export default Product