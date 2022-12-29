import toast  from "react-hot-toast";
import {updateRequest, upDateSuccess, updateError} from'../redux/userSlice';

const profileUpdate = async(dispatch,id,updateProfile)=>{
    const {name,email,img}=updateProfile;

    const formData = new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('ProfileImage',img)

try {
    dispatch(updateRequest())
        const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/update_profile/${id}`,{
        method:'PATCH',
        body:formData,
        credentials:'include'
       })
       const data = await res.json()
    
       if(res.status === 422 || !data){
        dispatch(updateError())
        toast.error(data.err)

        
        
       }else{
        dispatch(upDateSuccess(data))
        toast.success(data.message)
       

       }
} catch (error) {
    dispatch(updateError())
    console.log(error)
}
}

export default profileUpdate;