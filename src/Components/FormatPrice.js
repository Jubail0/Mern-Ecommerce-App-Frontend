 const FormatPrice = ({price})=>{
    return Intl.NumberFormat('en-IN',{
        style:"currency",
        currency:"INR",
        maximumFractionDigits:0,
    }).format(parseInt(price))
}

export default FormatPrice