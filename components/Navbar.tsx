'use client'
import { logoWhite } from '@/assets'
import { Button, buttonVariants } from '@/components/ui/button'
import { navbarLinks } from '@/costants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Logo from './Logo'
import useIsLargeScreen from '@/hooks/isLargeScreen'
import MenuIcon from './MenuIcon'
import { useCycle } from 'framer-motion'
import TopBar from './TopBar'
import { useConfig } from '@/context/configProvider'

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = () => {

  const isLargeScreen = useIsLargeScreen()
  const {isOpen, toggleOpen} = useConfig()
  return <div className={cn('w-full z-40 bg-transparent flex items-center justify-around mt-4', {'justify-between mr-10':!isLargeScreen})}>
    <TopBar isOpen={isOpen} />
    <div className='flex items-center'>
    {!isLargeScreen && <MenuIcon isOpen={isOpen} toggleOpen={toggleOpen} />}
    <Logo />
    </div>
    <div className='space-x-8 flex items-center'>
      {isLargeScreen && navbarLinks?.filter((e) => e.name !== 'Home').map((e, i) => <Link key={i} href={e.href} className='navlink text-sm'>{e.name}</Link>)}
      <Link href={''} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-full', {'mr-8': isLargeScreen})}>shop now</Link>
    </div>
  </div>
}

export default Navbar