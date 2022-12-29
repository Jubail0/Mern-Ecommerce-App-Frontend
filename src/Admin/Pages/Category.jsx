import React from 'react'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import '../css/mainLayout.css'
import '../css/Category.css'
import { useDispatch, useSelector } from 'react-redux'
import { addSubCategory } from '../API/subCategory'
import { CircularProgress } from '@mui/material'
import {getALLSubCategory} from '../API/subCategory'
import Modal from '../Components/Modal'

function Category() {
  const dispatch = useDispatch()
  const { add_sub_category_loading,get_subcategory_loading,get_subcategory_data } = useSelector(state => state.admin)
  const [id, setId] = React.useState('') // for loading
  const [subCategories, setSubCategories] = React.useState({ menInput: '', womenInput: '', gamesInput: '', mobileInput: '' })
  const[popup,setPopUp]=React.useState(false)

  const handleChange = (e) => {
    const { value, name } = e.target
    setSubCategories(prevState => ({
      ...prevState,
      [name]: value
    }))

  }


  const fields = [
    {
      id:'men',
      label:'Men Category',
      name:'menInput',
      value:subCategories.menInput
    },
    {
      id:'women',
      label:'Women Category',
      name:'womenInput',
      value:subCategories.womenInput
    },
    {
      id:'mobile',
      label:'Mobile Category',
      name:'mobileInput',
      value:subCategories.mobileInput
    },
    {
      id:'games',
      label:'Games Category',
      name:'gamesInput',
      value:subCategories.gamesInput
    }
  ]

  return (
    <div id='main'>
      <Topbar />
      <div className='main_body'>
        <div className='main_left'>
          <Sidebar />
        </div>
        <div className='main_right'>
          <div className='category_container1'>
            <div className='topTitle'>
              <h2>CATEGORIES</h2>
            </div>
            <p>Add Sub-Categories
            </p>

            <div className='category_body1'>
              

                {
                
                fields.map((items,index)=>
                <div className='categoryInput_fields' key={index}>
                   <label>
                 {items.label} :</label>
                <input type="text" placeholder='add sub-categories' name={items.name}
                  value={
                    items.value
                  }
                  onChange={handleChange} />
                <div style={
                  {
                    display: 'flex',
                    gap: '20px'
                  }
                }>
                  <button className='button-3 cat-btn' id={items.id}
                    onClick={
                      (event) => addSubCategory(dispatch, event, subCategories, setId)
                    }>
                    {
                      add_sub_category_loading && id === items.id ? <CircularProgress /> : "Add"
                    }</button>
                  <button className='button-3 cat-btn' onClick={()=>getALLSubCategory(dispatch,items.id,setPopUp)}>View</button>
                </div>
              </div>
                )}
               
          </div>
         </div>
          {popup && <Modal 
          categoryPage={true} 
          data={get_subcategory_data}
          loading={get_subcategory_loading}
          setPopUp={setPopUp}
           />}
              
        </div>

      </div>
    </div>
  )
}

export default Category
