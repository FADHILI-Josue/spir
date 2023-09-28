'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

interface IntroProps {
  
}

const Intro: FC<IntroProps> = ({}) => {
    const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return   <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: isVisible ? 1 : 0 , y: 0 }}
  transition={{ delay: 0, duration: 0.5 }}
  ref={ref}
   className='mb-10 mt-20 flex w-full flex-col justify-around gap-5 px-8 md:px-[20%] lg:flex-row lg:items-start lg:gap-0 lg:px-10'>
  <h1 className='text-4xl font-light leading-tight text-slate-900 lg:max-w-md lg:text-5xl'>Your health. Your style. Your way.</h1>
  <div className="flex flex-col justify-between gap-5">
    <p className='text-lg text-gray-900 lg:max-w-sm'>Sleek, comfortable, accurate. spir fits seamlessly into your life, all night and all day.</p>
    <Button className='w-fit rounded-full px-4 py-2' variant={'outline'} size={'lg'}>Shop Now</Button>
  </div>
</motion.div>
}

export default Intro