import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/TextGeneratorEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="red"/> 
            <Spotlight className="top-24 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>
        
        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2] ">
            <div 
            className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"/>
        {/* what is md (medium device), tracking-widest */}
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
                <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Dynamic Web Magic with Next.js
                </h2>
                
                <TextGenerateEffect
                className='text-center text-[40px] md:text-5xl lg:text-6xl font-bold mt-2' 
                words='Where Blueprints Breathe!'
                />
                <p className='text-center'>
                    Ravi, Someone you never heard of, but you will soon.
                </p>

                <a href="#about">
                    <MagicButton 
                    title="Show Work"
                    icon={<FaLocationArrow />}
                    position='right'
                    />
                </a>
            </div>
        </div>
    
    </div>
  )
}
// You can make classname dynamic {`by this way`} and by passing props to components
export default Hero