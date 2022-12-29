import React from 'react'
import "../css/topBar.css"
import {NavLink} from 'react-router-dom';

// import SearchIcon from '@mui/icons-material/Search';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Topbar() {
 
  return (
    <div className='topBar'>
    <div className='topBar_left'>
    <div className='topBar_search_logo'>
    <div className='topBar_Logo'>
      Logo
    </div>
        {/* <SearchIcon sx={{color:"#6B7280"}}/> */}
        <input type="search" placeholder='Search'/>
    </div>

    </div>

    <div className='topBar_right'>
    
        <div className='profile_image'>
        <NavLink to='/admin/profile' style={{color:'black',display:'flex',alignItems:'center',justifyContent:'center'}}><AccountCircleIcon/></NavLink>
        </div>

    </div>


    </div>


  )
}

export default Topbar