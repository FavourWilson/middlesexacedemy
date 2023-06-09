import React from 'react'
import LineSide from '../molecules/lineside'
import { BlueCircle, LightPurpleCircle, PinkCircle, PurpleCircle } from '../atoms/circle'

const LandingPage = () => {
  return (
    <div className="flex justify-between">
      <LineSide />
      <div className='flex flex-col gap-5 translate-y-[10rem] -translate-x-[15rem]'>
        <div className='flex flex-col mt-5'>
          <div className='flex justify-around gap-10'>
            <PurpleCircle />
            <PurpleCircle />
            <PurpleCircle />
            <PurpleCircle />
          </div>
          <div className='flex justify-around gap-10 -translate-x-6'>
            <PurpleCircle />
            <PurpleCircle />
            <PurpleCircle />
            <PurpleCircle />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-around gap-10'>
            <LightPurpleCircle />
            <LightPurpleCircle />
            <LightPurpleCircle />
            <LightPurpleCircle />
          </div>
          <div className='flex justify-around gap-10 -translate-x-6'>
            <LightPurpleCircle />
            <LightPurpleCircle />
            <LightPurpleCircle />
            <LightPurpleCircle />
          </div>
        </div>
        <div className='flex flex-col mt-10'>
          <div className='flex justify-around gap-10'>
            <PinkCircle />
            <PinkCircle />
            <PinkCircle />
            <PinkCircle />
          </div>
          <div className='flex justify-around gap-10 -translate-x-6'>
            <PinkCircle />
            <PinkCircle />
            <PinkCircle />
            <PinkCircle />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-around gap-10'>
            <BlueCircle />
            <BlueCircle />
            <BlueCircle />
            <BlueCircle />
          </div>
          <div className='flex justify-around gap-10 -translate-x-6'>
            <BlueCircle />
            <BlueCircle />
            <BlueCircle />
            <BlueCircle />
          </div>
        </div>
        <div className='flex flex-col translate-x-[7rem] mt-1'>
          <div className='flex gap-6'>
            <PurpleCircle />
            <PurpleCircle />

          </div>
          <div className='flex  gap-6 translate-x-6'>
            <PurpleCircle />
            <PurpleCircle />

          </div>
        </div>
        <div className='flex flex-col translate-x-[7rem] mt-1'>
          <div className='flex  gap-6'>
            <LightPurpleCircle />
            <LightPurpleCircle />

          </div>
          <div className='flex gap-6 translate-x-6'>
            <LightPurpleCircle />
            <LightPurpleCircle />

          </div>
        </div>

        <div className='flex flex-col mt-10 translate-x-[7rem]'>
          <div className='flex  gap-10'>
            <PinkCircle />
            <PinkCircle />
            <PinkCircle />
          </div>
          <div className='flex  gap-10 translate-x-[1.7rem]'>
            <PinkCircle />
            <PinkCircle />

          </div>
        </div>

        <div className='flex flex-col translate-x-[7rem]'>
          <div className='flex  gap-10'>
            <BlueCircle />
            <BlueCircle />
            <BlueCircle />
          </div>
          <div className='flex  gap-10 translate-x-[5rem]'>
            <BlueCircle />
          </div>
        </div>
        <div className='flex flex-col mt-10 -translate-x-[7rem]'>
          <div className='flex justify-center gap-8'>
            <PinkCircle />
            <PinkCircle />
            <PinkCircle />
          </div>
          <div className='flex  gap-8 justify-center'>
            <PinkCircle />
            <PinkCircle />

          </div>
        </div>

        <div className='flex flex-col -translate-x-[7rem]'>
          <div className='flex  gap-10'>
            <BlueCircle />
            <BlueCircle />
            <BlueCircle />
          </div>
          <div className='flex  gap-10 translate-x-[5rem]'>
            <BlueCircle />
          </div>
        </div>




      </div>
    </div>
  )
}

export default LandingPage