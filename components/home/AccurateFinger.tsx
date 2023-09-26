'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ImageComp } from '../ImageComp'
import { girlSleeping, girlWithTowel, manWithOura } from '@/assets'
import Image from 'next/image'
interface AccurateFingerProps {

}

const AccurateFinger: FC<AccurateFingerProps> = ({ }) => {

    const [scroll, setScroll] = useState<number>(0)
    const topRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                setScroll(rect.top/10);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <div className='relative flex w-full flex-col items-center bg-[#E6DED3] pb-[35vh]'>
        <div className="max-w-full space-y-3 ">
            <h2 className='-translate-x-32 text-8xl font-light -tracking-widest text-slate-950' ref={topRef}>More <em className='font-sans tracking-normal'>accurate</em></h2>
            <h2 className='whitespace-nowrap pl-[25%] text-7xl font-light tracking-tighter text-slate-950'>from the finger.</h2>
            <p className='max-w-xl py-6 pl-[35%] text-lg font-medium text-stone-700'>The spir Ring is designed for accuracy above all because it measures from the palm side of your finger, where the pulse signal is strong to read from —much stronger than the wrist (Doctors measure your heart rate from your finger for a reason).</p>
        </div>
        <motion.div className='w-2/7 absolute -top-32 right-12 h-52 sup-large:right-28' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={manWithOura} className='h-full w-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='w-2/7 absolute left-0 top-40 h-52' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlSleeping} className='h-full w-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='w-2/7 absolute -right-36 bottom-36 h-52 sup-large:-right-16' animate={{ x:scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlWithTowel} className='h-full w-full' alt='man with phone openning spir app' />
        </motion.div>
    </div>
}

export default AccurateFinger