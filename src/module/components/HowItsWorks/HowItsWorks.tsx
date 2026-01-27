import HowItWorksCard from '../HowItWorksCard/HowItWorksCard'
import { Camera, SearchIcon, ShieldCheck } from 'lucide-react'

export default function HowItsWorks() {
    return (
        <div className=' w-full flex flex-col  justify-center items-center mt-32'>
            <div className='flex flex-col justify-center w-full items-center'>
                <h1 className='text-5xl font-extrabold text-zinc-900'>How it works</h1>
                <p className='text-zinc-600 text-xl mt-2 text-center'>Three simple steps to plan your perfect event without the stress.</p>
            </div>

            <div className='lg:w-8/12 flex flex-col items-center justify-center item lg:flex lg:flex-row mt-20'>
                <div className='w-11/12 lg:w-1/3'>
                    <HowItWorksCard Icon={SearchIcon} title={'Discover Professionals'} text={'Browse through thousands of verified service providers with real reviews from past clients.'} />

                </div>
                <div className='lg:mr-5 lg:ml-5 w-11/12 lg:w-1/3'>
                    <HowItWorksCard Icon={ShieldCheck} title={'Book & Pay Securely'} text={'Our secure platform handles payments and contracts so you can book with complete peace of mind.'} />

                </div>
                              <div className='w-11/12 lg:w-1/3'>

                    <HowItWorksCard Icon={Camera} title={'Enjoy Your Event'} text={'Focus on your guests while our professionals handle the details. We´ve got you covered'} />

                </div>
            </div>
        </div>
    )
}

