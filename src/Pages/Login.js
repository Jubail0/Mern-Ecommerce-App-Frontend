import React from 'react'
import './Login.css'
import {useNavigate,NavLink} from 'react-router-dom'
import {loginStart,loginSuccess,loginError,} from '../redux/userSlice.js'
import{useDispatch} from 'react-redux'
import toast from "react-hot-toast";



function Login() {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const [login,setLogin]=React.useState({
    email:"",
    password:""
  })
 
  const handleChange =(e)=>{
    const{name,value}=e.target
  setLogin(prevState => ({
    ...prevState,
    [name]:value
  }))
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    const{email,password}=login
    try {
      dispatch(loginStart())
      const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password}),
        credentials:'include'
      })
      const data = await res.json()
      if(res.status === 422 ||res.status === 500 ||!data){
        toast.error(data.err)
      }else{
        dispatch(loginSuccess(data))
        toast.success("Login Successfull")
        navigate('/')
      }
    } catch (error) {
      dispatch(loginError())
      toast.error("Something went wrong")
    }
  }
 
  return (
    <div className='login_container'>
    <div className="login_wrapper">
        <h1>SIGN IN</h1>
        <form method='POST'>
            <input type="email" name='email' onChange={handleChange} value={login.email}  placeholder='Email'></input>
            <input type="password" name='password' onChange={handleChange} value={login.password} placeholder='Password'></input>
            <a className='link' href='#pass'>DO NOT YOU REMEMBER THE PASSWORD?</a>
            <NavLink className='link' to='/register'>CREATE A NEW ACCOUNT</NavLink>
            <button className='login_btn' onClick={handleLogin}>SIGNIN</button>
        </form>
    </div>
    </div>
  )
}

export default Login