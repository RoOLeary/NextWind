import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router';
library.add(faCog)

const element = <FontAwesomeIcon icon={faCog} size="3x" />

const Nav = () => {
   const router = useRouter();
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
    <div className="transition-all bg-black fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center" style={{ display: isOpen ? 'flex' : 'none', height: isOpen ? '100%' : '0' }}>
            <span onClick={() => toggleMenu()} className="absolute top-0 right-0 block w-24 h-24 flex items-center justify-center text-white font-black text-white text-l mr-8 mt-0 cursor-pointer">close</span>
            <ul className="flex flex-col text-center text-white font-black text-2xl md:text-4xl leading-loose tracking-wider">
                <li><Link href="/"><a className={`block hover:opacity-50 uppercase ${router.pathname == "/" ? "active" : ""}`}>Home</a></Link></li>
                <li><Link href="/about"><a className={`block hover:opacity-50 uppercase  ${router.pathname == "/about" ? "active" : ""}`}>About</a></Link></li>
                <li><Link href="/work" ><a className={`block hover:opacity-50 uppercase  ${router.pathname == "/work" ? "active" : ""}`}>Work</a></Link></li>
                <li><Link href="/contact"><a className={`block hover:opacity-50 uppercase  ${router.pathname == "/contact" ? "active" : ""}`}>Contact</a></Link></li>
                <li><Link href="/blog"><a className={`block hover:opacity-50 uppercase  ${router.pathname == "/blog" ? "active" : ""}`}>Blog</a></Link></li>
            </ul>
        </div>
	
    <div className="relative z-10 w-full h-24 px-12 bg-white flex justify-between">
      <p><Link href="/" to="/"><a className="block h-full flex items-center text-lg md:text-2xl font-bold tracking-widest text-black hover:text-black">Ronan O'Leary</a></Link></p>
      <a onClick={() => toggleMenu()} className="fixed right-0 block px-4 bg-black text-white text-center tracking-widest uppercase text-xs font-bold py-8 flex flex-col items-center justify-between hover:bg-gray-900 mr-10 -mt-2 z-100">
        <span onMouseEnter={(e) => triggerHover(e)} onMouseLeave={(e) => triggerHover(e)}>{element}</span>
      </a>
	</div>
  </>
  );
}

export default Nav;
