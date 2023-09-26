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
            <Image src={BannerBg} alt={'ouraring fixed home banner image'} className='absolute top-0 -z-10 object-cover' /> :
            <Image src={MobileBannerBg} alt={'ouraring fixed home banner image'} className='-top-30 absolute -z-10 object-cover' />
        }
    </>


}

export default Bannerbg