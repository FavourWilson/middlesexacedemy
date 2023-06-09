import React from 'react'

export const BigCircle = ({className,value}) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <div className={`w-[3rem] h-[3rem] rounded-full bg-[#EB6707] `}></div>
      <label className={ `text-[#EB6707] font-bold`}>{value}</label>
    </div>
  )
}

export const SmallCircle = ({className,value}) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <div className={`w-[1rem] h-[1rem] rounded-full bg-[#EB6707] `}></div>
      <label className={ `text-[#EB6707] font-bold`}>{value}</label>
    </div>
  )
}