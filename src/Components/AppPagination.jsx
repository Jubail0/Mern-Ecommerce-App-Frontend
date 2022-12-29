import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch}from'react-redux'
import {pagination} from '../redux/product.js'

function AppPagination({totalPages,page}) {
    const dispatch = useDispatch()
  

   const handleChange =(e,value)=>{
   dispatch(pagination(value))
   }
  
   
    return (
        <div>
            <Stack>
                <Pagination count={totalPages}
                onChange={handleChange}
                defaultPage={1}
                page={page}
                    sx={
                        {
                            width: '100%',
                            bgcolor: 'white'
                        }
                    }/>
            </Stack>
        </div>
    )
}

export default AppPagination
