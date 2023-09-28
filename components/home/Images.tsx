'use client'
import { FC, useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import Image, { StaticImageData } from 'next/image';
import { BannerBg, blackIcon, blackRing, goldIcon, goldRing, roseGold, roseGoldIcon, silverIcon, sliverRing, stealthIcon, stealthRing } from '@/assets';
import { useObserver } from '@/hooks/useObserver';

const Images: FC = () => {

    interface ImageData {
        src: StaticImageData,
        name: string,
        color: StaticImageData
    }

    const landingImages: ImageData[] = [
        {
            src: sliverRing,
            name: 'Silver',
            color: silverIcon
        },
        {
            src: blackRing,
            name: 'Black',
            color: blackIcon
        }, 
              {
            src: stealthRing,
            name: 'Stealth',
            color: stealthIcon
        },       
        {
            src: goldRing,
            name: 'Gold',
            color: goldIcon
        },
        {
            src: roseGold,
            name: 'Rose Gold',
            color: roseGoldIcon
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(5)


    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
        // else{
        //   setCurrentIndex(0)
        // }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const [touchPosition, setTouchPosition] = useState(null)
    // ...
    const handleTouchStart = (e: TouchEvent | any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
        console.log(touchDown)
    }

    const handleTouchMove = (e: TouchEvent | any) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    const ref = useRef<HTMLDivElement>(null);
    const { isVisible } = useObserver<HTMLDivElement>({ref})


    return <motion.section className='w-[96%]'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: isVisible ? 1 : 0 , y: 0 }}
    transition={{ delay: 0, duration: 0.5 }}
    ref={ref}>
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className="group relative mx-auto sm:col-span-2 sm:self-center lg:col-span-1">
            <div className="supsmall:h-52 supsmall:w-52 relative inline-flex h-[80vh] overflow-hidden">
                {landingImages?.map((e, i) =>
                    <Image key={i} src={e.src} alt='rings images' className='h-full w-full shrink-0  grow bg-transparent object-cover transition-all duration-500 hover:scale-110' style={{ transform: `translateX(-${currentIndex * 100}%)` }}  />
                )
                }
            </div>
            <div className='absolute bottom-16 left-5 md:left-32 flex gap-2 rounded-full bg-white px-4 py-2'>
                {landingImages?.map((e,i)=><div key={i} className='flex items-center gap-2' onClick={()=>setCurrentIndex(i)}>
                     <Image src={e.color} alt={e.name + 'icon gradient'} className='h-7 w-7'/>
                     <span className='text-sm'>{currentIndex == i && e.name}</span>
                     </div>)}
            </div>
        </div>
    </motion.section>
}

export default Images