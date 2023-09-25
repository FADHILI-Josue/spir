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
  return <div className='w-full grid grid-cols-3'>
    {/* <Carousel /> */}
    {/* <SideImage imageUrl={fitness} altText='hello world'/> */}
    <div className="flex flex-col">
      <div className="flex items-center gap-8 ml-10"> <ArrowLeft className='border border-stone-400 text-3xl rounded-full p-2' size={40} onClick={handlePrev}/> <p className='text-sm text-gray-700'>0{activeIndex+1} - 0{IMAGES.length}</p> <ArrowRight className='border border-stone-400 text-3xl rounded-full p-2' size={40} onClick={handleNext}/> </div>
      <div className="flex items-center overflow-x-hidden mt-[20%] gap-6 -translate-x-[25%]">
        {IMAGES.filter((e)=>IMAGES.indexOf(e)!== activeIndex).map((e, i)=><div className={cn('w-1/2', {'order-last': activeIndex !== 1 && i === 0})}><Carousel activeIndex={IMAGES.indexOf(e)} /></div>)}
      </div>
    </div>
    <div className="w-full h-[80vh]">
        <Carousel activeIndex={activeIndex} />
        {/* <Image src={mattWalker} alt='mattw walker' />  */}
    </div>
    <div className=""></div>
  </div>
}

export default Testimonial