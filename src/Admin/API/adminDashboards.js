import {loading_dashboard,success_dashboard,error_dashboard,} from '../../redux/admin'


const getDashboardData = async(dispatch)=>{
try {
    dispatch(loading_dashboard())
    const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/admin/dasboards`,{
    method:'GET',
    headers:{'Content-Type':'application/json'},
    credentials:'include'
   })
   const data = await res.json()

   if(data){
    dispatch(success_dashboard(data))
   }
    
} catch (error) {
    dispatch(error_dashboard())
    console.log(error)
}


}

export default getDashboardData;