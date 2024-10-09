import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <h3 className="text-lg  gap-1 flex flex-col text-lime-300">
        Chandradeep
        <span className="text-2xl -mt-2 font-extralight text-white">
          Prasad
        </span>
      </h3>
    <div className='mr-10 max-lg:hidden'>
        <Navbar />
    </div>
      <Link href="https://wa.me/+919635901369">
        <BsWhatsapp className="size-8 text-green-500" />
      </Link>
    </div>
  )
}

export default Header