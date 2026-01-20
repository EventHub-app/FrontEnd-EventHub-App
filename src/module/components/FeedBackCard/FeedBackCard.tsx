import type { FeedBackCardType } from '@/module/types/FeedBackCardType'
import { Star } from 'lucide-react'
export default function FeedBackCard(item: FeedBackCardType) {
    const { image, profission, userPhoto, UserName, comment } = item
    return (
        <div className='w-full md:flex md:flex-col lg:flex-row xl:flex-row  md:ml-5 mt-5 '>
            <div>
                <img src={image} alt="" className='    xl:w-150 rounded-l-xl h-full '/>
            </div>
            <div className=' p-5'>
                <div className='text-yellow-500 flex'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />

                </div>
              <p className='text-[20px] xl:text-xl text-zinc-500  mt-4'>
                  {comment}
              </p>
                <div className='flex mt-5'>
                    <div>
                        <img src={userPhoto} alt=""   className='w-10 rounded-full '/>
                    </div>
                    <div className='ml-2'>
                        <p  className='text-zinc-600 text-[18px] xl:text-xl'>{UserName}</p>
                        <p className='text-zinc-400 text-[14px]'>{profission}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
