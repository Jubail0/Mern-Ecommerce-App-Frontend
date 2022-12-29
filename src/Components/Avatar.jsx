import React from 'react'
import '../Components/CSS/Avatar.css'
import profileUpdate from '../API/user'
import {useDispatch} from 'react-redux'
import { CircularProgress } from '@mui/material'


const Avatar = ({userData,isFetching}) => {
    const dispatch = useDispatch()
    const {_id, name, email, img,created} = userData.user
    const[toggle,setToggle]=React.useState(false)

    React.useEffect(()=>{
        setToggle(false)
    },[name,email,img])

    const [updateProfile,setUpdateProfile]=React.useState({
        name:name,
        email:email,
        img:''
     })
    
     const handleChange = (e)=>{
        const{name,value,files,type}=e.target
        setUpdateProfile(prevState => ({
           ...prevState,
           [name]:type==="file" ? files[0] : value
        }))
       
    }
  return (
    <div className='profile_container'>
    <div className='profile_img_container'>
        <img src={img ? img.imageUrl : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}alt='logo'/>
       
    </div>
    <div className='update_profile'>
        <button onClick={()=> setToggle(prevState => !prevState)}>Update Profile</button>
    </div>
    <div className='personal_details_container'>
    {!toggle &&<div className='personal_details'>
        <span><strong>User ID:</strong>{_id}</span>
        <span><strong>Name:</strong>{name}</span>
        <span><strong>Email:</strong>{email}</span>
        <span><strong>Joined on:</strong>{created.slice(0,10)}</span>
        
    </div>}

    {toggle && <div className='personal_details second_details'>
      
        <span><strong>Name:</strong><input value={updateProfile.name} name="name" onChange={handleChange} className='field_profile_update' type='text'/></span>
        <span><strong>Email:</strong><input value={updateProfile.email} name="email" onChange={handleChange} className='field_profile_update' type='text'/></span>
        <span><strong>Photo:</strong> <input name='img' onChange={handleChange} type='file'/></span>
       
        <div id='update_btn_container'> 
        <button className='update_profile_btn' onClick={()=>profileUpdate(dispatch,_id,updateProfile)}>{isFetching ? <CircularProgress/>:"Save"}</button>
       
        </div>
        
        
    </div>}
    </div>
</div>
  )
}

export default Avatar