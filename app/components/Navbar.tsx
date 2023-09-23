import { Button, buttonVariants } from '@/components/ui/button'
import { navbarLinks } from '@/costants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = () => {
  return <div className={cn('w-full z-10 bg-transparent flex items-center justify-around translate-y-4', 
  )}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 992.197 308.653" className='max-w-[100px]'><path d="M63.443 27.388H190.38V0H63.443zm580.021 146.717H554.68V83.082h88.783c31.634 0 52.89 18.292 52.89 45.513 0 27.221-21.256 45.51-52.89 45.51m29.409 21.29c30.456-8.686 50.136-34.907 50.136-66.8 0-41.397-31.967-69.212-79.547-69.212H528.035v244.66h26.646V198.174h90.3l57.501 105.867h28.83l-59.946-108.218zM389.668 308.653c65.348 0 110.987-45.903 110.987-111.63V59.384h-27.387v135.793c0 50.688-34.377 86.09-83.6 86.09-40.798 0-84.709-26.94-84.709-86.09V59.384h-27.382v137.64c0 65.726 46.093 111.628 112.093 111.628m478.192-217.35 57.757 126.333H809.735zm-12.848-31.916L743.16 304.044h28.606l27.662-62.713h136.493l27.67 62.713h28.603L880.342 59.383zm-728.077-4.611C56.944 54.775 0 111.719 0 181.712c0 69.996 56.944 126.94 126.937 126.94 69.996 0 126.94-56.944 126.94-126.94 0-69.993-56.944-126.937-126.94-126.937m0 226.49c-54.893 0-99.553-44.66-99.553-99.553 0-54.892 44.661-99.55 99.554-99.55 54.894 0 99.556 44.658 99.556 99.55 0 54.893-44.662 99.553-99.556 99.553"></path></svg>
    <div className='space-x-8 flex items-center'>
    {navbarLinks?.filter((e)=>e.name!=='Home').map((e, i)=> <Link key={i} href={e.href} className='navlink '>{e.name}</Link>)}
    <Link href={''} className={cn(buttonVariants({variant: 'outline', size:'lg'}), 'rounded-full')}>shop now</Link>
    </div>
  </div>
}

export default Navbar