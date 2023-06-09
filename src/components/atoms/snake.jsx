import React from 'react'

const Snake = () => {
  return (
      <div className='relative translate-x-[5rem]'>
          <div className='w-[250px] py-5 h-[200px] bg-none border-l-[1.7rem]  border-b-[1.7rem]  border-[#000] -translate-x-[3rem] rounded-l-[7rem]'></div>
          <div className='w-[250px] py-5 h-[200px] bg-none border-r-[1.7rem] border-b-[1.7rem]  border-t-[1.7rem]  border-[#000] rounded-r-[7rem] translate-x-[5rem] -translate-y-[1.7rem]'></div>
          <div className='w-[250px] py-5 h-[200px] bg-none border-l-[1.7rem] border-b-[1.7rem]  border-t-[1.7rem]  border-[#000] rounded-l-[7rem] -translate-x-[5rem] -translate-y-[3.4rem]'></div>
          <div className='w-[250px] py-5 h-[200px] bg-none border-r-[1.7rem] border-b-[1.7rem]  border-t-[1.7rem]  border-[#000] rounded-r-[7rem] translate-x-[5rem] -translate-y-[5.1rem]'></div>
          <div className='w-[250px] py-5 h-[200px] bg-none border-l-[1.7rem] border-b-[1.7rem]  border-t-[1.7rem]  border-[#000] rounded-l-[7rem] -translate-x-[5rem] -translate-y-[6.8rem]'></div>
          <div className='w-[250px] py-5 h-[200px] bg-none border-r-[1.7rem] border-b-[1.7rem]  border-t-[1.7rem]  border-[#000] rounded-r-[7rem] translate-x-[5rem] -translate-y-[8.5rem]'></div>
          <div className='w-[250px] py-5 h-[200px] bg-none border-l-[1.7rem] border-b-[1.7rem]  border-t-[1.7rem]  border-[#000] rounded-l-[7rem] -translate-x-[5rem] -translate-y-[10.2rem]'></div>
          <div className='w-[250px] py-5 h-[200px] bg-none border-r-[1.7rem] border-b-[1.7rem]  border-t-[1.7rem]  border-[#000] rounded-r-[7rem] translate-x-[5rem] -translate-y-[11.9rem]'></div>
         
    </div>
  )
}

export default Snake