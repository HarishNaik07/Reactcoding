import React, { useState } from 'react'

function Star() {
    let limit= 5;
    const[rating,setRating]=useState(2);
const handleClick=(i)=>{
    setRating(i+1);
}
  return (
    <div>
        {[...Array(limit)].map((_,i)=>(
            <span key={i} onClick={()=>handleClick(i)}>
                {i<rating ? '★' :'☆'}
                ★☆
            </span>
        ))}
    </div>
  )
}
export default Star