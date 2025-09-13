'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Code, User, Briefcase, MessageSquare } from 'lucide-react'
import clsx from 'clsx'

const navigation = [
  { name: 'Projects', href: '/projects', icon: Code },
  { name: 'About', href: '/about', icon: User },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Testimonials', href: '/testimonials', icon: MessageSquare },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold gradient-text"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-400 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span>Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-md border border-border rounded-b-lg shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}