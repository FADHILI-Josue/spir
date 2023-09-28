'use client'

import * as React from 'react'
import {
  useSpringRef,
  animated,
  useTransition,
  // Remove useSpring since it's not being used
} from '@react-spring/web'

import styles from './styles.module.css'
import { Testimonials } from '@/costants'
import Image from 'next/image'
import { before } from 'node:test'


interface CarouselProps {
  activeIndex: number
}

export default function Carousel({activeIndex}:CarouselProps) {
  const springApi = useSpringRef()

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    leave: {
      clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
    },
    // Remove onRest, exitBeforeEnter, delay, and ref since they're not needed
    config: {
      duration: 1000,
    },
  })


  return (
    <div className='h-full w-full'>
      <div className={styles.container__inner}>

        {transitions((springs, item) => (
          <animated.div className='absolute top-0 w-full overflow-hidden' style={springs}>
            <Image src={Testimonials[item].Image} alt={`Image ${item + 1}`} className='h-full w-full object-contain' />
          </animated.div>
        ))}
      </div>
    </div>
  )
}
