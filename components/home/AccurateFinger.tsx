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
    return <div className='w-full flex flex-col relative items-center pb-20 lg:pb-[35vh] bg-[#E6DED3]'>
        <div className="max-w-full flex flex-col items-center space-y-3 ">
            <h2 className='lg:text-8xl text-6xl lg:-translate-x-32 text-slate-950 font-light -tracking-widest' ref={topRef}>More <em className='font-sans tracking-normal'>accurate</em></h2>
            <h2 className='text-6xl  text-slate-950 lg:pl-[25%] font-light lg:whitespace-nowrap tracking-tighter '>from the finger.</h2>
           {!isLargeScreen && <div className='flex pt-14 gap-3 items-center flex-nowrwap w-full ' style={{ transform: `translateX(${(scroll * 14) + 50}px)` }}>
                <Image src={manWithOuraMobile} className='h-[80%] w-full large:object-contain' alt='man with phone openning spir app' />
                <Image src={girlSleepingMobile} className='h-[80%] w-full large:object-contain -translate-y-10' alt='man with phone openning spir app' />
                <Image src={girlWithTowelMobile} className='h-[80%] w-full large:object-contain' alt='man with phone openning spir app' />
            </div>}
            <p className='text-lg font-medium lg:max-w-xl large:mx-28 text-stone-700 lg:pl-[35%] py-6'>The spir Ring is designed for accuracy above all because it measures from the palm side of your finger, where the pulse signal is strong to read from —much stronger than the wrist (Doctors measure your heart rate from your finger for a reason).</p>
        </div>
{isLargeScreen &&        <>
        <motion.div className='absolute -top-32 right-28 h-52 w-2/7' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={manWithOura} className='w-full h-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='absolute top-40 left-0 h-52 w-2/7' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlSleeping} className='w-full h-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='absolute bottom-36 -right-16 h-52 w-2/7' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlWithTowel} className='w-full h-full' alt='man with phone openning spir app' />
        </motion.div>
        </>}
    </div>
}

export default AccurateFinger