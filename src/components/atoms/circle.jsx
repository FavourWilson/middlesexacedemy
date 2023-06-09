import React from 'react'

export const BigCircle = ({className,value}) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <div className={`w-[3rem] h-[3rem] rounded-full bg-[#EB6707] `}></div>
      <label className={ `text-[#EB6707] font-bold`}>{value}</label>
    </div>
  )
}

export const PinkCircle = ({className,value}) => {
  return (
    <div className={` ${className}`}>
      <div className={`w-[1rem] h-[1rem] rounded-full bg-[#ffcce6] `}></div>
      <label className={ `text-[#fad9d5] font-bold`}>{value}</label>
    </div>
  )
}
export const PurpleCircle = ({className,value}) => {
  return (
    <div className={`${className}`}>
      <div className={`w-[1rem] h-[1rem] rounded-full bg-[#e5ccff] `}></div>
      <label className={ `text-[#e5ccff] font-bold`}>{value}</label>
    </div>
  )
}
export const LightPurpleCircle = ({className,value}) => {
  return (
    <div className={`${className}`}>
      <div className={`w-[1rem] h-[1rem] rounded-full bg-[#d0cee2] `}></div>
      <label className={ `text-[#E6E6E6] font-bold`}>{value}</label>
    </div>
  )
}
export const BlueCircle = ({className,value}) => {
  return (
    <div className={` ${className}`}>
      <div className={`w-[1rem] h-[1rem] rounded-full bg-[#9ac7bf] `}></div>
      <label className={ `text-[#b0e3e6] font-bold`}>{value}</label>
    </div>
  )
}