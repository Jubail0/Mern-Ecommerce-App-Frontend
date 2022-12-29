import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {allGamesCategories} from '../data'
import AllProduct from '../Components/AllProduct'

function Games() {
  
  return (
    <div>
    <Navbar/>
    <AllProduct cat={allGamesCategories} />
    <Footer/>
    </div>
  )
}

export default Games