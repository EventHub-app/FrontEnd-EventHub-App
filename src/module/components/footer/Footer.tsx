import logo from "@/assets/celebration_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import { SendHorizonal } from "lucide-react"

export default function Footer() {
    return (
        <div className='flex justify-center p-10'>
            <footer className='w-8/12 flex flex-col  lg:flex lg:flex-col  xl:flex-row'>
                <div className="xl:w-1/4">
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
                    <p className='text-zinc-600 xl:p-4'>
                        Connecting event organizers with the world's most talented service providers to create unforgettable experiences.
                    </p>
                </div>
                  <div className="mt-5  xl:w-1/4 xl:mt-5">
                    <h1 className=" font-semibold text-[20px]">For Organizers</h1>
                    <ul>
                        <li className="text-zinc-600 text-[16px] mt-4">Find a Professional</li>
                        <li className="mt-2 text-zinc-600 text-[16px]">Planning Tools</li>
                        <li className="mt-2 text-zinc-600 text-[16px]">Success Stories</li>
                        <li className="mt-2 text-zinc-600 text-[16px]">Success Stories</li>
                        <li className="mt-2 text-zinc-600 text-[16px]">Safety & Trust</li>
                    </ul>
                </div>
               <div className="mt-5  xl:w-1/4 xl:mt-5">
                    <h1 className=" font-semibold text-[20px]">For Vendors</h1>
                    <ul>
                        <li className="mt-4 text-zinc-600 text-[16px]">List Your Service</li>
                        <li className="mt-2 text-zinc-600 text-[16px]">Vendor Dashboard</li>
                        <li  className="mt-2 text-zinc-600 text-[16px]">Resources</li>
                        <li className="mt-2 text-zinc-600 text-[16px]">Fees & Pricing</li>
                        <li className="mt-2 text-zinc-600 text-[16px]">Safety & Trust</li>
                    </ul>
                </div>

                <div className="mt-5  xl:w-1/4 xl:mt-5">
                    <h1 className="font-semibold text-[20px]">Newsletter</h1>
                    <p className="mt-4 text-zinc-500">Get event planning tips and the latest trends.</p>
                     <div className="mt-4 flex items-center">
                         <input type="text" className=" rounded-md border border-zinc-300 w-full p-2 outline-main" />
                           <div className="bg-main text-white p-2 rounded ml-2 cursor-pointer">
                             <SendHorizonal/>
                           </div>
                     </div>
                </div>
                
            </footer>
        </div>
    )
}
