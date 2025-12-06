import React, { useState, useEffect } from 'react';
import ProfileBg from '../assets/Imgs/profile-bg-5.webp';

const TYPING_STRINGS = [
    "UI Designer",
    "React Developer",
    "Next JS Expert",
    "Freelance Web Developer",
    "Express JS Developer",
    "MERN Stack Developer"
];

const socialIcons = [
    { id: 1, name: "fa-brands fa-facebook", link: "#" },
    { id: 2, name: "fa-brands fa-x-twitter", link: "#" },
    { id: 3, name: "fa-brands fa-instagram", link: "#" },
    { id: 4, name: "fa-brands fa-linkedin", link: "#" },
];

export default function Landing({ id }) {
    const [currentText, setCurrentText] = useState('');
    const [stringIndex, setStringIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const fullString = TYPING_STRINGS[stringIndex];
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const delayBetweenStrings = 1500;
        let timer;

        if (!isDeleting && charIndex < fullString.length) {
            timer = setTimeout(() => {
                setCurrentText(fullString.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            timer = setTimeout(() => {
                setCurrentText(fullString.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            }, deletingSpeed);
        } else if (!isDeleting && charIndex === fullString.length) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, delayBetweenStrings);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setStringIndex(prev => (prev + 1) % TYPING_STRINGS.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, stringIndex]);

    return (
        <section id={id || 'home'} className="min-h-screen pt-24 flex items-center justify-center text-white relative">
            
            <img 
                src={ProfileBg}
                alt="Profile Background"
                className='absolute inset-0 h-full w-full object-cover z-10'
            />
            
            <div className="absolute inset-0 bg-black opacity-70 z-20"></div>
            
            <div className="relative z-30 p-4 text-center">
                <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                    Hi, I'm <span className='text-red-500'>John Cooper</span>
                </h2>
                <p className="font-light text-2xl lg:text-3xl">
                    I'm a <span className="text-red-500 font-semibold">{currentText}</span>
                    <span className='inline-block w-0.5 h-7 bg-white animate-pulse ml-1'></span>
                </p>
                <div className="mt-6">
                    {socialIcons.map((icon) => {
                        return(
                            <a 
                            key={icon.id} 
                            href={icon.link}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='mx-3 p-2 text-2xl rounded-full h-8 w-8
                            hover:bg-red-500 duration-200 text-center'>
                                <i className={icon.name}></i>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}