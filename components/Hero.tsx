import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLaptopCode } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='purple'/>
      </div>
      <div className="absolute top-0 left-0 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-purple-950">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
      />
      {/* Radial gradient for the container to give a faded look */}
        <div
          className=
            "pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
        />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            When Curiosity Meets Precision,
          </h2>

          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Building ideas into interfaces. One pixel, one logic at a time'
            filter={true}
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>
            Hi I'm Reza I build interfaces that think, move, and feel. From data to devices, pixels to processes
          </p>

          <a href="#about">
            <MagicButton
            title="Let's Explore >>"
            icon={<FaLaptopCode />}
            position='left'
            
            />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero