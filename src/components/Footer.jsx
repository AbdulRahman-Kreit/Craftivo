import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const usefulLinks = [
        { name: 'Home', path: '#home' }, 
        { name: 'About us', path: '#about' },
        { name: 'Services', path: '#services' },
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
                    
                    {/* About Craftivo */}
                    <div>
                        <h4 className='text-3xl font-bold mb-4 text-white'>
                            Craftivo
                        </h4>
                        <p className='text-sm text-gray-400 mb-4'>
                            A108 Adam Street, New York, NY 535022, United States
                        </p>
                        
                        {/* Social Icons */}
                        <div className='flex space-x-3 mt-4'>
                            {socialIcons.map((icon, index) => (
                                <a 
                                    key={index}
                                    href={icon.link}
                                    aria-label={icon.label}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='bg-gray-900 
                                    flex items-center justify-center text-white 
                                    hover:text-red-500 hover:shadow-2xl 
                                    hover:shadow-red-500 duration-500'
                                >
                                    <i className={icon.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className='text-xl font-semibold mb-6'>Useful Links</h4>
                        <ul className='space-y-3'>
                            {usefulLinks.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.path} 
                                        className='text-sm text-gray-400 hover:text-red-500 transition duration-300'
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className='text-xl font-semibold mb-6'>Our Services</h4>
                        <ul className='space-y-3'>
                            {ourServices.map((service, index) => (
                                <li key={index} className='text-sm text-gray-400'>
                                    <i className="fa-solid fa-chevron-right text-red-500 text-xs mr-2"></i>
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