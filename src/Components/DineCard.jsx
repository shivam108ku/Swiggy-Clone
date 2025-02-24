import React from 'react'

function DineCard({RestData}) {
  return (
    <div className='max-w-sm flex-none'>
        <a target='_blank' href={RestData.cta.link}>
        <div className='relative'>
            <img className=' rounded-xl w-80 h-50 object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url} alt="" />
            <p className='absolute bottom-4 left-4  z-10 font-semibold text-white text-xl mix-blend-normal' >{RestData.info.name}</p>
            <p className='absolute bottom-4 right-4  z-10 font-semibold text-white text-xl'>{RestData?.info?.rating?.value}</p>
            <div className='absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0'></div>
        </div>
        </a>
    </div>
  )
}

export default DineCard 