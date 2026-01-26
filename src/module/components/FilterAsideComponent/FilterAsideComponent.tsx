import { Images } from '@/module/constants/Image'
import { CircleDollarSign, Coins, Star, Stars } from 'lucide-react'
import React from 'react'

export default function FilterAsideComponent() {
    return (
        <div className=' '>
            <div>
                <h1 className='text-xl font-bold text-zinc-800 '>
                    Filters
                </h1>
                <p className='text-zinc-500 mt-2'>Narrow your search</p>
                <div className='flex items-center mt-2'>
                    <CircleDollarSign className='text-main' size={30} />
                    <p className='text-zinc-800 text-xl font-bold ml-2'>Price Range</p>
                </div>
                <div className='w-full '>
                    <input type="range" name="" id="" className='w-full mt-4 cursor-pointer' />
                    <div className='flex justify-between'>
                        <p className=' text-zinc-600 text-xl'>
                            $250
                        </p>
                        <p className='text-zinc-600 text-xl'>
                            $2500
                        </p>
                    </div>
                </div>
                <div className='flex flex-col  mt-4'>
                    <div className='flex'>
                        <Star className='text-main' />
                        <h1 className='text-xl font-bold text-zinc-800 ml-2'>
                            Rating
                        </h1>
                    </div>

                    <div className='flex mt-4 items-center'>
                        <input type="checkbox" className='w-5 h-5 cursor-pointer' />
                        <div className='flex ml-2'>
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                        </div>
                        <p className='text-[15px] text-zinc-600 ml-2 font-bold'>5 Stars</p>
                    </div>
                    <div className='flex mt-4 items-center'>
                        <input type="checkbox" className='w-5 h-5 cursor-pointer' />
                        <div className='flex ml-2'>
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarEmpty} alt="" className='w-5' />
                        </div>
                        <p className='text-[15px] text-zinc-600 ml-2 font-bold'>4 Stars</p>
                    </div>
                    <div className='flex mt-4 items-center'>
                        <input type="checkbox" className='w-5 h-5 cursor-pointer' />
                        <div className='flex ml-2'>
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarFull} alt="" className='w-5' />
                            <img src={Images.StarEmpty} alt="" className='w-5' />
                            <img src={Images.StarEmpty} alt="" className='w-5' />
                        </div>
                        <p className='text-[15px] text-zinc-600 ml-2 font-bold'>3 Stars</p>
                    </div>
                </div>
                <div>
                    <div className='flex mt-5'>
                        <Star className='text-main' />
                        <h1 className='text-xl font-bold text-zinc-800 ml-2'>
                            Location
                        </h1>
                    </div>
                     <div className='mt-5'>
                         <select className='bg-white rounded p-2 w-full outline-none border border-zinc-300'>
                            <option value="">
                                Luanda
                            </option>
                            <option value="">
                                Luanda
                            </option>
                            <option value="">
                                Luanda
                            </option>
                            <option value="">
                                Luanda
                            </option>
                            <option value="">
                                Luanda
                            </option>
                            <option value="">
                                Luanda
                            </option>
                         </select>
                     </div>
                </div>
            </div>
        </div>
    )
}
