import React, { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', hash: '#home' }, 
    { name: 'About', hash: '#about' },
    { name: 'Resume', hash: '#resume' },
    { name: 'Services', hash: '#services' },
    { name: 'Portfolio', hash: '#portfolio' },
    { name: 'Contact', hash: '#contact' },
];

export default function Navbar({ activeHash, setActiveHash }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const renderLink = (item) => {
        const isActive = activeHash === item.hash;
        return (
            <a 
                href={item.hash} 
                onClick={() => {
                    setActiveHash(item.hash);
                    setIsMenuOpen(false);
                }}
                className={`transition duration-300 ${isActive ? 'text-red-500' : 'text-white hover:text-red-500'}`}
            >
                {item.name}
            </a>
        );
    };

    useEffect(() => {
        const targets = navItems
            .map(item => document.getElementById(item.hash.substring(1)))
            .filter(el => el);

        const observer = new IntersectionObserver((entries) => {
            const visibleEntry = entries.find(entry => entry.isIntersecting);
            if (visibleEntry) {
                setActiveHash(`#${visibleEntry.target.id}`);
            }
        }, {
            rootMargin: '-30% 0px -70% 0px',
            threshold: 0, 
        });

        targets.forEach(target => observer.observe(target));

        return () => observer.disconnect();
    }, [setActiveHash]);

    return (
        <nav className="flex flex-row justify-between fixed w-full bg-black 
        py-7 px-4 lg:px-16 z-50">
            <h1 className="font-medium text-4xl text-white z-50">
                <a href="#home">Craftivo</a>
            </h1>

            <button 
                className="lg:hidden text-white text-3xl z-50 duration-300 
                hover:text-red-500 cursor-pointer" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>} 
            </button>

            <ul className="hidden lg:flex flex-row justify-between"> 
                {navItems.map((item) => (
                    <li key={item.name} className="mx-6 text-lg font-semibold">
                        {renderLink(item)}
                    </li>
                ))}
            </ul>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/95 pt-20 z-40">
                    <ul className="flex flex-col items-center space-y-10 mt-10"> 
                        {navItems.map((item) => (
                            <li key={item.name} className="text-xl font-semibold">
                                {renderLink(item)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}