'use client'
import { FC, useState } from 'react'
import Carousel from './testimonial/carousel'
import SideImage from './testimonial/SideImage'
import { fitness, mattWalker } from '@/assets'
import { Testimonials } from '@/costants'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import {useIsLargeScreen} from '@/hooks/isxScreen'
import TestimonialText from './TestimonialText'

interface TestimonialProps {

}

const Testimonial: FC<TestimonialProps> = ({ }) => {
  const [activeIndex, setActiveIndex] = useState(0)


  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
    )
  }
  const isLargeScreen = useIsLargeScreen()
  return <div className='flex md:w-full grid-cols-1 flex-col items-center pb-20 lg:grid lg:grid-cols-3 mx-10 md:px-32 lg:mx-0'>
    {/* <Carousel /> */}
    {/* <SideImage imageUrl={fitness} altText='hello world'/> */}
    <div className="hidden flex-col lg:flex">
      <div className="ml-10 flex items-center gap-8"> <ArrowLeft className='rounded-full border border-stone-400 p-2 text-3xl transition-all duration-200 hover:border-stone-800' size={40} onClick={handlePrev} /> <p className='text-sm text-gray-700'>0{activeIndex + 1} — 0{Testimonials.length}</p> <ArrowRight className='rounded-full border border-stone-400 p-2 text-3xl transition-all duration-200 hover:border-stone-800' size={40} onClick={handleNext} /> </div>
      <div className="mt-[20%] flex -translate-x-[25%] items-center gap-6 overflow-x-hidden">
        {Testimonials.filter((e) => Testimonials.indexOf(e) !== activeIndex).map((e, i) => <div key={i} className={cn('w-1/2', { 'order-last': activeIndex !== 1 && i === 0 })}><Carousel activeIndex={Testimonials.indexOf(e)} /></div>)}
      </div>
    </div>
    <div className="h-full pb-2 w-full lg:h-[80vh]">
      <Carousel activeIndex={activeIndex} />
      {/* <Image src={mattWalker} alt='mattw walker' />  */}
    </div>
    {!isLargeScreen &&
      <div className="flex w-full items-center justify-between gap-8 pb-7 lg:pt-3">  <p className='text-sm text-gray-700'>0{activeIndex + 1} — 0{Testimonials.length}</p> <div className='flex items-center gap-4'><ArrowLeft className='rounded-full border border-stone-400 p-2 text-3xl transition-all duration-200 hover:border-stone-800' size={40} onClick={handlePrev} /> <ArrowRight className='rounded-full border border-stone-400 p-2 text-3xl transition-all duration-200 hover:border-stone-800' size={40} onClick={handleNext} /></div></div>
    }
    <div className="flex flex-col justify-center gap-4 lg:px-16">

        <TestimonialText>
      <q className='text-lg text-slate-900'>
          {Testimonials[activeIndex].quote}
      </q>
        </TestimonialText>
      <TestimonialText>
        <h2 className='text-sm font-bold text-slate-900'>{Testimonials[activeIndex].author_name}</h2>
      </TestimonialText>
      <TestimonialText>
        <p className='text-sm'>{Testimonials[activeIndex].author_desc}</p>
      </TestimonialText>

    </div>

  </div>
}

export default Testimonial