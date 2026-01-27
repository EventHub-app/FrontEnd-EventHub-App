import Header from '@/module/components/header/Header'
import FilterAsideComponent from '@/module/components/FilterAsideComponent/FilterAsideComponent'
import Services from '../components/services/Services'
import CategoryFilter from '../components/Category-Filter/CategoryFilter'
import Footer from '../components/footer/Footer'

export default function ProfissionalPageResult() {
    return (
        <div className='flex flex-col items-center w-full '>
            <Header isInSearchResultPage={true} />
            <div className='w-9/12 flex'>
                <div className='w-full '>
                    <FilterAsideComponent />
                </div>
                <div className=' w-10/12 flex flex-col justify-center '>
                    <CategoryFilter />
                    <Services />
                </div>
            </div>
            <div className='w-full'>
                 <Footer/>
            </div>
        </div>
    )
}
