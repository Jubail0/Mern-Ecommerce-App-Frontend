import React from 'react'
import Navbar from '../Components/Navbar'
import {allMobilesCategories}from '../data.js'
import Footer from '../Components/Footer'
import AllProduct from '../Components/AllProduct'

function Mobiles() {

  return (
    <div>
    <Navbar/>
    <AllProduct cat={allMobilesCategories}/>
    <Footer/>
    </div>
  )
}

export default Mobiles