import React from 'react'
import logo from "@/assets/celebration_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import { Menu, Search } from 'lucide-react'
import type { HeaderType } from '@/module/types/HeaderType'
export default function Header(params: HeaderType) {
    const { isInSearchResultPage } = params
    return (
        <div
            className='bg-white
       w-full
          p-5'
        >
            <header className=" flex justify-between items-center md:flex md:flex-row md:justify-around">
                <div
                    className=' flex md:flex md:flex-reverse  md:justify-start cursor-pointer md:items-center md:w-1/2  lg:w-1/3 '
                >
                    <img src={logo}
                        className='text-main'
                        alt="" /> <h1
                            className='text-2xl
                       font-extrabold
                      '
                        >
                        EventHub
                    </h1>
                    {
                        isInSearchResultPage ?
                            (
                                <div className='w-8/12 ml-5 flex items-center hidden md:block md:flex md:flex-row md:items-center'>
                                    <input type="text"
                                        className='border p-2 border-zinc-400 text-zinc-500  outline-none rounded-full w-2/3'
                                        placeholder='search profissi....'
                                    />
                                    <button className='ml-2 bg-main rounded-full text-white p-2  cursor-pointer'>
                                        <Search />
                                    </button>
                                </div>
                            )
                            : ""
                    }
                </div>
                <nav
                    className='flex flex-row items-center  '
                >
                    <ul
                        className="
                      hidden
                       md:hidden  lg:flex
                     flex flex-row"
                    >
                        <li
                            className='text-[17px]  mr-4   font-poppins      '
                        >
                            Find Services
                        </li>
                        <li
                            className=' text-[17px]  mr-4      font-poppins'
                        >
                            List Your Service
                        </li>
                        <li
                            className='  text-[17px]     mr-4   font-poppins   '
                        >

                            About Us
                        </li>
                    </ul>
                    <div className='flex flex-row items-center  justify-between '>

                        <button
                            className='bg-main text-white rounded p-2  mr-4 cursor-pointer 
                          font-poppins
                         '
                        >
                            Sign Up
                        </button>
                        <div
                            className='flex lg:hidden'
                        >
                            <Menu size={40} />
                        </div>
                        <button className='font-semibold text-xl cursor-pointer
                         font-poppins  hidden  md:hidden lg:flex
                        '>
                            Login
                        </button>
                    </div>
                </nav>
            </header>
            {
                  isInSearchResultPage ? (
                     <div className='w-full mt-5 flex items-center justify-center md:block md:hidden md:hidden md:hidden'>
                <input type="text"
                    className='border p-2 border-zinc-400 text-zinc-500  outline-none rounded-full w-4/2'
                    placeholder='search profissi....'
                />
                <button className='ml-2 bg-main rounded-full text-white p-2  cursor-pointer'>
                    <Search />
                </button>
            </div>
                  ):""
            }
        </div>
    )
}
