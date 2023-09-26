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
    return <div className='w-full flex flex-col relative items-center pb-[35vh] bg-[#E6DED3]'>
        <div className=''>
            {/* <motion.div className='flex items-center flex-nowrwap w-full '>
                <div>
                    <Image src={ manWithOuraMobile} className='h-full w-full large:object-contain' alt='man with phone openning spir app' />
                </div>
                <div className='lg:w-2/7 flex-none   lg:absolute large:h-[73vh] large:w-[50vw] left-0 top-40 lg:h-52'>
                    <Image src={girlSleepingMobile} className='h-full w-full large:object-contain' alt='man with phone openning spir app' />
                </div>
                <div className='lg:w-2/7 flex-none lg:absolute -right-36 bottom-36 large:h-[73vh] large:w-[50vw] lg:h-52 sup-large:-right-16'>
                    <Image src={girlWithTowelMobile} className='h-full w-full large:object-contain' alt='man with phone openning spir app' />
                </div>
            </motion.div> */}
        </div>
        <div className="max-w-full space-y-3 ">
            <h2 className='text-8xl -translate-x-32 text-slate-950 font-light -tracking-widest' ref={topRef}>More <em className='font-sans tracking-normal'>accurate</em></h2>
            <h2 className='text-7xl text-slate-950 pl-[25%] font-light whitespace-nowrap tracking-tighter'>from the finger.</h2>
            <p className='text-lg font-medium max-w-xl text-stone-700 pl-[35%] py-6'>The spir Ring is designed for accuracy above all because it measures from the palm side of your finger, where the pulse signal is strong to read from —much stronger than the wrist (Doctors measure your heart rate from your finger for a reason).</p>
        </div>
        <motion.div className='absolute -top-32 right-28 h-52 w-2/7' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={manWithOura} className='w-full h-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='absolute top-40 left-0 h-52 w-2/7' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlSleeping} className='w-full h-full' alt='man with phone openning spir app' />
        </motion.div>
        <motion.div className='absolute bottom-36 -right-16z h-52 w-2/7' animate={{ x: scroll, y: 0, scale: 1, rotate: 0, }}>
            <Image src={girlWithTowel} className='w-full h-full' alt='man with phone openning spir app' />
        </motion.div>
    </div>
}

export default AccurateFinger