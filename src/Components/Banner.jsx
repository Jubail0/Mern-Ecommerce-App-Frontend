import React from 'react'
import "./CSS/Banner.css"
import {NavLink} from 'react-router-dom'
function Banner() {
  // const bannerImages = ["https://cdn.pixabay.com/photo/2016/12/10/20/23/black-friday-1898114__340.jpg",'https://cdn.pixabay.com/photo/2016/12/03/01/35/black-friday-1878945_960_720.png']
  return (
    <section id='banner'>
       <div className='banner_container'>
        <div className='banner_content'>
        <h1 className='banner_heading'>Make It A Naturally Gifted Holiday</h1>
        <p className='banner_p'>Super comfy natural materials make the perfect gift.</p>
        <div className='banner_btn'>
          <NavLink to="/products/men"><button>Shop Men</button></NavLink>
          <NavLink to="/products/women"><button>Shop Women</button></NavLink>
          
        </div>
       </div>
       </div>
    </section>
  )
}

export default Banner