import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

library.add(faCog)

const element = <FontAwesomeIcon icon={faCog} size="3x" />

const Nav = () => {

   const [ isOpen, setIsOpen ] = useState(false);
   const [ isHover, setIsHover ] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const triggerHover = (e) => {
      e.currentTarget.classList.toggle('fa-spin');
      setIsHover(!isHover)
    }

  return (
    <>
    <div className="bg-black fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center" style={{ display: isOpen ? 'flex' : 'none' }}>
            <span onClick={() => toggleMenu()} className="absolute top-0 right-0 block w-24 h-24 flex items-center justify-center text-white font-black text-white text-l mr-8 mt-0 cursor-pointer">close</span>
            <ul className="flex flex-col text-left text-white font-black text-2xl md:text-4xl leading-loose tracking-wider uppercase">
                <li><Link href="/"><a className="block hover:opacity-50">Home</a></Link></li>
                <li><a href="/" className="block hover:opacity-50">Web Design</a></li>
                <li><a href="/" className="block hover:opacity-50">Web Development</a></li>
                <li><a href="/" className="block hover:opacity-50">Contact</a></li>
                <li><Link href="/blog"><a className="block hover:opacity-50">Blog</a></Link></li>
            </ul>
        </div>
	
    <div className="relative z-10 w-full h-24 px-12 bg-white flex justify-between">
      <Link href="/"><a className="block h-full w-12 flex items-center text-lg md:text-2xl font-bold tracking-widest text-black uppercase hover:text-black">RO|NXT|WND</a></Link>
      <a onClick={() => toggleMenu()} className="relative block px-4 bg-black text-white text-center tracking-widest uppercase text-xs font-bold py-8 flex flex-col items-center justify-between hover:bg-gray-900">
        <span onMouseEnter={(e) => triggerHover(e)} onMouseLeave={(e) => triggerHover(e)}>{element}</span>
      </a>
	</div>
  </>
  );
}

export default Nav;
