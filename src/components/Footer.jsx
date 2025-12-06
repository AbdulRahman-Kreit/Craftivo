import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const usefulLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'About us', path: '/#about' },
        { name: 'Services', path: '/#services' },
        { name: 'Terms of service', path: '#' },
        { name: 'Privacy policy', path: '#' },
    ];

    const ourServices = [
        'Web Design',
        'Web Development',
        'Product Management',
        'Marketing',
        'Graphic Design',
    ];

    const socialIcons = [
        { icon: 'fab fa-x-twitter', label: 'Twitter', link: '#' },
        { icon: 'fab fa-facebook-f', label: 'Facebook', link: '#' },
        { icon: 'fab fa-instagram', label: 'Instagram', link: '#' },
        { icon: 'fab fa-linkedin-in', label: 'LinkedIn', link: '#' },
    ];


    return (
        <footer className='bg-black text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    {/* Branding and Description */}
                    <div>
                        <h3 className='font-medium text-4xl text-white mb-4'>
                            Craftivo
                        </h3>
                        <p className='text-sm text-gray-400 mb-6 max-w-xs'>
                            Cras fermentum odio eu feugiat lide per naso terra. Justo eget nada terra vide
                            magna derita valles darta donna mare fermentum lacuslu eu non diam phasellus.
                        </p>
                        <div className='flex space-x-3'>
                            {socialIcons.map((item, index) => (
                                <a key={index} href={item.link} aria-label={item.label}
                                    className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 
                                    text-gray-400 hover:text-red-500 hover:border-red-500 duration-300'>
                                    <i className={item.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className='text-xl font-semibold mb-6'>Useful Links</h4>
                        <ul className='space-y-3'>
                            {usefulLinks.map((item) => (
                                <li key={item.name} className='text-sm text-gray-400 hover:text-red-500 duration-300'>
                                    <Link to={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className='text-xl font-semibold mb-6'>Our Services</h4>
                        <ul className='space-y-3'>
                            {ourServices.map((service, index) => (
                                <li key={index} className='text-sm text-gray-400 hover:text-red-500 duration-300'>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className='text-xl font-semibold mb-6'>Contact Us</h4>
                        <address className='not-italic text-sm text-gray-400 space-y-3'>
                            <p>
                                A108 Adam Street<br />
                                New York, NY 535022<br />
                                United States
                            </p>
                            <p>
                                <strong>Phone:</strong> +1 5589 55488 55
                            </p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:info@example.com" className="hover:text-red-500 duration-300">info@example.com</a>
                            </p>
                        </address>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='bg-gray-900 py-6'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400'>
                    <p className='mb-1'>
                        &copy; {currentYear} - <strong className='text-white'>Craftivo</strong>. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}