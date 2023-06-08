import React from 'react'
import Circle from '../atoms/circle'
import Snake from '../atoms/snake'
const Tree = () => {
  return (
    <div className="relative">
        <Snake/>
        <Circle className="absolute translate-x-[5rem] -translate-y-[76rem]"/>
        <Circle className="absolute translate-x-[23.5rem] -translate-y-[60rem]"/>
        <Circle label="29 Nov 2022" className="absolute -translate-x-[1rem] -translate-y-[48rem]"/>
        <Circle className="absolute translate-x-[23.5rem] -translate-y-[41rem]"/>
        <Circle className="absolute -translate-x-[1rem] -translate-y-[30rem]"/>
    </div>
  )
}

export default Tree