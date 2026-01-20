import { LocateIcon, LocationEditIcon, Search } from 'lucide-react'
import React from 'react'

export default function Hero() {
    return (
        <div
            className='flex justify-center    w-full h-162.5'
        >

            <section
                className="bg-cover bg-center     relative           rounded-3xl            md:w-8/12 "
                style={{

                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBiSzUNdyz3YYpV6P0sVJ9UMa9BTV9_LuQGLYpJGcC2XJR7mOkkBgY73WAilbhE00pAqYKtUTqUhavxZjkAs2Nh2yNQ7jfmUoT7fi1UDKgFUyUpOi90WKfeOYhYsqQ0XvsVHxttz1rT95mbShNqkEK9fhxum3M0xEbjyeSu0KrGlRvJ05Gp9kzvFmr3kWiyYMHKNGqTKVlcIW5meIMBVbnlnAHJd-TGk169o77WKZGUUeoTyTO0Y5loiBnTO69lWfznMfZpEOyYkF8"
                }}
            >
                <div className='h-full absolute bg-black w-full  opacity-[0.5]  rounded-3xl'>

                </div>
                <div className='text-white relative 
             flex flex-col  items-center  justify-center h-full
            text-2xl z-10 w-full '>
                    <div className='md:w-2/3'>
                        <h1
                            className='text-5xl md:text-5xl xl:text-6xl font-extrabold  text-center    '
                        >Everything you need for your next unforgettable event.</h1>
                        <p className='text-xl text-center mt-4'>Find top-rated chefs, DJs, decorators, and more for your special occasion.</p>
                    </div>
                    <div className='xl:flex  bg-white mt-5
                     p-4  rounded w-11/12 lg:w-10/12 
                     justify-around
                    '>
                        <div className='bg-white w-full text-zinc-500 flex items-center'>
                            <Search className='text-zinc-400' />
                            <input type="text" placeholder='What service are you looking?'  className='outline-none text-xl
                            '/>
                        </div>
                        <div className=' w-full text-zinc-600 
                         flex items-center xl:ml-2 text-xl  mt-5 xl:mt-0
                        '>
                            <LocateIcon className='text-zinc-400' />
                            <input type="text" placeholder='City or Zip'
                             className='outline-none w-full ml-0 lg:ml-2'
                        
                            />
                        </div>
                        <div className='
                         flex justify-end  mt-5 xl:mt-0
                        '>
                            <button className='bg-main flex p-2 rounded  items-center cursor-pointer
                             ml-2 w-full
                            '>
                                <Search />
                                <p className='font-semibold text-white ml-2'>Search</p>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
