import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NewUser({newCustomers}) {
  
  return (
   
    <>  { newCustomers?.map((i,index) => <div key={index} style={{width:"100%",height:'60px',padding:'9px 0px',borderBottom:'1px solid  #E5E7EB'}}>
            <div style={{display:'flex',flexDirection:"row",alignItems:"center",gap:'10px'}}>
            <AccountCircleIcon/>
            <div>
                <h2 style={{fontSize:"16px", lineHeight:"24px"}}>{i.name}</h2>
                <p style={{fontSize:"12px",color:"#6B7280"}}>{i.email}</p>
            </div>
            </div> 
        </div> )}

    </>
  )
}

export default NewUser