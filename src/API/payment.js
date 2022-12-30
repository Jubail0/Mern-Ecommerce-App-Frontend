import toast  from "react-hot-toast";
import {orderFailed,orderRequest, orderSuccess} from '../redux/cart'


export const buyNow = async(e,amount,dispatch,navigate,address)=>{
  e.preventDefault()

  const{fullName,
    address1,
    address2,
    city,
    state,
    pincode,
    payment}= address

   

if(address.payment === "Cash on delivery" || !address.payment){

    try {
        dispatch(orderRequest())

        const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/cart/order`,{

            method:"POST",
            headers:{'Content-type':'application/json'},
            credentials:"include",
            body:JSON.stringify({fullName,
                address1,
                address2,
                city,
                state,
                pincode,
                payment})
        }) 
        const dataa = await response.json()
    
        if(response.status === 422 || !dataa){
            toast.error(dataa.err)
    
        }else{
            toast.success(dataa.message)
            dispatch(orderSuccess())
            navigate('/orderSuccess')
    
        }
        
    } catch (error) {
        console.log(error)
        dispatch(orderFailed())
    }

   

}else if(payment === "Razorpay"  || !address.payment){
    // Get Key_ID
    const res = await fetch(`${process.env.REACT_APP_FETCH_URL}/cart/getKey`,{
        method:"GET",
        credentials:"include",
    })
    const data = await res.json()

    const res2 = await fetch(`${process.env.REACT_APP_FETCH_URL}/cart/createOrder`,{
    method:"POST",
    headers:{'Content-type':'application/json'},
    credentials:"include",
    body:JSON.stringify({fullName,
        address1,
        address2,
        city,
        state,
        pincode,payment})
    })

    const data2 = await res2.json()

    if(res2.status !== 200 ||!data2){
        toast.error(data2.err)
    }

    if(res.status !== 200 || !data2){
        console.log("error")
    }else{
        const options = {
            key: data.key.toString(), // Enter the Key ID generated from the Dashboard
            amount: Number(data2.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Jubail Mallick",
            description: "Test Transaction",
            image: "https://instagram.fccu31-1.fna.fbcdn.net/v/t51.2885-19/310706630_165575929408199_6934191854666201627_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccu31-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RJH4MYw55fgAX_oa2kA&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAJvMfoBg3c5DDssVhGjSakDsQfdi6EgdKIQLJYqgcSVA&oe=63758416&_nc_sid=6136e7",
            order_id: data2.id.toString(), //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async (response)=>{
                const res3 = await fetch(`${process.env.REACT_APP_FETCH_URL}/cart/orderVerify`,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    credentials:"include",
                    body:JSON.stringify({
                        razorpayPaymentId:response.razorpay_payment_id,
                        razorpayOrderId:response.razorpay_order_id,
                        razorpaySignature:response.razorpay_signature,
                        address


                    })
                    
                })
                const data3 = await res3.json()

                if(res.status !== 200 || !data){
                    toast.error("error")

                }else if(res.status === 200){
                    navigate('/orderSuccess')
                    toast.success("Order placed successfully")

                }else{
                    console.log(data3.err)
                }
                

            } ,
            prefill: {
                name: "Jubail Mallick",
                email: "jubail.mallick@example.com",
                contact: "9999999999"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
   
};
 
}
}
