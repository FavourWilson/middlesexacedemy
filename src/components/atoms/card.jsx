import React from 'react'

const Card = ({children,className}) => {
  return (
      <div className={`rounded-[3rem] w-[250px] h-auto ${className}`}>{children}</div>
  )
}

export default Card