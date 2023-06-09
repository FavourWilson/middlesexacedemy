import React from 'react'
import Circle from '../atoms/circle'
import Snake from '../atoms/snake'
const Tree = () => {
  return (
    <div className="w-[80%] block z-[999] translate-x-[20rem] translate-y-[5rem]">
        <Snake/>
        <Circle className="-translate-y-[101rem] translate-x-[5rem]"/>
        <Circle value={`19 Nov 2022`} className="-translate-y-[87.5rem] translate-x-[23.3rem]"/>
        <Circle value={`19 Nov 2022`} className="-translate-y-[79.5rem] -translate-x-[61rem] flex-row-reverse"/>
        <Circle value={`19 Nov 2022`}  className="-translate-y-[71.5rem] translate-x-[23.3rem]"/>
        <Circle value={`19 Nov 2022`}  className="-translate-y-[63.5rem] -translate-x-[61rem] flex-row-reverse"/>
        <Circle value={`19 Nov 2022`}  className="-translate-y-[55.5rem] translate-x-[23.3rem]"/>
        <Circle value={`19 Nov 2022`}  className="-translate-y-[47.5rem] -translate-x-[61rem] flex-row-reverse"/>
    </div>
  )
}

export default Tree