import React from 'react'
import Category from '../Category/Category'
import { Balloon, Cake, ChefHat, Disc } from 'lucide-react'
export default function Categories() {
    return (
        <div className=' flex justify-center'>
            <div className='w-8/12'>
                <h1
                    className='text-zinc-700 font-extrabold text-3xl mt-10 text-center md:text-start'
                >
                    Browse by Category
                </h1>
            <div className='md:flex md:flex-row md:justify-between w-full mt-8'>
               <div className='md:w-1/4 mr-5'>
                 <Category name={'Chef'} Icon={ChefHat}/>
            </div>
                     <div className='md:w-1/4 mr-5'>
                 <Category name={'Dj'} Icon={Disc}/>
            </div>
                    <div className='md:w-1/4 mr-5'>
                 <Category name={'Confectioners'} Icon={Cake}/>
            </div>
              <div className='md:w-1/4 mr-5'>
                 <Category name={'Decoration'} Icon={Balloon}/>
            </div>
            </div>

            </div>
        </div>
    )
}
