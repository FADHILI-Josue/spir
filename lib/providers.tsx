import ActiveSectionContextProvider from '@/context/active-section-context'
import { ConfigProvider } from '@/context/configProvider'
import { FC, ReactNode } from 'react'

interface providersProps {
    children: React.ReactNode,
    
}

const providers: FC<providersProps> = ({children,}) => {
  return <ConfigProvider>
  <ActiveSectionContextProvider>
    {children}
  </ActiveSectionContextProvider>
</ConfigProvider>
}

export default providers