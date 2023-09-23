'use client'
import { FC, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { BannerBg, blackIcon, blackRing, goldIcon, goldRing, roseGold, roseGoldIcon, silverIcon, sliverRing, stealthIcon, stealthRing } from '@/assets';

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

    return <section className='w-full'>
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className="group relative sm:self-center sm:col-span-2 lg:col-span-1 mx-auto">
            <div className="relative inline-flex overflow-hidden h-[80vh] supsmall:h-52 supsmall:w-52">
                {landingImages?.map((e, i) =>
                    <Image key={i} src={e.src} alt='rings images' className='hover:scale-110 bg-transparent object-cover  grow shrink-0 transition-all duration-500 h-full w-full' style={{ transform: `translateX(-${currentIndex * 100}%)` }}  />
                )
                }
            </div>
            <div className='absolute flex bottom-16 left-32 bg-white rounded-full gap-2 py-2 px-4'>
                {landingImages?.map((e,i)=><div key={i} className='flex items-center gap-2' onClick={()=>setCurrentIndex(i)}>
                     <Image src={e.color} alt={e.name + 'icon gradient'} className='h-7 w-7'/>
                     <span className='text-sm'>{currentIndex == i && e.name}</span>
                     </div>)}
            </div>
        </div>
    </section>
}

export default Images