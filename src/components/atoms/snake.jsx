import React from 'react'

const Snake = () => {
  return (
      <div className='absolute'>
          <div className='w-[300px] h-[200px] bg-none border-l-4  border-b-4 border-[#000] rounded-l-3xl'></div>
          <div className='w-[300px] h-[200px] bg-none border-r-4 border-b-4 border-t-4 border-[#000] rounded-r-3xl'></div>
          <div className='w-[300px] h-[200px] bg-none border-l-4 border-b-4 border-t-4 border-[#000] rounded-l-3xl'></div>
          <div className='w-[300px] h-[200px] bg-none border-r-4 border-b-4 border-t-4 border-[#000] rounded-r-3xl'></div>
    </div>
  )
}

export default Snake