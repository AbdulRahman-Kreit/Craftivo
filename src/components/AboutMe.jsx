// AboutMe.jsx

import React from 'react';

export default function AboutMe() {
    return (
        <div className='p-6 text-white'>
            <p className="text-sm font-semibold uppercase
            inline-block py-2 px-3 mb-8 rounded-3xl bg-pink-950 text-red-500 ">
                ABOUT ME
            </p>
            
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                Transforming Ideas into Digital Reality
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                <div className='flex items-center space-x-4 p-4 border 
                border-gray-700 rounded-lg bg-gray-950 duration-200
                hover:border-red-500'>
                    <i className="fa-solid fa-briefcase text-red-500 text-xl"></i>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Experience</p>
                        <p className='font-medium text-lg'>9+ Years</p>
                    </div>
                </div>

                <div className='flex items-center space-x-4 p-4 border 
                border-gray-700 rounded-lg bg-gray-950 duration-200
                hover:border-red-500'>
                    <i className="fa-solid fa-graduation-cap text-red-500 text-xl"></i>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Degree</p>
                        <p className='font-medium text-lg'>Master of Science</p>
                    </div>
                </div>

                <div className='flex items-center space-x-4 p-4 border 
                border-gray-700 rounded-lg bg-gray-950 duration-200
                hover:border-red-500'>
                    <i className="fa-solid fa-location-dot text-red-500 text-xl"></i>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Based In</p>
                        <p className='font-medium text-lg'>Portland, OR</p>
                    </div>
                </div>

                <div className='flex items-center space-x-4 p-4 border 
                border-gray-700 rounded-lg bg-gray-950 duration-200
                hover:border-red-500'>
                    <i className="fa-solid fa-envelope text-red-500 text-xl"></i>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Email</p>
                        <p className='font-medium text-lg text-red-400'>contact@example.com</p>
                    </div>
                </div>
                
                <div className='flex items-center space-x-4 p-4 border 
                border-gray-700 rounded-lg bg-gray-950 duration-200
                hover:border-red-500'>
                    <i className="fa-solid fa-phone text-red-500 text-xl"></i>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Phone</p>
                        <p className='font-medium text-lg'>+1 (555) 234-5678</p>
                    </div>
                </div>
                
                <div className='flex items-center space-x-4 p-4 border 
                border-gray-700 rounded-lg bg-gray-950 duration-200
                hover:border-red-500'>
                    <i className="fa-solid fa-calendar-check text-red-500 text-xl"></i>
                    <div>
                        <p className='text-xs text-gray-400 uppercase'>Availability</p>
                        <p className='font-medium text-lg text-green-400'>Open to Work</p>
                    </div>
                </div>
            </div>
        </div>
    );
}