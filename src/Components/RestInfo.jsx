import React from 'react'

function RestInfo({restData}) {
  return (
    <>
    <div className='flex w-full justify-between mb-2 pb-2'>
        <div className='w-[70%]'>
            <p className='text-2xl mb-1 text-gray-700 font-semibold'>{restData?.name}</p>
            <p className='text-xl'>{"$"+ ( "defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            <span className='text-green-700'>{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>{restData?.description}</p>
        </div>
        <div className='w-[20%] relative'>
            <img className='w-full h-36 rounded-3xl object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId} alt="" />
             <button className='absolute bottom-1 left-18 rounded-xl shadow-md border border-green-500  text-green-600 px-4 py-2  bg-white'>Add</button>
        </div>
    </div>
    <hr className='mb-6 mt-2'/>
    </>
  )
}

export default RestInfo;