import React from 'react' 
import '../css/Sidebar.css' 
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import {NavLink} from 'react-router-dom'



function Sidebar() {
    const [isOpen, setOpen] = React.useState(false)

    const toggle = ()=>{
        setOpen(prevState => !prevState)
    }

    const menuItem = [
        {
            id: 1,
            name: "Dashboard",
            icon: <DashboardIcon/>,
            link: '/admin/dashboard'
        },
        {
            id: 2,
            name: "Orders",
            icon: <InventoryIcon/>,
            link: '/admin/orders'
        },
        {
            id: 3,
            name: "Add Product",
            icon: <AddToPhotosIcon/>,
            link: '/admin/addProduct'
        },
        {
            id: 4,
            name: "All Products",
            icon: <Inventory2Icon/>,
            link: '/admin/allProducts'
        }, {
            id: 5,
            name: "Category",
            icon: <CategoryIcon/>,
            link: '/admin/category'
        },
    ] 
    
    return (
        <div  style={
                isOpen ? {
                    
                    display:'block'
                   
                } : {
                    width:"250px",
                    borderRadius:'0%',
                    height:"100%"
                    
                }
            }
            className='sideBar'>
              
            <div className='sideBar_list'
                style={
                    isOpen ? {
                        padding: "10px 0px"
                    } : {
                        padding: null
                    }
            }>
                <div style={
                        isOpen ? {
                            padding: "0px"
                        } : {
                            padding: null
                        }
                    }
                    className='top_section'>
                    <h2 style={isOpen ? {display:'none'}:{display:'block'}} ><NavLink to='/' style={{color:'black'}}> MYSHOP</NavLink></h2>
                    <span style={!isOpen ? {display:'null'}:{width:'100%',textAlign:'center'}}>
                    <MenuOpenIcon sx={
                                {
                                    cursor: "pointer",
                                    color: 'black'
                                }
                            }
                            onClick={toggle}/>
                    </span>
                   
                </div>
                <ul className='menuItem_lists'>
                    {
                    menuItem?.map(i => <NavLink key={
                            i.id
                        }
                        id={
                            window.location.pathname === i.link  ? "active" : ''
                        }
                        onClick={toggle}
                        style={
                            isOpen ? {
                                display:'none'
                                
                            } : {
                                padding: null
                            }
                        }
                        to={
                            i.link
                    }>
                        <li>{
                            i.icon
                        }
                            <span style={
                                isOpen ? {
                                    display: "none"
                                } : {
                                    display: null
                                }
                            }>
                                {
                                i.name
                            }</span>
                        </li>
                    </NavLink>)
                   
                } </ul>
            </div>
        </div>
    )
}

export default Sidebar
