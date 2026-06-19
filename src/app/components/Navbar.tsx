'use client';

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FiSun, FiMoon } from 'react-icons/fi'
import { CgClose, CgMenuRight } from 'react-icons/cg'

interface HeaderProps {
  logo: string
}

export default function Header({ logo }: HeaderProps)
{
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  
  const [isCollapse, setIsCollapse] = useState(true)
  const [scroll, setScroll] = useState(false)
  
  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false)
    }
    window.addEventListener('scroll', updateScroll)
    
    setMounted(true);
  }, [])
  
  
  const navs = ['home', 'about', 'projects', 'experience', 'contact']
  
  return (
    <header className={`backdrop-filter backdrop-blur-lg ${scroll ? 'border-b bg-white bg-opacity-40' : 'border-b-0'} dark:bg-gray-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}>
      <nav className='w-full lg:w-11/12 2xl:w-4/5 md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center justify-between'>
        <Link href={'/'} className='2xl:ml-6 hover:text-violet-700 hover:dark:text-violet-500 transition-colors duration-800'>
          <span className='text-lg font-medium'>{logo.split(' ')[0]}</span>
        </Link>
        
        <ul className='flex items-center gap-8'>
          {navs.map((navItem, index) => (
            <li key={index}>
              <ScrollLink
                className='hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer'
                to={navItem}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
              >
                {navItem}
              </ScrollLink>
            </li>
          ))}
          
          {mounted && (
            theme === 'dark' ? (
              <FiSun
                size={28}
                onClick={() => setTheme('light')}
                className="..."
              />
            ) : (
              <FiMoon
                size={28}
                onClick={() => setTheme('dark')}
                className="..."
              />
            )
          )}
        
        </ul>
      </nav>
      
      <nav className='p-4 flex sm:hidden items-center justify-between'>
        <span className='text-lg font-medium'>{logo.split(' ')[0]}</span>
        <div className='flex items-center gap-4'>
          
          {mounted && (
            theme === 'dark' ? (
              <FiSun
                size={28}
                onClick={() => setTheme('light')}
                className="..."
              />
            ) : (
              <FiMoon
                size={28}
                onClick={() => setTheme('dark')}
                className="..."
              />
            )
          )}
          
          
          <CgMenuRight size={20} onClick={() => setIsCollapse(false)} />
        </div>
      </nav>
      
      <div className={`flex min-h-screen w-screen absolute md:hidden top-0 ${!isCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
        <div className="w-2/4" onClick={() => setIsCollapse(true)}></div>
        
        <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-gray-900/95 w-3/4">
          <CgClose className='self-end my-2' size={20} onClick={() => setIsCollapse(true)} />
          
          {navs.slice(0, 4).map((menuItem) => (
            <ScrollLink
              key={menuItem}
              className='hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer'
              to={menuItem}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
              onClick={() => setIsCollapse(true)}
            >
              {menuItem}
            </ScrollLink>
          ))}
          <ScrollLink
            to='contact'
            offset={-60}
            smooth={true}
            duration={500}
            onClick={() => setIsCollapse(true)}
            className='px-6 py-1.5 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-center'>
            Contact
          </ScrollLink>
        </div>
      </div>
    
    </header>
  )
}