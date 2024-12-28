import React, { useState } from 'react'

function Name() {
    const[list,setList]=useState([
        {title:'Item1',checked:false},
        {title:'Item2',checked:false},
        {title:'Item3',checked:false},
    ]);
    const[list1,setList1]=useState([
        {title:'ItemA',checked:false},
        {title:'ItemB',checked:false},
        {title:'ItemC',checked:false},
    ])

const handleCheck=(idx)=>{
     const updatedList=[...list];
     updatedList[idx].checked = !updatedList[idx].checked;
     setList(updatedList);
}

const handleSwap=()=>{
const updatedList = [...list];
const updatedList1 = [...list1];
updatedList.forEach((item,idx)=>{
    if(item.checked){
  const temp = updatedList[idx].title;
  updatedList[idx].title=updatedList1[idx].title;
  updatedList1[idx].title=temp
    }
    updatedList[idx].checked=false;
})
setList(updatedList);
setList1(updatedList1);
}
  return (
    <div>
        <div>
            <h3>List 1</h3>
            <ul>
            {list.map((item,idx)=>(
                <li key={idx}>
                    <input type='checkbox' checked={item.checked} onChange={()=>handleCheck(idx)}/>
                    {item.title}
                </li>
            ))}
            </ul>
        </div>
        <div>
            <h3>List2</h3>
            <ul>
                {list1.map((item,idx)=>( 
                <li key={idx}>
                    {item.title}
                </li>
                ))}
            </ul>
        </div>
        <button onClick={handleSwap}>Swap Checked List</button>
    </div>
  )
}
export default Name;