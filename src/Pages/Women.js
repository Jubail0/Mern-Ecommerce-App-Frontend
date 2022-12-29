import React from 'react'
import Navbar from '../Components/Navbar'
import{allWomenCategories}from '../data.js'
import Footer from '../Components/Footer'
import AllProduct from '../Components/AllProduct'

function Women() {


  return (
    <div>
    <Navbar/>
    <AllProduct cat={allWomenCategories} />
    <Footer/>
    </div>
  )
}

export default Women