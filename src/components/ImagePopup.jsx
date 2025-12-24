import React, { useEffect, useCallback } from 'react';

export default function ImagePopup({ projects, currentIndex, setCurrentImageIndex, onClose }) {
    const goToNext = useCallback(() => {
        setCurrentImageIndex((currentIndex + 1) % projects.length);
    }, [currentIndex, projects.length, setCurrentImageIndex]);

    const goToPrev = useCallback(() => {
        setCurrentImageIndex((currentIndex - 1 + projects.length) % projects.length);
    }, [currentIndex, projects.length, setCurrentImageIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            } else if (e.key === 'ArrowLeft') {
                goToPrev();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose, goToNext, goToPrev]);


    const currentProject = projects[currentIndex];

    if (!currentProject) return null;

    return (
        <div 
            className='fixed inset-0 z-50 flex justify-center 
            overflow-y-auto bg-black bg-opacity-90 p-4 pt-16 pb-16' 
            onClick={onClose} 
        >
            <div 
                className='relative max-w-4xl w-full bg-gray-950 rounded-xl shadow-2xl p-6 md:p-10 transform transition-all duration-300' 
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className='absolute top-4 right-4 text-red-500 text-3xl 
                    hover:text-red-400 transition cursor-pointer'
                    aria-label="Close Project Details"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <button 
                    onClick={goToPrev} 
                    className='absolute left-2 top-1/2 -translate-y-1/2 
                    text-white bg-black/50 hover:bg-gray-600 p-3 
                    rounded-full z-10 duration-500 cursor-pointer'
                    aria-label="Previous Project"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button 
                    onClick={goToNext} 
                    className='absolute right-2 top-1/2 -translate-y-1/2 
                    text-white bg-black/50 hover:bg-gray-600 p-3 
                    rounded-full z-10 duration-500 cursor-pointer'
                    aria-label="Next Project"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        <img 
                            src={currentProject.imgUrl} 
                            alt={`Project ${currentProject.id}`} 
                            className='w-full h-auto rounded-xl shadow-lg'
                        />
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-3xl font-bold text-white mb-2'>
                            Project Details
                        </h2>
                        
                        <p className='text-gray-400 leading-relaxed text-sm'>
                            This project description can be expanded to show more detailed 
                            information like client, technology stack, 
                            and objectives.
                        </p>
                        
                        <p className='text-sm'>
                            <span className='font-semibold text-white'>
                                Category: 
                            </span> 
                            <span className='text-gray-400 mx-2'>
                                {currentProject.category}
                            </span>
                        </p>
                        <p className='text-sm'>
                            <span className='font-semibold text-white'>
                                Tags: 
                            </span> 
                            <span className='text-gray-400 mx-2'>
                                {currentProject.tags.join(', ')}
                            </span>
                        </p>
                        <p className='text-sm'>
                            <span className='font-semibold text-white'>
                                Year: 
                            </span> 
                            <span className='text-gray-400 mx-2'>
                                {currentProject.year}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}