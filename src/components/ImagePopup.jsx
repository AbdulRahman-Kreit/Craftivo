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
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'
            onClick={onClose} 
        >
            <div 
                className='relative max-w-4xl w-full max-h-full bg-gray-900 rounded-lg shadow-2xl'
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose} 
                    className='absolute top-4 right-4 text-white text-2xl z-10
                    p-2 rounded-full bg-gray-800 hover:bg-red-500 
                    transition'
                >
                    <i className="fas fa-times"></i>
                </button>

                <div className='flex flex-col lg:flex-row'>
                    
                    <div className='flex-1 p-6 flex justify-center items-center 
                    relative'>
                        <img 
                            src={currentProject.imgUrl} 
                            alt={currentProject.title} 
                            className='max-h-[80vh] w-auto object-contain 
                            rounded'
                        />
                        
                        <button 
                            onClick={goToPrev} 
                            className='absolute left-2 top-1/2 transform 
                            -translate-y-1/2 p-3 rounded-full bg-gray-800 
                            text-white hover:bg-red-500 transition'
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            onClick={goToNext} 
                            className='absolute right-2 top-1/2 transform 
                            -translate-y-1/2 p-3 rounded-full bg-gray-800 
                            text-white hover:bg-red-500 transition'
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <div className='w-full lg:w-1/3 p-6 text-white border-t 
                    lg:border-t-0 lg:border-l border-gray-700'>
                        <h2 className='text-3xl font-bold mb-3 text-red-500'>
                            Project Details
                        </h2>
                        <h3 className='text-xl mb-4'>{currentProject.title || `
                        Project ${currentProject.id}`}</h3>
                        
                        <p className='text-gray-400 mb-4'>
                            A brief description of the project goes here. 
                            This section can be expanded to show more detailed 
                            information like client, technology stack, 
                            and objectives.
                        </p>
                        
                        <p className='text-sm'>
                            <span className='font-semibold text-white'>
                                Category: 
                            </span> 
                            <span className='text-gray-400'>
                                {currentProject.category}
                            </span>
                        </p>
                        <p className='text-sm'>
                            <span className='font-semibold text-white'>
                                Tags: 
                            </span> 
                            <span className='text-gray-400'>
                                {currentProject.tags.join(', ')}
                            </span>
                        </p>
                        <p className='text-sm'>
                            <span className='font-semibold text-white'>
                                Year: 
                            </span> 
                            <span className='text-gray-400'>
                                {currentProject.year}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}