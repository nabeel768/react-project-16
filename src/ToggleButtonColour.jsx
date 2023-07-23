import React from 'react'
import { useState } from 'react'

const ToggleButtonColour = () => {
const[backgroundColor,setBackroundColor]=useState('blue')
const[textColor,setTextColor]=useState('#1b1b1b')
const[buttonStyle,setButtonStyle]=useState('blue')

const handleClick=()=>{
  setBackroundColor(backgroundColor === 'blue' ? '#1b1b1b' : 'blue')
  setTextColor(textColor === '#1b1b1b' ? 'blue' : '#1b1b1b')
  setButtonStyle(backgroundColor === 'blue' ? '1b1b1b' : 'blue')
}

  return (
    <>
<section style={{backgroundColor,color:textColor}}>
  <button onClick={handleClick} style={{buttonStyle,color:textColor,border:`2px solid ${textColor}`}}>{backgroundColor==="blue" ? 'Dark Theme' : 'Light Theme'}</button>
  <section className='content'>
  <h1>Welcome To A <br /> 
  Real World
  </h1>
</section>
</section>
    </>
  )
}

export default ToggleButtonColour