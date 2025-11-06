import React from 'react'
import Video from '../Componets/Home/Video'
import HomeHeroText from '../Componets/Home/HomeHeroText'
import HomeBottomText from '../Componets/Home/HomeBottomText'


const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed '>
             <Video />
        </div>
        <div className='h-screen w-screen relative flex flex-col justify-between py-5'>
          <HomeHeroText />
          <HomeBottomText />
        </div>
    </div>
  )
}

export default Home