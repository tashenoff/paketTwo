import React from 'react';
import PhoneNumber from './PhoneNumber';
import Menu from './Menu';
import Link from 'next/link';
// import { useScroll } from '../hooks/useScroll';
function Navbar() {
  
  // const isScrolled = useScroll();

    const menuItems = [
        { href: "/", label: 'Главная' },
        { href: "/about", label: 'О нас' },
        { href: "/contacts", label: 'Контакты' },
    ];

    const phoneNumbers = [
        { number: '8 (7172)53-13-30' }
    ];

    return (
      <nav className="navbar bg-white w-full z-50 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between">
                {/* Логотип */}
                <Link href="/">
                    <img className="w-[140px] lg:block" src="/img/logo.png" alt="Logo" />
                </Link>
                
                {/* Мобильное меню с Drawer */}
                <div className="lg:hidden">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            
                            {/* Фиксированный контейнер для меню */}
                            <div className="menu bg-blue-800/80 backdrop-blur-lg text-white p-4 w-64 h-screen flex flex-col relative">
                                <Menu items={menuItems} />

                                {/* Фиксируем телефоны внизу меню */}
                                <div className="mt-auto p-4">
                                    {phoneNumbers.map((phone, index) => (
                                        <PhoneNumber key={index} number={phone.number} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Десктопное меню */}
                <div className="navbar-center hidden lg:flex justify-start">
                    <Menu items={menuItems} className="menu-horizontal font-bold px-1" />
                </div>

                {/* Контакты (только для десктопа) */}
                <div className="hidden lg:flex gap-4">
                    {phoneNumbers.map((phone, index) => (
                        <PhoneNumber key={index} number={phone.number} />
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;