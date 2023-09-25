import { FC } from 'react'
import { BannerBg } from '@/assets/index'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface HomeBannerProps {

}

const HomeBanner: FC<HomeBannerProps> = ({ }) => {
    return <div className='w-full h-[95vh] fixed z-0 border flex items-center border-black'>
        <Image src={BannerBg} alt={'ouraring fixed home banner image'} className='absolute top-0 object-cover -z-10' />
        <div className='mx-[10%]'>
            <div className="flex flex-col space-y-4">
                <span className="font-serif text-5xl max-w-md">The most <em className="font-serif">trusted</em> smart ring.</span>
                <p className='max-w-md text-zinc-700'>Health tracking wrapped around your finger — track your sleep, activity and recovery in style.</p>
                <Button size={'sm'} className='w-fit rounded-full p-6'>Shop Now</Button>
            </div>
            <div className=""></div>
        </div>
    </div>
}

export default HomeBanner