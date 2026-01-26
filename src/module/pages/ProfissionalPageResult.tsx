import Header from '@/module/components/header/Header'
import FilterAsideComponent from '@/module/components/FilterAsideComponent/FilterAsideComponent'
import Services from '../components/services/Services'

export default function ProfissionalPageResult() {
    return (
        <div className='flex flex-col items-center '>
            <Header isInSearchResultPage={true} />
             <div className='w-9/12 flex'>
                 <div className='w-1/4 '>
                    <FilterAsideComponent/> 
                 </div>
               <div className=' w-11/12 '>
                  <Services/>
               </div>
             </div>
        </div>
    )
}
