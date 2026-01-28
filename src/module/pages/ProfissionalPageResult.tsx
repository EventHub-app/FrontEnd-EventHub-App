import Header from '@/module/components/header/Header'
import FilterAsideComponent from '@/module/components/FilterAsideComponent/FilterAsideComponent'
import Services from '../components/services/Services'
import CategoryFilter from '../components/Category-Filter/CategoryFilter'
import Footer from '../components/footer/Footer'
import useListService from '../hooks/useListService'
import Loader from '../components/Loader/Loader'

export default function ProfissionalPageResult() {
   const { 
     dataService,
     isOpened
     
   } =  useListService()
    console.log(dataService)
    return (
        <div className='flex flex-col items-center w-full '>
            <Header isInSearchResultPage={true} />
            <div className='w-11/12 lg:w-10/12 md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row'>
                <div className='w-full '>
                    <FilterAsideComponent />
                </div>
                <div className=' flex flex-col w-full lg:w-10/12 lg:flex lg:flex-col lg:justify-center '>
                    <CategoryFilter />
                    <Services />
                </div>
            </div>
            <div className='w-full'>
                 <Footer/>
            </div>
            <Loader isOpended={isOpened}/>
        </div>
    )
}
