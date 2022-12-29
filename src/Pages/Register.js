import React from 'react'
import "./Register.css"
import {useNavigate,NavLink}from"react-router-dom";
import toast from "react-hot-toast";

function Register() {
const navigate = useNavigate()



const [register, setRegister]=React.useState({
  name:'',
  email:'',
  password:'',
  cpassword:""
})

const handleChange=(e)=>{
const{name,value}=e.target
setRegister(prevState => ({
  ...prevState,
  [name]:value
}))
}

const handleRegister = async (e)=>{
  e.preventDefault()
  const{name,email,password,cpassword}=register
  try {
  const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/register`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name,email,password,cpassword})
  })
  const data = await res.json()
  if(res.status === 422 || !data){
    toast.error(data.err)
  }else{
    toast.success("Register Successful")
    navigate("/login")
  }
} catch (error) {
    console.log(error)
}
}

  return (
    <div className='register_container'>
    <div className="register_wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form method='POST' type="submit">
            <input type="text" placeholder='Name' value={register.name} onChange={handleChange}  name="name"/> 
            <input type="email" placeholder='Email' value={register.email} onChange={handleChange} name="email"/>
            <input type="password" placeholder='Password'  value={register.password} onChange={handleChange}name="password" />
            <input type="password" placeholder='Confirm Password' value={register.cpassword} onChange={handleChange} name="cpassword" />
            
            <div className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
            </div>
            <div style={{marginBottom:"10px"}} >
              <span style={{display:'flex',gap:'5px', fontSize:'12px'}}>Already register? <NavLink style={{color:'black'}} to="/login"><p>login</p></NavLink></span>
            </div>
            <button className='login_btn' onClick={handleRegister} >CREATE</button>
        </form>
    </div>
    </div>
  )
}

export default Register