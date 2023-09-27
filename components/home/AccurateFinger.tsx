'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ImageComp } from '../ImageComp'
import { girlSleeping, girlSleepingMobile, girlWithTowel, girlWithTowelMobile, manWithOura, manWithOuraMobile } from '@/assets'
import Image from 'next/image'
import useIsLargeScreen from '@/hooks/isLargeScreen'
interface AccurateFingerProps {

}

const AccurateFinger: FC<AccurateFingerProps> = ({ }) => {

    const [scroll, setScroll] = useState<number>(0)
    const topRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                setScroll(rect.top / 10);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const isLargeScreen = useIsLargeScreen()
    return <div className='relative flex w-full flex-col items-center bg-[#E6DED3] pb-20 lg:pb-[35vh]'>
        <div className="flex max-w-full flex-col items-center space-y-3 ">
            <h2 className='text-3xl md:text-6xl font-light -tracking-widest text-slate-950 lg:-translate-x-32 lg:text-8xl' ref={topRef}>More <em className='font-sans tracking-normal'>accurate</em></h2>
            <h2 className='text-3xl md:text-6xl  font-light tracking-tighter text-slate-950 lg:whitespace-nowrap lg:pl-[25%] '>from the finger.</h2>
           {!isLargeScreen && <div className='flex-nowrwap flex w-full items-center gap-3 pt-14 ' style={{ transform: `translateX(${(scroll * 14) + 50}px)` }}>
                <Image src={manWithOuraMobile} className='h-[80%] w-full large:object-contain' alt='man with phone openning spir app' />
                <Image src={girlSleepingMobile} className='h-[80%] w-full -translate-y-10 large:object-contain' alt='man with phone openning spir app' />
                <Image src={girlWithTowelMobile} className='h-[80%] w-full large:object-contain' alt='man with phone openning spir app' />
            </div>}
            <p className='py-6 text-lg font-medium text-stone-700 lg:max-w-xl lg:pl-[35%] mx-10 md:mx-28'>The spir Ring is designed for accuracy above all because it measures from the palm side of your finger, where the pulse signal is strong to read from —much stronger than the wrist (Doctors measure your heart rate from your finger for a reason).</p>
        </div>
{isLargeScreen &&        <>
        <motion.div className='w-2/7 absolute -top-32 right-28 h-52' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={manWithOura} className='h-full w-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='w-2/7 absolute left-0 top-40 h-52' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlSleeping} className='h-full w-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='w-2/7 absolute -right-16 bottom-36 h-52' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlWithTowel} className='h-full w-full' alt='man with phone openning spir app' />
        </motion.div>
        </>}
    </div>
}

export default AccurateFinger