import React, { useState, useEffect } from 'react';

export default function ToTopButton({ setActiveHash }) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (setActiveHash) {
        // تأخير بسيط للسماح بانتهاء التمرير السلس قبل تحديث الهاش
        setTimeout(() => {
            setActiveHash('#home');
        }, 100); 
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 rounded-full 
      bg-red-600 text-white shadow-lg shadow-red-500/50 
      transition-opacity duration-500 ease-in-out cursor-pointer
      ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} 
      hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500`}
      aria-label="Scroll to top"
    >
        <i className="fa-solid fa-arrow-up text-lg"></i>
    </button>
  );
}