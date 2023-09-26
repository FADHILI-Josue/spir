'use client'
import { BannerBg, MobileBannerBg } from '@/assets'
import useIsLargeScreen from '@/hooks/isLargeScreen'
import Image from 'next/image'
import { FC } from 'react'

interface BannerbgProps {

}

const Bannerbg: FC<BannerbgProps> = ({ }) => {
    const isLargeScreen = useIsLargeScreen()
    return  <>
        {isLargeScreen ?
            <Image src={BannerBg} alt={'ouraring fixed home banner image'} className='absolute top-0 object-cover -z-10' /> :
            <Image src={MobileBannerBg} alt={'ouraring fixed home banner image'} className='absolute -top-30 object-cover -z-10' />
        }
    </>


}

export default Bannerbg