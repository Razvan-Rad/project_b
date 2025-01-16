'use client'
// UNUSED

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const navItems = [
  { name: 'Intro', href: '/' },
  { name: 'Project 1', href: '/project/1' },
  { name: 'Project 2', href: '/project/2' },
  { name: 'Project 3', href: '/project/blender' },
  {name: 'My Resume', href: '/resume'},
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 z-50 flex w-72 flex-col border-r">
      <div className="border-b px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">Docs</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-4">
          {navItems.map(item => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={`w-full justify-start ${pathname === item.href ? 'bg-muted' : ''}`}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

