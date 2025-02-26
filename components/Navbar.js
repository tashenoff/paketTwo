import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';

function Navbar() {
    const menuItems = [
        { href: "/", label: 'Главная' },
        { href: "/about", label: 'О нас' },
        { href: "/contacts", label: 'Контакты' },
    ];

    return (
        <nav className="navbar bg-white w-full z-50 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between">
                {/* Логотип */}
                <Link href="/">
                    <img className="w-[140px] lg:block" src="/img/logo.png" alt="Logo" />
                </Link>

                {/* Мобильное меню */}
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

                            {/* Мобильное меню */}
                            <div className="menu bg-blue-800/80 backdrop-blur-lg text-white p-4 w-64 h-screen flex flex-col relative">
                                <Menu items={menuItems} />

                                {/* Контакты внизу меню */}
                                <div className="mt-auto p-4 text-lg flex flex-col gap-2">
                                    <a href="tel:87172531330" className="flex items-center gap-2">
                                        <PhoneIcon className="w-5 h-5 text-white" />
                                        8 (717) 253-13-30
                                    </a>
                                    <a href="tel:+77789801120" className="flex items-center gap-2">
                                        <PhoneIcon className="w-5 h-5 text-white" />
                                        +7 (778) 980-11-20
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Десктопное меню */}
                <div className="navbar-center hidden lg:flex justify-start">
                    <Menu items={menuItems} className="menu-horizontal font-bold px-1" />
                </div>

                {/* Контакты (для десктопа) */}
                <div className="hidden lg:flex gap-4 text-lg">
                    <a href="tel:87172531330" className="flex items-center gap-2">
                        <PhoneIcon className="w-5 h-5 text-black" />
                        8 (717) 253-13-30
                    </a>
                    <a href="tel:+77789801120" className="flex items-center gap-2">
                        <PhoneIcon className="w-5 h-5 text-black" />
                        +7 (778) 980-11-20
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
