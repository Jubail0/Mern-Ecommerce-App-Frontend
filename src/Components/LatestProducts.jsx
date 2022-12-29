import React from 'react'
import './CSS/LatestProduct.css'
import HeadingText from './headingText'
import ImageSlider from './Swiper'

function LatestProducts({topProducts}) {
  return (
    <section id="latestProducts">
        <HeadingText text="Top Products"/>

     <div style={{width:"100%"}} >
    <ImageSlider products ={topProducts}/>
    </div>
      
      
    
    </section>
  )
}

export default LatestProducts