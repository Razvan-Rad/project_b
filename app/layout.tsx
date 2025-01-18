import './globals.css'
import { Inter } from 'next/font/google'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import Footer from '@/components/generic/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Razvan\'s page',
  description: 'Find everything about me and my work',
  keywords: 'Razvan, Razvan\'s page, Razvan\'s work, CV, Resume',
  ogImage: '/images/obunga.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="ml-3 mt-3" />
          <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  )
}

