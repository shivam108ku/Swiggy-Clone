import React from 'react'
import DineCard from './DineCard'
import {dineoutRestaurants} from '../Utils/DineData' 

function DineOption() {
  return (
    <div className='w-80% mx-auto mb-20 mt-20'>
        <h1 className='text-center text-2xl font-bold'>Discover Best Restaurants on Dineout</h1>
        <div className='flex gap-4  flex-nowrap overflow-x-auto mt-5'>
           {
             dineoutRestaurants.map((RestData)=><DineCard key={RestData.info.id} RestData={RestData} />)
           }
        </div>
    </div>
  )
}

export default DineOption