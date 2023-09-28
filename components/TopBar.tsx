'use client'
import {useIsLargeScreen} from '@/hooks/isxScreen'
import { cn } from '@/lib/utils'
import { FC, useEffect } from 'react'
import { Button } from './ui/button'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'

interface TopBarProps {
    isOpen?: boolean
}

const TopBar: FC<TopBarProps> = ({ isOpen }) => {
    useEffect(() => {
        const rootElement = document.documentElement;

        // Set the desired height
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden';
        }
        else {
            document.documentElement.style.overflowY = 'scroll';
             document.documentElement.style.overflowX = 'hidden'
        }


    }, [isOpen])


    return <div className={cn('w-screen flex flex-col h-0 transition-all duration-300 bg-[#E6DED3] fixed z-[49] top-0 left-0 overflow-y-scroll overflow-x-hidden', isOpen && 'h-screen')}>
        {isOpen ?
            <div className='flex w-screen flex-col px-10 md:px-16 pt-36'>
                <div className='flex flex-col mb-24 gap-8 text-xl text-main'>
                {([{title:'Oura Experience', link: '#'}, {title:'The Pulse Blog',link: '#'},{title:'Oura for Business',link: '#'}]as const).map((e, i)=> <div key={i} className='flex items-center justify-between'><span>{e.title}</span> <ArrowRightIcon /></div>)}
                </div>

                <div className='flex flex-col gap-3 text-main text-sm mb-12'>
                {(['My Account','Oura on the Web','Help']as const).map((e, i)=> <div key={i}>{e}</div>)}
                </div>

                <Button size={'lg'} className='rounded-full py-7 mb-6'>Shop Now</Button>
                
            </div>
            : null
        }
    </div>
}

export default TopBar