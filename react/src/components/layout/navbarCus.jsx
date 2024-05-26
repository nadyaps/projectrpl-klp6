import { useState } from 'react';
import {
  DisclosureButton,
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { UserIcon, ShoppingCartIcon, HomeIcon, BriefcaseIcon,NewspaperIcon, InformationCircleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: null, // Change to null to simulate no image provided
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavCus() {

  const logout = (ev) => {
    ev.preventDefault();
    console.log('Logout');
  };

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
    `flex justify-start items-center gap-1 px-4 py-2 rounded-xl w-full ${
      activeLink === link
        ? "text-white bg-pink-400"
        : "text-neutral-700 hover:bg-pink-100"
    } text-lg md:text-2xl font-[BebasNeue] cursor-pointer`;

  return (
    <div className="w-full h-[94px] px-4 md:px-8 bg-white flex justify-between items-center fixed top-0 z-50 font-[BebasNeue]">
      <a
        className="flex flex-col justify-center items-start gap-2.5 cursor-pointer"
        href="/"
        onClick={() => handleLinkClick("/")}
      >
        <div className="text-neutral-700 text-[24px] md:text-[32px] font-medium uppercase leading-[50px] mr-10">
          Logo
        </div>
      </a>
      <div className="hidden md:flex h-full justify-center items-center space-x-6 mx-4">
        <a className={linkClass("/")} href="/" onClick={() => handleLinkClick("/")}>
          Home
        </a>
        <a className={linkClass("/layanan")} href="/services" onClick={() => handleLinkClick("/layanan")}>
          Layanan
        </a>
        <a className={linkClass("/articles")} href="/articles" onClick={() => handleLinkClick("/articles")}>
          Artikel
        </a>
        <a className={linkClass("/tentang")} href="/about" onClick={() => handleLinkClick("/tentang")}>
          Tentang
        </a>
      </div>
      <div className="hidden md:flex h-full justify-center items-center space-x-6 mx-4">
        <button className="relative flex items-center rounded-full bg-white p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white-400">
          <ShoppingCartIcon className="h-7 w-7 text-black" aria-hidden="true" />
        </button>
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              {user.imageUrl ? (
                <img className="h-7 w-7 rounded-full" src={user.imageUrl} alt="" />
              ) : (
                <UserIcon className="h-9 w-9 rounded-full text-black" />
              )}
            </MenuButton>
          </div>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <a
                    href='#'
                    onClick={(ev)=>logout(ev)}
                    className={classNames(
                    'block px-4 py-2 text-md text-gray-700'
                    )}
                  >
                    Logout
                  </a>
                </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-[94px] left-0 w-full bg-white flex flex-col items-center space-y-4 shadow-lg md:hidden">
          <div className="w-full flex flex-col items-start space-y-4 px-6">
            <a className={linkClass("/")} href="/dashboard" onClick={() => handleLinkClick("/")}>
              <HomeIcon className="h-6 w-6 text-gray-500 mr-7" />
              Home
            </a>
            <a className={linkClass("/layanan")} href="/services" onClick={() => handleLinkClick("/layanan")}>
              <BriefcaseIcon className="h-6 w-6 text-gray-500 mr-7" />
              Layanan
            </a>
            <a className={linkClass("/articles")} href="/articles" onClick={() => handleLinkClick("/articles")}>
              <NewspaperIcon className="h-6 w-6 text-gray-500 mr-7" />
              Artikel
            </a>
            <a className={linkClass("/tentang")} href="/about" onClick={() => handleLinkClick("/tentang")}>
              <InformationCircleIcon className="h-6 w-6 text-gray-500 mr-7" />
              Tentang
            </a>
            <a className={linkClass("/pemesanan")} href="/pemesanan" onClick={() => handleLinkClick("/pemesanan")}>
              <ShoppingCartIcon className="h-6 w-6 text-gray-500 mr-7" />
              Keranjang
            </a>
          </div>
          <div className="w-full border-t border-gray-300"></div>
          <div className="w-full flex flex-col items-start space-y-4 px-6">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                {user.imageUrl ? (
                  <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                ) : (
                  <UserIcon className="bg-gray-500 h-8 w-8 rounded-full text-white" />
                )}
              </div>
              <div className="ml-5">
                <div className="text-base font-medium leading-none text-gray-500">{user.name}</div>
                <div className="text-sm font-medium leading-none text-gray-500">{user.email}</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start py-2 px-6">
            <Disclosure
             as="a" href='#' onClick={(ev)=>logout(ev)} className={classNames('block px-4 py-3 text-lg text-gray-700')}
             >
              Logout
            </Disclosure>
          </div>
        </div>
      )}
    </div>
  );
}


