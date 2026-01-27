import React from 'react'
import Category from '../Category/Category'
import { Balloon, Cake, ChefHat, Disc } from 'lucide-react'
export default function Categories() {
    return (
        <div className=' flex justify-center'>
            <div className='w-full md:w-8/12'>
                <h1
                    className='text-zinc-700 font-extrabold text-3xl mt-10 text-center md:text-start'
                >
                    Browse by Category
                </h1>
            <div className=' flex flex-col items-center lg:items-center lg:flex lg:flex-row lg:justify-between w-full mt-8'>
               <div className='w-11/12 mr-0 lg:w-1/4 lg:mr-5'>
                 <Category name={'Chef'} Icon={ChefHat}/>
            </div>
                     <div className='w-11/12 mt-4 mr-0 lg:w-1/4  lg:mr-5 lg:mt-0'>
                 <Category name={'Dj'} Icon={Disc}/>
            </div>
                    <div className='mr-0 w-11/12 mt-4  lg:w-1/4  lg:mr-5 lg:mt-0'>
                 <Category name={'Confectioners'} Icon={Cake}/>
            </div>
              <div className='mr-0 w-11/12 mt-4  lg:w-1/4 lg:mr-5 lg:mt-0'>
                 <Category name={'Decoration'} Icon={Balloon}/>
            </div>
            </div>

            </div>
        </div>
    )
}
