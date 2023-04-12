import Link from 'next/link';
import React from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  return (
    <header id="header" className="py-4 px-4 flex items-center justify-between">
      <div className="cursor-pointer text-xl font-bold hover:underline">
        Jesreel
      </div>
      <nav id="navigation" className="space-x-4">
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
  );
};

export default Header;
