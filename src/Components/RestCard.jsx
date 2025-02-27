import React from 'react'
import { Link } from 'react-router'

function RestCard({restinfo}) {
  return (
    <Link to={"/city/delhi/"+restinfo?.info?.id}>
    <div className='max-w-[280px] mb-5 transform transition duration-200 hover:scale-95'>  
        <img className='w-70 h-45 rounded-xl object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo.info.cloudinaryImageId} alt="" />
        <div className='w-[95%] mx-auto mt-3'>
        <div className='font-bold text-[1.1vw]'>{restinfo?.info?.name}</div>
        <div className='flex items-center gap-1'>
        <svg
        className="w-6 h-6 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.118 3.442a1 1 0 00.95.69h3.62c.969 0 1.371 1.24.588 1.81l-2.927 2.116a1 1 0 00-.364 1.118l1.118 3.442c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.927 2.116c-.785.57-1.84-.197-1.54-1.118l1.118-3.442a1 1 0 00-.364-1.118L3.36 7.869c-.783-.57-.38-1.81.588-1.81h3.62a1 1 0 00.95-.69l1.118-3.442z" />
      </svg>
          
        <span className='text-sm'>{restinfo?.info?.avgRating}</span>
       <span className='text-sm'>{restinfo?.info?.sla?.slaString}</span>
        </div>
        
        <div className='text-gray-600 h-7 text-[1vw] overflow-hidden mt-1'>{restinfo?.info?.cuisines.join(" ")}</div>
        
        </div>
    </div>   
    </Link>
  )
}

export default RestCard