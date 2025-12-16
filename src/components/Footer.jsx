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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full'> {/* <--- تم إضافة w-full هنا */}
                    
                    {/* About Craftivo */}
                    <div>
                        <h4 className='text-xl font-semibold mb-6'>Craftivo</h4>
                        <p className='text-sm text-gray-400 mb-6 leading-relaxed'>
                            Cras ornare arcu dui vivamus magna. Donec rutrum congue leo eget malesuada. 
                            Nulla quis lorem ut libero malesuada feugiat. 
                            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                        <div className='flex space-x-3'>
                            {socialIcons.map((icon) => (
                                <a 
                                    key={icon.label} 
                                    href={icon.link} 
                                    aria-label={icon.label}
                                    className='w-10 h-10 rounded-full flex items-center justify-center 
                                    bg-gray-800 text-gray-400 hover:bg-red-500 hover:text-white transition'
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
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path} className='text-sm text-gray-400 hover:text-red-500 transition duration-300'>
                                        {link.name}
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