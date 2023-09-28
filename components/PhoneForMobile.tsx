'use client'
import {useIsLargeScreen} from '@/hooks/isxScreen'
import { cn } from '@/lib/utils'
import { FC, RefObject, useRef } from 'react'
import { ImageComp } from './ImageComp'
import { StaticImageData } from 'next/image'

interface PhoneForMobileProps {
 image: StaticImageData,
}

const PhoneForMobile: FC<PhoneForMobileProps> = ({ image }) => {
    // const largeScreen = useWindowSize()?.height! >= 1024;
    const largeScreen = useIsLargeScreen();
    return (<>
        {!largeScreen ?
                <div className={cn("p-5 h-full w-full bg-black top-0 flex items-center justify-center rounded-[3rem]")} style={{ boxShadow: '10px 5px 10px rgb(0 0 0 / 0.3)' }}>
                    <ImageComp initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        src={image} alt='spir phone image' />
                </div>
            : null
        }
    </>
    )
}

export default PhoneForMobile