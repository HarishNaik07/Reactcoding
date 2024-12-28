import React from 'react'

function Modal() {
    const items=['Apple','Banana','Orange'];
  return (
    <div>
    <ul>
        {items.map((item,idx)=>(
            <li key={idx}>{item}</li>
        ))}
     </ul>    
    </div>
  )
}

export default Modal;