import FeedBackCard from '@/module/components/FeedBackCard/FeedBackCard'
import Image from "@/assets/unnamed.png"
export default function FeedBack() {
    return (
        <div className='w-full flex flex-col justify-center items-center mt-20'>
            <div className='w-11/12 lg:w-8/12'>
                <h1
                                    className='text-zinc-700 font-extrabold text-3xl mt-10 text-center md:text-start'
                >
                    Success Stories
                </h1>
                <p  className='text-zinc-500 text-[18px] mt-4 text-center md:text-start'>Join thousands of happy organizers who found their perfect match.</p>
           
            <div className=' xl:flex mt-10 '>

                <FeedBackCard image={Image} comment={'"Finding a DJ who could read our eclectic crowd seemed impossible until EventHub. The booking was seamless!"'} UserName={'Sarah Jenkins'} userPhoto={Image} profission={'Wedding Organizer'}/>
                    <FeedBackCard image={Image} comment={'"Finding a DJ who could read our eclectic crowd seemed impossible until EventHub. The booking was seamless!"'} UserName={'Sarah Jenkins'} userPhoto={Image} profission={'Wedding Organizer'}/>
         </div>
            </div>
        
        </div>
    )
}
