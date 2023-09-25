import { logoDark, logoWhite } from '@/assets'
import Image from 'next/image'
import { FC } from 'react'

interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({}) => {
  return <Image src={logoWhite} alt='logo spir' className='object-contain max-h-10' />
}

export default Logo