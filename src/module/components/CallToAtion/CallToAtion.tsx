import React from 'react'

export default function CallToAtion() {
  return (
    <div className='w-full flex justify-center mt-40'>
          <div className='w-8/12 text-white bg-main h-125 rounded-4xl flex flex-col  justify-center items-center'>

 <div className='w-1/2'>
     <h1 className='md:text-5xl  font-extrabold text-center'>
    Ready to make your next event legendary?
 </h1>
 <p className='text-xl mt-10 text-center'>Join thousands of event planners today and discover the best professionals in your area.</p>
 </div>
  <div className='mt-6 flex flex-col flex-wrap items-center justify-center w-full md:flex md:flex-row  md:justify-center '>
      <button className='bg-white text-main p-4 text-xl  font-bold rounded cursor-pointer md:w-1/5  whitespace-nowrap'>Get Started Now</button>
      <button className='bg-white/20 backdrop-blur-lg mt-4 md:mt-0 md:ml-5 cursor-pointer p-3 text-xl rounded border whitespace-nowrap border-zinc-200 md:w-1/5'>List Your Service</button>
  </div>
    </div>
    </div>
  )
}
