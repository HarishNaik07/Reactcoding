import React, { useRef, useState } from 'react'

function Color() {
    const[color,setColor]=useState('');
    let inputRef=useRef(null);
      
    const handleClick=(e)=>{
        setColor(e.target.value);
    }
const handleChange=()=>{
    if (inputRef.current) {
        inputRef.current.style.backgroundColor = color;
      }
}

const reset=()=>{
    setColor("");
   if(inputRef.current){
    inputRef.current.style.backgroundColor = "white";
   }
}
    
  return (
    <div>
        <h1>Change the Color:{color}</h1>
        <input  ref={inputRef} type='text' value={color} onChange={handleClick}/>
        <button onClick={handleChange}>Change</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Color;




