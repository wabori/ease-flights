import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = ({ page = 'home' }) => {
  return (
    <header className='w-full'>
        <nav className='flex justify-between items-center py-5'>
            <Link data-menu-item href={"/home"} className='flex justify-between gap-2 items-center'>
                <p className='nav-logo text-[24px] sm:text-[19px] font-mono font-bold'>ha<span data-last-name className=' bg-black text-white pr-[43px]'>vori</span></p>
            </Link>
            {page == "home" && (
              <Link data-menu-item href={'/conta'} className='flex flex-row items-center'>
                <User size={24} className='mr-2  text-[24px]' /> <p className='text-[24px] hidden sm:block sm:text-[16px]'>Conta</p>
              </Link>
            )}
        </nav>
    </header>
  )
}

export default Navbar
