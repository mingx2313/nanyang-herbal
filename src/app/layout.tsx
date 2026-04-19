import type { Metadata } from 'next'
import './globals.css'
import { WhatsAppBubble } from '@/components/layout/WhatsAppBubble'
import { SessionProvider } from '@/components/providers/SessionProvider'

export const metadata: Metadata = {
  title: '南洋本草 Nanyang Herbal',
  description: '承袭东方本草智慧,以现代工艺呈现南洋风土的健康之道',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col bg-ivory text-cacao">
        <SessionProvider>
          {children}
          <WhatsAppBubble />
        </SessionProvider>
      </body>
    </html>
  )
}
