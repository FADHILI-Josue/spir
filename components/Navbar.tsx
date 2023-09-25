import { logoWhite } from '@/assets'
import { Button, buttonVariants } from '@/components/ui/button'
import { navbarLinks } from '@/costants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Logo from './Logo'

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = () => {
  return <div className={cn('w-full z-10 bg-transparent flex items-center justify-around translate-y-4', 
  )}>

    <Logo />
    <div className='space-x-8 flex items-center'>
    {navbarLinks?.filter((e)=>e.name!=='Home').map((e, i)=> <Link key={i} href={e.href} className='navlink text-sm'>{e.name}</Link>)}
    <Link href={''} className={cn(buttonVariants({variant: 'outline', size:'lg'}), 'rounded-full')}>shop now</Link>
    </div>
  </div>
}

export default Navbar