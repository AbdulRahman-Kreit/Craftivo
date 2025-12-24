import React from 'react';

export default function PortfolioCard({ project, onOpenPopup }) {
    const { id, tags, year, imgUrl, link } = project;
    
    return (
        <div className='relative overflow-hidden group rounded-lg shadow-xl 
        bg-gray-900'>

            <img 
                src={imgUrl} 
                alt={`Project ${id}`} 
                className='w-full h-full object-cover transition duration-500 
                group-hover:scale-105'
            />
            
            <div className='absolute inset-0 bg-red-500/80 flex flex-col justify-center items-center 
                opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-full 
                group-hover:translate-y-0'>
                
                <div className='text-center mb-4'>
                    <h3 className='text-xl font-bold text-white'>Project {id}</h3>
                    <p className='text-sm text-gray-200'>{tags.join(' / ')}</p>
                </div>

                <div className='flex space-x-4'>
                    <a href={link} className='p-3 rounded-full bg-white 
                    text-red-500 hover:bg-gray-100 transition'>
                        <i className="fas fa-link"></i>
                    </a>
                    <button 
                        onClick={() => onOpenPopup(id)} 
                        className='p-3 rounded-full bg-white 
                        text-red-500 hover:bg-gray-100 transition
                        cursor-pointer'
                    >
                        <i className="fas fa-search-plus"></i>
                    </button>
                </div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 
            bg-black bg-opacity-70 p-4 
                flex justify-between items-center text-white'>
                
                <div className='text-xs'>
                    {tags.map((tag, index) => (
                        <span key={index} className='mr-2 uppercase font-medium'>
                            {tag}
                        </span>
                    ))}
                </div>
                <span className='text-sm font-semibold'>{year}</span>
            </div>
        </div>
    );
}