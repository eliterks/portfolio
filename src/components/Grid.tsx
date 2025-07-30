import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='py-20'>
        {/* <h1 className='heading mb-12'>
            A small selection of <span className='text-purple'>recent projects</span>
        </h1> */}
        <BentoGrid className='w-full'>
           {gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg}) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
           ))} 
        </BentoGrid>
    </section>
  )
}
// props ko optional bnana ha toh use ? :
// example: title?: string;
export default Grid