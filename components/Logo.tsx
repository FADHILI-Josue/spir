import { logoDark, logoWhite } from '@/assets'
import Image from 'next/image'
import { FC } from 'react'

interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({}) => {
  return <Image src={logoWhite} alt='logo spir' className='max-h-10 object-contain' />
}

export default Logo