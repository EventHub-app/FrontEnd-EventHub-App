import React from 'react'
import logo from "@/assets/celebration_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import { Menu } from 'lucide-react'
export default function Header() {
    return (
        <div
            className='bg-white
       w-full
          p-5'
        >
            <header className=" flex justify-between items-center md:flex md:flex-row md:justify-around">
                <div
                    className='flex flex-reverse'
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
                            <Menu   size={40}/>
                        </div>
                        <button className='font-semibold text-xl cursor-pointer
                         font-poppins  hidden  md:hidden lg:flex
                        '>
                            Login
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
