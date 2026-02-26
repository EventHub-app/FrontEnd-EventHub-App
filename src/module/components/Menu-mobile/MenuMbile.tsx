import { Modal } from '@mui/material'
import { X } from 'lucide-react'
import type { MenuType } from './MenuTypes'
import { Link } from 'react-router-dom'
export default function MenuMbile(params: MenuType) {
    const { isOpened, setIOpened } = params
    return (
        <Modal open={isOpened} className='flex justify-end lg:hidden'>
            <div
                className={`z-50 bg-white h-full w-1/2 p-5 absolute transition-all ${isOpened ? "left-[50%]" : "-left-[92%]"
                    }`}
            >
                <div className='flex justify-start'>
                    <X size={40} onClick={() => setIOpened(!isOpened)} />
                </div>
                <ul
                    className=" flex flex-col"
                >
                    <li
                        className='text-[17px]  mr-4   font-poppins     text-xl mt-4  '
                    >
                        Find Services
                    </li>
                    <li
                        className='text-[17px]  mr-4   font-poppins     text-xl mt-4  '
                    >
                        List Your Service
                    </li>
                    <li
                        className='text-[17px]  mr-4   font-poppins     text-xl mt-4  '
                    >

                        About Us
                    </li>
                    <div className='w-full'>
                       <Link to="/auth/login">  <button className='bg-main p-2 rounded  w-full mt-4 text-white'>Login</button></Link>
                    </div>
                </ul>

            </div>
        </Modal>
    )
}
