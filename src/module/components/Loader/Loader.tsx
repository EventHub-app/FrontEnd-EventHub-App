import { Images } from '@/module/constants/Image'
import type { LoaderType } from '@/module/types/LoaderType'
import { Modal } from '@mui/material'

export default function Loader(params:LoaderType) {
      const { isOpended } = params
  return (
    <Modal  open={isOpended} className='h-full flex items-center justify-center'>
         <div className='min-h-svh w-full flex items-center justify-center'>
           <img src={Images.LoaderImage} alt="loading-icon" className='w-50' />
         </div>
    </Modal>
  )
}
