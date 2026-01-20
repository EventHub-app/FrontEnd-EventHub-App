import type { HowItsWorksCardTypes } from '@/module/types/HowItsWorksTypes'


export default function HowItWorksCard(item: HowItsWorksCardTypes) {
    const { Icon, title, text } = item
    return (
        <div className='border border-zinc-200 flex  flex-col items-center p-5 rounded cursor-pointer '>
            <div className='bg-main rounded-full text-white  p-4 w-15 flex items-center justify-center h-15'>
                <Icon />
            </div>
             <h1 className='font-bold text-center text-xl mt-4 '>
                 {title}
             </h1>
             <h1 className='text-zinc-400 text-center text-[18px] mt-4'>
                 {text}
             </h1>
        </div>
    )
}
