
import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

export default function Services() {
  return (
    <div className='grid grid-cols-4  gap-5 text-white text-2xl text-center'>
         {
            ["", "", "", "","", "", "","","","","","",].map(item=>(
                <ServiceCard/>
            ))
         }
    </div>
  )
}
