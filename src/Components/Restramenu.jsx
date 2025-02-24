import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Restramenu() {

    let {id} = useParams();
    console.log(id);

    const [RestData, setRestData] = useState(null);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           setRestData(data);
        }
   
        fetchData();
       },[])

  return (
    <div>

      <h1>Hello Coder Army</h1>
        <h2>{id}</h2>
        
        
    </div>
  )
}

export default Restramenu