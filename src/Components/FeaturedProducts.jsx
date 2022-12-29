import React from 'react'
import './CSS/featureProducts.css'
import Card from './Card'
import{useSelector}from 'react-redux'
import HeadingText from './headingText'


function FeaturedProducts({newProducts}) {
    
 
    
  return (
    <section id='featured-Products'>
                  <HeadingText text="New Arrival"/>
            <div className='new-arrivals-products'>
            {newProducts && newProducts.length > 0 ?newProducts.map((items,index) => 
                <Card key={index} img ={items.img.imgeUrl} width={250}height={420} radius={8} btn="View More" category ={items.category} name={items.name.slice(0,35)+"..."} id ={items._id} />
            ):"No new product arrived yet!"}
            </div>

    </section>
  )
}

export default FeaturedProducts