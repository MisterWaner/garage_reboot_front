import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Link } from '../../../lib/types';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links: Link[] = [
        { href: '/', label: 'Accueil' },
        { href: '/mecanique', label: 'Mécanique' },
        { href: '/carrosserie', label: 'Carrosserie' },
        { href: '/achat', label: 'Nos Occasions' },
        { href: '/contact', label: 'Contact' },
        { href: '/login', label: 'Accès professionnel' },
    ];

    return (
        <nav className='text-white bg-black font-montserrat font-bold w-full '>
            <ul className='hidden lg:flex items-center justify-end w-full'>
                {links.map((link) => (
                    <li className='lg:mr-8' key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <ul
                className={`lg:hidden absolute top-28 left-0 w-full bg-black/90 backdrop-blur-sm z-50 flex flex-col space-y-5 items-center py-5 transition-all duration-300 ease-in ${
                    isOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-5 pointer-events-none'
                }`}
            >
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <button
                className='absolute z-50 top-10 right-4 border-0 bg-transparent p-1 lg:hidden w-9 h-9'
                onClick={toggleMenu}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
}
