'use client'
import Navbar from '@/app/components/Navbar'
import { usePathname, useRouter } from 'next/navigation'
import { FC, ReactNode, useEffect, useState } from 'react'

interface MainTemplateProps {
    children: React.ReactNode,
    isMain?: boolean
}

const MainTemplate: FC<MainTemplateProps> = ({children,isMain=false}) => {
  const [active, setActive] = useState("");
	const router = useRouter();

  const pathname = usePathname()
	useEffect(() => {
		const path = pathname.split("/")[1];
		setActive(path);
	}, [router]);

  return <div className='w-full flex flex-col items-center'>
    {!isMain && <Navbar />}
    {children}
    </div>
}

export default MainTemplate