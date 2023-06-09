import React from 'react'
import Line from '../atoms/line'
import { PinkCircle } from '../atoms/circle'
import { PurpleCircle } from '../atoms/circle'
import { BlueCircle } from '../atoms/circle'
import Card from './../atoms/card';
import { CardInfo } from '../atoms/info'
const LineSide = () => {
    const colors = ["#9ac7bf", "#e5ccff", "#b0e3e6", "#ffcce6"];
  return (
      <div className='relative p-5'>
          <Line />
            <Card className={`absolute top-10 flex flex-col justify-center border-2 border-[#919c9b] items-center p-8 gap-2 bg-[#9ac7bf] w-10rem]  translate-x-[20rem] `}>
              <span className='w-[120px] flex items-center justify-center border-2 border-[#919c9b] h-10 rounded-xl -translate-y-[4rem] bg-[#9ac7bf]'>
                  <h3 className='font-bold'>20 Oct 2020</h3>
              </span>
              <h2>NHS told vaccination programme will be delivered</h2>
           </Card>
            <Card className={`absolute top-[18rem] flex flex-col justify-center items-center p-5 gap-2 bg-[#e5ccff] w-10rem] `}>
              <span className='w-[120px] flex items-center justify-center border-2 border-[#e5ccff] h-10 rounded-xl -translate-y-[2.5rem] bg-[#9ac7bf]'>31 Oct 2020</span>
              <h2>Second national lockdown announced</h2>
             <p>In NCL, teams start to be recruited and sites explored for vaccination. Sites ARE BEING identified/explored and teams recruited. 74 sites were reviewed and discounted as mass vaccination sites.</p>

          </Card>
          <Card className={`absolute top-[41rem] flex flex-col justify-center items-center p-5  bg-[#9ac7bf] w-10rem]  translate-x-[20rem]`}>
            <span className='w-[120px] flex items-center justify-center border-2 border-[#919c9b] h-10 rounded-xl -translate-y-[3rem] bg-[#9ac7bf]'>

                  <h2 className='font-bold'>1 Nov 2020</h2>
            </span>
              <p>Process starts: to recruit the public to become vaccinators. These were recruited from the social community
              </p>
           </Card>
            <Card className={`absolute top-[58rem] flex flex-col justify-center items-center p-5 gap-2 bg-[#e5ccff] w-10rem] `}>
              <span className='w-[120px] flex items-center justify-center border-2 border-[#e5ccff] h-10 rounded-xl -translate-y-[2.5rem] bg-[#9ac7bf]'>
                  20 Nov 2020
              </span>
              <p>
                  Leadership team recruited and sites found
            </p>
          </Card>

          <Card className={`absolute top-[69rem] flex flex-col justify-center items-center p-5  bg-[#9ac7bf] w-10rem]  translate-x-[20rem]`}>
            <span className='w-[120px] flex items-center justify-center border-2 border-[#919c9b] h-10 rounded-xl -translate-y-[3rem] bg-[#9ac7bf]'>

                  <h2 className='font-bold'>1 Dec 2020</h2>
            </span>
              <p>
                  if anybody knows what they are doing they don't as this has never been done before
              </p>
          </Card>
          
           <Card className={`absolute top-[79rem] flex flex-col justify-center items-center p-5 gap-2 bg-[#e5ccff] w-10rem] `}>
              <span className='w-[120px] flex items-center justify-center border-2 border-[#e5ccff] h-10 rounded-xl -translate-y-[2.5rem] bg-[#9ac7bf]'>
                  5 Dec 2020
              </span>
              <p>
                  Royal free clinic opens
            </p>
          </Card>

          <Card className={`absolute top-[89rem] flex flex-col justify-center items-center p-5  bg-[#9ac7bf] w-10rem]  translate-x-[20rem]`}>
            <span className='w-[120px] flex items-center justify-center border-2 border-[#919c9b] h-10 rounded-xl -translate-y-[3rem] bg-[#9ac7bf]'>

                  <h2 className='font-bold'>9 Dec 2020</h2>
            </span>
              <p>
                  Vaccinator training starts for registered health professionals 

and general public, this continues throughout the project.
              </p>
          </Card>
            
           <Card className={`absolute top-[109rem] flex flex-col justify-center items-center p-5 gap-2 bg-[#e5ccff] w-10rem] `}>
              <span className='w-[120px] flex items-center justify-center border-2 border-[#e5ccff] h-10 rounded-xl -translate-y-[2.5rem] bg-[#9ac7bf]'>
                  15 Dec 2020
              </span>
              <p>
                 18,000 applications received. BP suggest utilising brand new
                AI tech called Robo recruiter to help process the applications.
            </p>
          </Card>
         
    </div>
  )
}

export default LineSide