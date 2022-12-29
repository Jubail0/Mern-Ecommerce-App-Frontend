import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import {allMenCategories} from '../data.js'
import AllProduct from '../Components/AllProduct';




function Men() {


  return (
    <div>
    <Navbar/>
    <AllProduct cat={allMenCategories}/>
    <Footer/>
    </div>
  
  )
}

export default Men