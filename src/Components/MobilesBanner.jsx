import React from 'react'
import './CSS/MobileBanner.css'
import {NavLink} from 'react-router-dom'

function MobilesBanner() {
  return (
    <section id='mobilesBanner'>
    
    
    <div className='mobilesBanner_container'>
      <div className='fade'>

      </div>
      <div className='mobilesBanner_content'>
        <h1>Get your hands on our latest smartphones for even more amazing features and benefits! </h1>
        <NavLink to="/products/mobile"><button>Shop Now</button></NavLink>
        </div>
    </div>

   
    </section>
  )
}

export default MobilesBanner