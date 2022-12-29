import React from 'react'
import './CSS/resultBar.css'
import {useSelector} from 'react-redux'
function ResultBar() {
  const{results} = useSelector(state => state.product)
  return (
    <div className='resultBar'>
   { results && <h5>{`${results?.perPage || 0}-${results?.categoryLength || 0} of over ${results?.allproductLength || 0} results for "myShop"`}</h5>}
    </div>
  )
}

export default ResultBar