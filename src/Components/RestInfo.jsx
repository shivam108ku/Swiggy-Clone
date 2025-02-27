import React from 'react'

function RestInfo({restData}) {
  return (
    <div className='flex w-full justify-between'>
        <div className='w-[70%]'>
            <p>{restData?.name}</p>
            <p>{"$"+restData?.defaultPrice/100}</p>
            <span>{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>{restData?.description}</p>
        </div>
        <div className='w-[20%] relative'>
            <img className='w-full h-30 object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId} alt="" />
             <button className='absolute bottom-0 left-0 text-green-600 px-4 py-2 bg-white'>Add</button>
        </div>
    </div>
  )
}

export default RestInfo;