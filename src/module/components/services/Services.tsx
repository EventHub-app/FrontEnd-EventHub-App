import ServiceCard from '../ServiceCard/ServiceCard'
import useListService from '@/module/hooks/useListService'
export default function Services() {
     const {  dataService } =  useListService()

  return (
    <div className='grid  gap-5 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4  xl:gap-5 text-white text-2xl text-center mt-5'>
         {
          dataService?.map((item, i)=>(
                <ServiceCard name={item.user.name} profission={item.expirienceYears} location={item.user.address} start_from={item.start_from} key={i}/>
            ))
         }
    </div>
  )
}   
