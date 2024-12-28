
import React, { useState } from 'react'

function Mode() {
    const[isDarkMode,setIsDarkMode]=useState(false);
    const toggleTheme=()=>{
        setIsDarkMode((prevMode)=>!prevMode);
    };

  return (
    <div
    style={{
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
   }}
    
    >

<h1>{isDarkMode ? 'Dark Mode':'Light Mode'}</h1>
<button onClick={toggleTheme}>Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default Mode;