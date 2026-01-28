import { Images } from '@/module/constants/Image'
import type { ServiceType } from '@/module/types/ServiceType'
import React from 'react'

export default function ServiceCard(params:ServiceType) {
   const { name, profission, location,  startFrom } = params
  return (
    <div className=' relative  w-full lg:ml-10 h-100  flex flex-col    rounded-md bg-zinc-100'
   
    >
        <div   style={{backgroundImage:`url(${Images.BgImage})`}} className='bg-center bg-cover w-full h-45 rounded-t-md'>
           <div className='absolute top-32 left-5'>
             <img src={Images.ProfilePhoto} alt="" className='w-20 h-20 border-5 rounded border-white' />
           </div>          
        </div>

         <div className='mt-10 ml-4 text-black'>
                <p className='text-black text-start font-bold text-[20px]'>{name}</p>
                <p className='text-xl text-start text-main font-bold mt-2'>{profission}</p>
                <p className='text-sm text-zinc-500 text-start'>{location}</p>
            </div>
        
         <div className='text-zinc-800 mt-4'>
            <p  className='text-[18px]   font-bold text-start ml-4'>Starting From {startFrom}</p>
             <button className='bg-main text-white rounded p-5 text-sm  mt-2 w-full cursor-pointer'>View Profile</button>
         </div>
    </div>
  )
}
