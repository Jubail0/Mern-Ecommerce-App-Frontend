import {

    loading_add_subCategory,
    success_add_subCategory,
    error_add_subCategory,

    loading_get_subCategory,
    success_get_subCategory,
    error_get_subCategory,

    loading_delete_subCategory,
    success_deleted_subCategory,
    error_delete_subCategory

} from '../../redux/admin'

import toast from "react-hot-toast";

const addSubCategory = async (dispatch, event, subCategories, setId) => {
    event.preventDefault()
    const { id } = event.target
    setId(id) //for loading
    try {
        dispatch(loading_add_subCategory())
        const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/category/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subCategories }),
            credentials: 'include'
        })
        const data = await res.json()

        if (res.status === 422 || !data) {
            toast.error(data.err)
            dispatch(error_add_subCategory())
        } else {
            dispatch(success_add_subCategory())
          
            toast.success(data.message)
        }

    } catch (error) {
        dispatch(error_add_subCategory())
        console.log(error)
    }

}
const getALLSubCategory = async (dispatch, categories,setPopUp) => {
    if(setPopUp){
        setPopUp(true)
    }
    
   
   
    try {
        dispatch(loading_get_subCategory())
        const res2 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/getSubCategories/${categories}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            
        })
        const data2 = await res2.json()

        if (res2.status === 422 | !data2) {
            toast.error(data2.err)

        } else {
            dispatch(success_get_subCategory(data2.getSubCat))
        }

    } catch (error) {
        dispatch(error_get_subCategory())
        console.log(error)
    }

}

const deleteSubCategory = async (dispatch,id,subCat) => {
    
    try {
        dispatch(loading_delete_subCategory())
        const res3 = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/category/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({subCat}),
            credentials: 'include'
        })
        const data3 = await res3.json()

        if (data3) {
            dispatch(success_deleted_subCategory(data3.getSubCats))
            toast.success('Deleted')

        }

    } catch (error) {
        dispatch(error_delete_subCategory())
        console.log(error)
    }

}

export {
    addSubCategory,
    getALLSubCategory,
    deleteSubCategory
}

