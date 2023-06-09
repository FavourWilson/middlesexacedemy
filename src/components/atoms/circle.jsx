import React from 'react'

const Circle = ({className,value}) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <div className={`w-[3rem] h-[3rem] rounded-full bg-[#EB6707] `}></div>
      <label className={ `text-[#EB6707] font-bold`}>{value}</label>
    </div>
  )
}

export default Circle