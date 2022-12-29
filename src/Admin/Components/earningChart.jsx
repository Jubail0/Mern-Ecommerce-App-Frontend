import React from 'react'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import { Line } from "react-chartjs-2";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);


function EarningChart({earningData}) {

 const months = earningData?.map((months) => {return months._id} )
 const incomes = earningData?.map((income)=>{return income.total})

 
  
  const data ={
    labels:months,
    datasets:[
      {
        label:"Monthly Income",
        backgroundColor:"rgb(255,99,132)",
        borderColor:"rgb(255,99,132)",
        data: incomes
      }
    ]
  }

  return (
    <div style={{width:"100%",height:'100%'}}><Line data={data}/></div>
  )
}

export default EarningChart