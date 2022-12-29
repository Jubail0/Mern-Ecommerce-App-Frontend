import{newArrivalsSuccess,topProducts}from '../redux/product.js'

export const newArrivals = async(dispatch)=>{
const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/newarrivals`,{
    method:"GET",
    headers:{'Content-Type':'application/json'}
})
const data = await res.json()
if(res.status !== 200 || !data){
    console.log("new Arrivals backend Err...")
}else{
    dispatch(newArrivalsSuccess(data.newArrivalProducts))
    dispatch(topProducts(data.top))
}
}