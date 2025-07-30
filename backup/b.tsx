'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe"
import Lottie from "react-lottie";
import { useState } from "react";
import {companies, logo} from "@/data/index"
import MagicButton from "./MagicButton";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setcopied] = useState(false);

  return ( //using css gradient you can create gradient for background
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 ? 'flex justify-center h-full' : ''}`}>
        {img && (
          <img src={img} alt={img} className={cn(imgClassName,'object-cover','object-center')} />)}
      </div>

      <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
        {spareImg && <img src={spareImg} alt={spareImg} className={'object-cover object-center w-full h-full'} /> }
      </div>

      {id===6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold">
          </div>
        </BackgroundGradientAnimation>
      ) }
      <div className={cn(
        titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-sans text-xs font-extralight text-[#c1c2d3] mt-2 md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className={cn("font-sans font-bold text-lg lg:text-3xl max-w-96 z-10", 
          id === 6 ? "text-center" : ""
        )}>
          {title}
        </div>
      </div>
      {id===2 && <GlobeDemo />}
      {id===3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['React.js','Next.js','TypeScript'].map((item)=>(
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
          </div>
          <div className="flex flex-col gap-3 lg:gap-8">
            {['Node.js','MongoDB','Express.js'].map((item)=>(
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
          </div>
        </div>
      )}
      {id===6 && (
        <div className="mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie 
              options={{
                loop: copied,
                autoplay: copied,
                animationData: require('@/data/confetti.json'),
                rendererSettings:{
                  preserveAspectRatio: 'xMidYMid slice',
                }
              }}
            />
          </div>

            <div className="flex gap-3 items-center">
              {/* Social Buttons */}
              {logo.map((item) => {
                console.log('Rendering logo:', item.name, item.logo); // Debug log
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor} ${item.hoverBgColor} transition cursor-pointer`}
                  >
                    <img
                      src={item.logo}
                      alt={item.alt}
                      className={`object-contain ${
                        item.name === 'X' ? 'w-4 h-4 font-bold' : 'w-6 h-6'
                      }`}
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.logo}`);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={() => console.log(`Successfully loaded: ${item.logo}`)}
                    />
                  </a>
                );
              })}
            {/* Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-2 bg-[#10132E] text-white font-semibold hover:bg-[#23265a] transition cursor-pointer"
            >
              Resume
            </a>
            </div>
        </div>
      )}
    </div>
  );
};
