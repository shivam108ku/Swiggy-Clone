import React, {useEffect, useState } from 'react'
import RestCard from './RestCard';
import Shimmer from './Shimmer';

function Restaurant() {

    const [restdata , setRestdata] = useState([]);

    useEffect(()=> {
        async function fetchData(){

            const proxyserver = "https://cors-anywhere.herokuapp.com/"
            const swiggApi ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"

           const response = await fetch(proxyserver+swiggApi);
           const data = await response.json();
           setRestdata(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    },[])

    // Shimmer Effect
    if(restdata.length==0)
        return <Shimmer/>

    return(
        <div className='flex gap-5 flex-wrap w-[80%] mx-auto mt-20'>
            {
                restdata.map((restinfo)=> <RestCard key={restinfo.info.id} restinfo={restinfo}></RestCard>)
            }
        </div>
    )
}

export default Restaurant;
