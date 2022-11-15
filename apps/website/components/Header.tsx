import Link from 'next/link'
import React from 'react'

type Props = {}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const Header = (props: Props) => {
  return (
    <header className="h-16 flex justify-between w-full items-center absolute top-0">
      <div className="cursor-pointer text-xl font-bold hover:underline">
        Jesreel
      </div>
      <nav className="space-x-4">
        {navItems.map((item) => (
          <Link
            href={item.href}
            passHref
            key={item.name}
            className="text-base font-medium hover:underline"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
