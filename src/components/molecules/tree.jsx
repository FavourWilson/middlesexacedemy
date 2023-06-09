import React from 'react'
import { BigCircle } from '../atoms/BigCircle'
import Snake from '../atoms/snake'
const Tree = () => {
  return (
    <div className="w-[80%] block z-[999] translate-x-[20rem] translate-y-[5rem]">
        <Snake/>
        <BigCircle className="-translate-y-[101rem] translate-x-[5rem]"/>
        <BigCircle value={`19 Nov 2022`} className="-translate-y-[87.5rem] translate-x-[23.3rem]"/>
        <BigCircle value={`19 Nov 2022`} className="-translate-y-[79.5rem] -translate-x-[61rem] flex-row-reverse"/>
        <BigCircle value={`19 Nov 2022`}  className="-translate-y-[71.5rem] translate-x-[23.3rem]"/>
        <BigCircle value={`19 Nov 2022`}  className="-translate-y-[63.5rem] -translate-x-[61rem] flex-row-reverse"/>
        <BigCircle value={`19 Nov 2022`}  className="-translate-y-[55.5rem] translate-x-[23.3rem]"/>
        <BigCircle value={`19 Nov 2022`}  className="-translate-y-[47.5rem] -translate-x-[61rem] flex-row-reverse"/>
    </div>
  )
}

export default Tree