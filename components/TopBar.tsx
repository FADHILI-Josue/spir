'use client'
import { cn } from '@/lib/utils'
import { FC, useEffect } from 'react'

interface TopBarProps {
    isOpen?: boolean
}

const TopBar: FC<TopBarProps> = ({ isOpen }) => {
    useEffect(() => {
        const rootElement = document.documentElement;

        // Set the desired height
        if (isOpen) {
            document.documentElement.style.overflow = 'hidden',
                document.body.style.filter = 'blur(5px) brightness(70%)';
        }
        else {
            document.documentElement.style.overflowY = 'scroll'; document.documentElement.style.overflowX = 'hidden'
            document.body.style.filter = 'none';
        }


    }, [isOpen])

    return <div className={cn('w-screen h-0 transition-all duration-300 bg-[#E6DED3] fixed z-[49] top-0 left-0 overflow-y-scroll overflow-x-hidden', isOpen && 'h-screen')}>
        {isOpen ?
            <div className='flex w-full flex-col px-16 pt-36'>
                HTMLDivElemen
            </div>
            : null
        }
    </div>
}

export default TopBar