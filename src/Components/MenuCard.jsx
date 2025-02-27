import React from 'react'
import RestInfo from './RestInfo'

function MenuCard({menuItems}) {
  return (
    <div className='w-full'>
        <p>{menuItems.title}</p>
        <div>
            {
                menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
            }
        </div>
    </div>
  )
}

export default MenuCard;