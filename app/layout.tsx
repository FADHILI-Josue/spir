import { instrumental_serf } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import Providers from '@/lib/providers'
import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const instrumental = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'spir',
  description: 'spir the best app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <Providers>
      <body className={cn(inter.className, instrumental_serf.variable, 'w-full')}>{children}</body>
     </Providers>
    </html>
  )
}
