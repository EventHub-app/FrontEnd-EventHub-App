
import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

export default function Services() {
  return (
    <div className='grid  gap-5 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4  xl:gap-5 text-white text-2xl text-center mt-5'>
         {
            ["", "", "", "","", "", "","","","","","",].map(item=>(
                <ServiceCard name={'Francisca Samassumba'} profission={'Cozinheira & Pasteleira'} location={'Bairro Rocha Pinto , Luanda-Angola'} startFrom={'200.000 AO'}/>
            ))
         }
    </div>
  )
}   
