import React from 'react'
import './CSS/headingText.css'

function HeadingText({
    text
}) {
  return (
    <div style={{
        height:"80px",
        width:"100%",
        display:'flex',
        alignItems:"center",
        justifyContent:'center',

        
    }
  }
    >
    <h1 style={{
        fontFamily: "Karla, sans-serif",
        letterSpacing:'2px',
        fontWeight:'700',
        lineHeight:'normal',
        fontSize:'32px'
        
    }}>{text}</h1>
    </div>
  )
}

export default HeadingText