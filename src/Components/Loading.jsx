import React from 'react'
import '../Components/CSS/Loading.css'
import CircularProgress from '@mui/material/CircularProgress'
import RiseLoader from "react-spinners/RiseLoader";

function Loading({type}) {

  if(type === 'circle'){
    return (
      <div className='loading' >
          <CircularProgress sx={{color:'#36d7b7'}}/>
      </div>
    )
  }
  if(type === "rise"){
    return (
     <div className='loading'>
          <RiseLoader color="#36d7b7"/>
     </div>
    )
  }
  
}

export default Loading