import React, { useState } from 'react'
import RestInfo from './RestInfo'

function MenuCard({menuItems}) {

  const [isOpen, setIsOpen] = useState(true);
  
  if("categories" in menuItems){
    return (
      <div className='w-full'>
        <p>{menuItems.title}</p>
        <div>
          {
            menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items}></MenuCard>)
          }
        </div>
      </div>
    ) 
  } 

  // if(!isOpen){
  //   return (
  //    <div className='w-full '>
  //     <div className='flex justify-between w-full'>
  //        <p className='text-3xl font-bold mb-4'>{menuItems.title}</p>
  //        <button className='text-5xl font-bold mr-20' onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'v'} </button>
  //    </div>
  //    </div>
  //   )
  // }

  return (
    <div className='w-full '>
        <div className='flex justify-between w-full'>
         <p className='text-3xl font-bold mb-4'>{menuItems.title}</p>
         <button className='text-3xl m-10'  > </button>
        </div>
        <div>
            {
                menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
            }
        </div>
    </div>
  )
}

export default MenuCard;