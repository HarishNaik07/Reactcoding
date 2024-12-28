import React, { useState } from 'react'

function Object() {
    const[input,setInput]= useState([
        {
            name:"Harish",
            age:24
        },
        {
            name:"Naik",
            age:25
        }
    ])
    const handleInput=()=>{
        setInput([
            ...input,{name:"Harish",age:24}
        ])
    }
  return (
    <div>
       {
      input.map((val,idx)=>(
        <ul key={idx}>
            <li >{val.name}</li>
            <li>{val.age}</li>
        </ul>
      ))
       }
       <button onClick={handleInput}>Add</button>
    </div>
  )
}

export default Object