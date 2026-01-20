import type { CategoryItem } from '@/module/types/CategoryItems'
import React from 'react'
import { Menu } from 'lucide-react'
export default function Category(Item: CategoryItem) {
    const { Icon, name } = Item
    return (
        <div className='border-zinc-200 hover:border-main hover:cursor-pointer flex flex-col group  rounded-xl items-center justify-center mr-2 h-[150px] border-1 w-full'>
            <Icon  className='text-main group-hover:scale-90' size={40}/>
            <p className='text-xl font-semibold mt-5'>{name}</p>
        </div>
    )
}
