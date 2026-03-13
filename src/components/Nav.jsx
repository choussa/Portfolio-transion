import Link from 'next/link'
import React from 'react'
import { Link as TransitionLink } from 'next-transition-router'

const Nav = () => {
  return (
    <nav className='fixed top-6 left-0 w-full z-50 px-[8vw] flex justify-between items-center mix-blend-difference'>
      <TransitionLink href="/" className='text-xl font-bold tracking-tighter text-white'>
        PORTFOLIO©
      </TransitionLink>
      <div className='flex items-center gap-8 text-white uppercase text-xs tracking-widest font-medium'>
        <TransitionLink href="/" className='hover:opacity-70 transition-opacity'>Home</TransitionLink>
        <TransitionLink href="/about" className='hover:opacity-70 transition-opacity'>About</TransitionLink>
        <TransitionLink href="/work" className='hover:opacity-70 transition-opacity'>Work</TransitionLink>
      </div>
    </nav>
  )
}

export default Nav