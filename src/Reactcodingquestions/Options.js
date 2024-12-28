
import React, { useEffect, useState } from 'react'

function Options() {
        const [countries, setCountries] = useState([]);
        const [searchQuery, setSearchQuery] = useState("");
        
        const fetchData=async()=>{
            try{
                const response =  await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                const countryName= data.map((country)=>country.name.common);
                setCountries(countryName);
            }catch(error){
                console.log("Error is fetching:",error)
            }
            
        }
        // Fetch the country list from the API
        useEffect(() => {
        fetchData();
        }, []);
      
        // Filter countries based on the search query
        const filteredCountries = countries.filter((country) =>
          country.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );

  return (
    <div>
         <h2>Country Search</h2>

<input
  type="text"
  placeholder="Search for a country..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
/>

<ul>
  {filteredCountries.map((country, index) => (
    <li key={index}>{country}</li>
  ))}
</ul>
    </div>
  )
}

export default Options;