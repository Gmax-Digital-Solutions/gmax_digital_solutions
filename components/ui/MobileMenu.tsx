import React from 'react'
import Link from 'next/link'
import { SlideIn } from '../animations/SlideIn'
import { Scale } from 'lucide-react'
import { ScaleIn } from '../animations'

const MobileMenu = () => {
  return (
    <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 w-[90%] bg-color-on-primary shadow-lg md:hidden rounded-lg z-50">
    <ScaleIn>
        <nav className="flex flex-col p-4 space-y-4">
            <Link href="/about" className="text-on-surface hover:text-primary">About</Link>
            <Link href="/services" className="text-on-surface hover:text-primary">Services</Link>
            <Link href="/case-studies" className="text-on-surface hover:text-primary">Case Studies</Link>
            <Link href="/blog" className="text-on-surface hover:text-primary">Blog</Link>
            <Link href="/insights" className="text-on-surface hover:text-primary">Insights</Link>
            <Link href="/process" className="text-on-surface hover:text-primary">Process</Link>
            <Link href="/faq" className="text-on-surface hover:text-primary">FAQ</Link>
            <Link href="/contact" className="text-on-surface hover:text-primary">Contact</Link>
          </nav>
    </ScaleIn>
      </div>
  )
}

export default MobileMenu
