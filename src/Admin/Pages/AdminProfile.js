import React from 'react'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import Avatar from '../../Components/Avatar'
import { useSelector } from 'react-redux'
import '../css/adminProfile.css'
const AdminProfile = () => {
  const {userData,isFetching}=useSelector((state)=>state.user)
  return (
    <div id='main'>
      <Topbar/>
      <div className='main_body'>
        <div className='main_left'>
          <Sidebar/>
        </div>
        <div className='main_right'>
          <div className='adminProfile'>
          <Avatar userData={userData} isFetching={isFetching} />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AdminProfile