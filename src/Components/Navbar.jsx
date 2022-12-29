import React from 'react'
import "./CSS/Navbar.css"
// import {Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {NavLink,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import loggedout from '../API/Logout'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
const navigate = useNavigate()
const dispatch = useDispatch()
    const {products, cartQuantity} = useSelector(state => state.cart)
    const {isUser ,userData} = useSelector(state => state.user)
    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${
                theme.palette.background.paper
            }`,
            padding: '0 4px'
        }
    }));


    return (
        <div>
            <nav className='navBar'>
      
                <div className='wrapper'>
                
            <input type="checkbox" id="check"/>
            <label htmlFor='check' className='checkBtn'>
            <MenuIcon/>
            </label>
            
                    <ul>
                        <li className='logo'>
                            <a href='/lo'>Logo</a>
                        </li>
                        
                        <NavLink className='navLinks' to='/'>
                            <li>Home</li>
                        </NavLink>

                        <NavLink className='navLinks' to='/products/men'>
                            <li>Men</li>
                        </NavLink>

                        <NavLink className='navLinks' to='/products/women'>
                            <li>Women</li>
                        </NavLink>
                        <NavLink className='navLinks' to='/products/mobile'>
                            <li>Mobiles</li>
                        </NavLink>
                        <NavLink className='navLinks' to='/products/games'>
                            <li>Games</li>
                        </NavLink>
                        {
                        isUser === false && <>
                            <NavLink className='navLinks' to='/login'>
                                <li>Login</li>
                            </NavLink>
                            <NavLink className='navLinks' to='/register'>
                                <li>Register</li>
                            </NavLink>
                        </>
                    }
                      { isUser === true &&  userData.user.role === "user" &&<><li>
                      <NavLink className='navLinks' to='/profile'> Profile</NavLink></li>
                      <li>
                      <NavLink className='navLinks' to='/myOrder'> Orders</NavLink>
                        </li></> }
                    


                      { userData?.user.role === "admin" && 
                      <NavLink to='/admin/dashboard' className='navLinks' onClick={()=> localStorage.setItem("validate",true)}> <li>
                        Dashboard
                        </li></NavLink>}
                      

                       { (isUser === true && userData?.user.role === "user") &&  <li>
                            <NavLink className='navLinks' to='/cart'>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={
                                            isUser ? products && cartQuantity : 0
                                        }
                                        color="secondary">
                                        <ShoppingCartIcon sx={
                                            {color: 'white'}
                                        }/>
                                    </StyledBadge>
                                </IconButton>
                            </NavLink>
                        </li>}
                        {
                        isUser === true && <NavLink onClick={()=>loggedout(dispatch,navigate)} className='navLinks'
                            to={`/logout`}>
                            <li><LogoutIcon/></li>
                        </NavLink>
                    }
                    </ul>
                   
                   
                    </div>
                
            </nav>
        </div>
    )
}

export default Navbar
