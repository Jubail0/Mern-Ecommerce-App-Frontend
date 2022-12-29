import React from 'react'
import '../css/dashboard.css'

function TopProducts({topProducts}) {
    
  return (
    <>
  { topProducts?.map((i,index) => <div key={index} className='topProduct_container' >
            <div  className='topProduct_body_container' >
            <div className='topProduct_body_name'>
                <span >{i.name}</span>
            </div>
            <div className='topProduct_body_sold'>
               <span>{i.sold} Sales</span>
            </div>
            </div> 
        </div> )}
    </>
  )
}

export default TopProducts