import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Avatar from '../Components/Avatar'
import './Profile.css'

const Profile = () => {
 const {userData,isFetching}=useSelector((state)=>state.user)
 

  return (
    <div>
        <Navbar/>
        <div className='profile'>
          <Avatar userData={userData} isFetching={isFetching}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile