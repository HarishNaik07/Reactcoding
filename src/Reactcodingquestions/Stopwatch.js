import React, { useRef, useState } from 'react'

function Stopwatch() {
    const[time,setTime]=useState(null);
    const[now,setNow]=useState(null);

    const intervalRef=useRef(null);

    const handleStart=()=>{
        setTime(Date.now());
        setNow(Date.now());
       intervalRef.current=setInterval(()=>{
        setTime(Date.now);
       },10)
    }

    const handleStop=()=>{
      clearInterval(intervalRef.current);
    }

    const reset=()=>{
        setTime(false);
        clearInterval(intervalRef.current);
        setNow(0);
    }

    let timePassed = (time-now)/1000;

  return (
    <div>
        <h1>Stop Watch in React</h1>
        <h1>Stopwatch:{timePassed.toFixed(2)}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch