import { useState } from 'react';
import { UserIcon, ShoppingCartIcon, HomeIcon, BriefcaseIcon,NewspaperIcon, InformationCircleIcon, ArrowLeftEndOnRectangleIcon, IdentificationIcon } from '@heroicons/react/20/solid';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu when a link is clicked (useful for mobile view)
  };

  const linkClass = (link) =>
    `flex justify-start items-center gap-1 px-4 py-2 rounded-2xl w-full ${
      activeLink === link
        ? "text-white bg-pink-400"
        : "text-neutral-700 hover:bg-pink-100"
    } text-lg md:text-2xl font-[BebasNeue] cursor-pointer`;

  const registerClass = (link) =>
    `flex justify-start items-center gap-1 px-4 py-3 rounded-2xl w-full ${
      activeLink === link
        ? "text-white bg-pink-300"
        : "text-white bg-pink-400"
    } text-lg md:text-2xl font-[BebasNeue] cursor-pointer`;

  return (
    <div className="w-full h-[94px] px-4 md:px-8 bg-white flex justify-between items-center fixed top-0 z-50">
      <a 
        className="flex flex-col justify-center items-start gap-2.5 cursor-pointer" 
        href="/"
        onClick={() => handleLinkClick("/")}
      >
        <div className="text-neutral-700 text-[24px] md:text-[32px] font-medium font-['Plus Jakarta Sans'] uppercase leading-[50px] mr-10">
          Logo
        </div>
      </a>
      <div className="hidden md:flex h-full justify-center items-center space-x-6 mx-4">
        <a className={linkClass("/")} href="/" onClick={() => handleLinkClick("/")}>
          Home
        </a>
        <a className={linkClass("/layanan")} href="/layanan" onClick={() => handleLinkClick("/layanan")}>
          Layanan
        </a>
        <a className={linkClass("/artikel")} href="/artikel" onClick={() => handleLinkClick("/artikel")}>
          Artikel
        </a>
        <a className={linkClass("/aboutus")} href="/aboutus" onClick={() => handleLinkClick("/aboutus")}>
          Tentang
        </a>
      </div>
      <div className="hidden md:flex h-full justify-end items-center space-x-2 md:space-x-[20px] ml-4">
        <a className={linkClass("/login")} href="/login" onClick={() => handleLinkClick("/login")}>
          Login
        </a>
        <a className={registerClass("/register")} href="/register" onClick={() => handleLinkClick("/register")}>
          Register
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-[94px] left-0 w-full bg-white flex flex-col items-center space-y-4 shadow-lg md:hidden">
          <div className="w-full flex flex-col items-start space-y-4 px-6">
            <a className={linkClass("/")} href="/" onClick={() => handleLinkClick("/")}>
              <HomeIcon className="h-6 w-6 text-gray-500 mr-7" />
              Home
            </a>
            <a className={linkClass("/layanan")} href="/layanan" onClick={() => handleLinkClick("/layanan")}>
              <BriefcaseIcon className="h-6 w-6 text-gray-500 mr-7" />
              Layanan
            </a>
            <a className={linkClass("/artikel")} href="/artikel" onClick={() => handleLinkClick("/artikel")}>
              <NewspaperIcon className="h-6 w-6 text-gray-500 mr-7" />
              Artikel
            </a>
            <a className={linkClass("/aboutus")} href="/aboutus" onClick={() => handleLinkClick("/aboutus")}>
              <InformationCircleIcon className="h-6 w-6 text-gray-500 mr-7" />
              Tentang
            </a>
          </div>
          <div className="w-full border-t border-gray-300 mt-4"></div>
          <div className="w-full flex flex-col items-start space-y-4 py-3 px-6">
            <a className={linkClass("/login")} href="/login" onClick={() => handleLinkClick("/login")}>
              <ArrowLeftEndOnRectangleIcon className='h-6 w-6 text-gray-500 mr-7'/>
              Login
            </a>
            <a className={registerClass("/register")} href="/register" onClick={() => handleLinkClick("/register")}>
              < IdentificationIcon className='h-6 w-6 text-white mr-7'/>
              Register
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
