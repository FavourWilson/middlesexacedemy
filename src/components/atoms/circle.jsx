import React from 'react'

const Circle = ({className,children}) => {
  return (
    <div>
      <div className={`w-[3rem] h-[3rem] rounded-full bg-[#EB6707] ${className}`}></div>
      <label className={ `text-[#EB6707] font-bold`}>{children}</label>
    </div>
  )
}

export default Circle