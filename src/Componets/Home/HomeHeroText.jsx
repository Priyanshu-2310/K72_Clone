import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1]  text-center'>
      <div className='text-[8vw] flex items-center justify-center uppercase leading-[8vw]' >
        The spark for
      </div>
      <div className='text-[8vw] uppercase leading-[8vw] flex items-center justify-center'>
        all
        <div className='h-[8vw] w-[18vw] rounded-full overflow-hidden'><Video /></div>
        things
      </div>
      <div className='text-[8vw] flex items-center justify-center uppercase leading-[8vw]'>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText