'use client'
import { FC, useState } from 'react'
import Carousel from './testimonial/carousel'
import SideImage from './testimonial/SideImage'
import { fitness, mattWalker } from '@/assets'
import { IMAGES } from '@/costants'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialProps {
  
}

const Testimonial: FC<TestimonialProps> = ({}) => {
    const [activeIndex, setActiveIndex] = useState(0)


    const handleNext = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
      )
    }
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
      )
    }
  return <div className='grid w-full grid-cols-3'>
    {/* <Carousel /> */}
    {/* <SideImage imageUrl={fitness} altText='hello world'/> */}
    <div className="flex flex-col">
      <div className="ml-10 flex items-center gap-8"> <ArrowLeft className='rounded-full border border-stone-400 p-2 text-3xl' size={40} onClick={handlePrev}/> <p className='text-sm text-gray-700'>0{activeIndex+1} - 0{IMAGES.length}</p> <ArrowRight className='rounded-full border border-stone-400 p-2 text-3xl' size={40} onClick={handleNext}/> </div>
      <div className="mt-[20%] flex -translate-x-[25%] items-center gap-6 overflow-x-hidden">
        {IMAGES.filter((e)=>IMAGES.indexOf(e)!== activeIndex).map((e, i)=><div key={i} className={cn('w-1/2', {'order-last': activeIndex !== 1 && i === 0})}><Carousel activeIndex={IMAGES.indexOf(e)} /></div>)}
      </div>
    </div>
    <div className="h-[80vh] w-full">
        <Carousel activeIndex={activeIndex} />
        {/* <Image src={mattWalker} alt='mattw walker' />  */}
    </div>
    <div className=""></div>
  </div>
}

export default Testimonial