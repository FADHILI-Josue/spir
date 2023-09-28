'use client'
import { FC, useEffect, useState } from 'react'
import { BannerBg } from '@/assets/index'
import { Button } from '@/components/ui/button'
import Bannerbg from '../banner/Banner-bg'
import { motion } from 'framer-motion'

interface HomeBannerProps {

}

const HomeBanner: FC<HomeBannerProps> = ({ }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 500); // Adjust the delay as needed
    }, []);
    return <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 2}}
        style={{
            opacity: opacity,
        }}
        className='fixed z-0 flex h-[95vh] w-full items-center'>
        <Bannerbg />
        <div className='mx-[10%]'>
            <div className="flex flex-col items-center space-y-4 lg:items-start">
                <span className="text-center font-serif text-3xl md:text-6xl lg:max-w-md lg:text-start lg:text-5xl">The most <em className="font-sans">trusted</em> smart ring.</span>
                <p className='text-center text-slate-900 lg:max-w-md lg:text-start'>Health tracking wrapped around your finger — track your sleep, activity and recovery in style.</p>
                <Button size={'sm'} className='w-fit rounded-full p-6'>Shop Now</Button>
                <div className='flex translate-y-10 flex-col items-center gap-3 lg:hidden'>
                    <p>Scroll to discover</p>
                    <div className="flex h-12 w-5 items-center justify-center rounded-full border border-stone-600 bg-[#C1BBB7] ">
                        <div className='my-2 flex h-[80%] w-full items-center justify-center overflow-hidden rounded-full'>
                            <div className="move h-1/4 w-1/4 rounded-full bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
}

export default HomeBanner